---
id: "imaging"
title: "Imaging API"
sidebar_label: "Imaging API"
---

# Imaging API

The Imaging API allows JavaScript to work directly with image data in Photoshop documents.

The Imaging API are exposed on the `imaging` sub-module under "photoshop". You can access these APIs by using the follow code:
```javascript
const imaging = require("photoshop").imaging;
```

## Terminology and data types
Image data is expressed as a collection of `pixels`. A pixel represents all color information for a single point in the image. A pixel consists of one or more components of color values and alpha information.

An RGB pixel with alpha information has four components: "red", "green", "blue", and "alpha". An opaque RGB pixel has only three components. Including an alpha channel as a fourth yields RGBA.
An opaque gray scale pixel has one component. A gray scale pixel with alpha has two components.

In order to properly interpret pixel data, Photoshop needs to know which color profile the data is expressed in. An example of a color profile is `"Adobe RGB (1998)"`. Photoshop will perform color conversions when needed. You can get the list of available color profiles by invoking [getColorProfiles](../classes/photoshop/#getcolorprofiles) on the app object:
```javascript
const rgbProfiles = await require("photoshop").app.getColorProfiles("RGB");

const grayProfiles = await require("photoshop").app.getColorProfiles("Gray");
```
Lab data uses the "Lab D50" color profile.

When working with 32 bit images, Photoshop will return color profile names that include the description 'Linear Profile'. An example is `"(Linear RGB Profile)"`. This text should not be included when specifying a profile. If a document profile is listed as `Adobe RGB (1998) (Linear RGB Profile)`, then you would use the string `Adobe RGB (1998)` when specifying a profile with a method such as createImageDataFromBuffer.

Photoshop supports two ways to store pixel information in memory:
* `chunky`: Components of a single pixels are stored consecutively in memory. If you have two opaque RGB pixels (pixel 1 and pixel 2), then they will be stored as: `[R1, G1, B1, R2, G2, B2]`.
* `planar`: Similar components are stored consecutively in memory. Components for a single pixel may not appear consecutively in memory. If you have two opaque RGB pixels, then they will be stored as: `[R1, R2, G1, G2, B1, B2]`.

JavaScript APIs use the chunky format by default.


Image data is represented by a `PhotoshopImageData` instance. This instance has the following methods and properties:

#### *PhotoshopImageData*
| Name          | Type        | Description |
| ------------- | ----------- | ----------- |
| width         | Number      | The width of the image data in pixels. |
| height        | Number      | The height of the image data in pixels. |
| colorSpace    | String      | The color space (or mode) for the image data. This can be `"RGB"`, `"Grayscale"`, `"Lab"`. |
| colorProfile  | String      | The color profile for the image data. For example, `"sRGB IEC61966-2.1"`. If the color profile is empty, then the profile of a target document will be used. |
| hasAlpha      | Boolean     | True if the image data includes an alpha channel. |
| components    | Number      | Number of components per pixel. This is 3 for RGB, 4 for RGBA and so forth. |
| componentSize | Number      | Number of bits per component. This can be 8, 16, or 32.|
| pixelFormat   | String      | Memory layout (order) of components in a pixel. Could be `"RGB"`, `"RGBA"`, `"Grayscale"`, `"GrayscaleAlpha"`, `"LAB"`, or `"LABAlpha"`. |
| isChunky      | Boolean     | True if the image data internally is using the chunky format. |
| type          | String      | Type of contained data. At the moment only "image/uncompressed" is supported. |
| getData       | Method      | [See documentation below.](#getdata) |
| dispose       | Method      | [See documentation below.](#dispose) |

When specifying bounds in the Imaging API, the resulting region will include the left and top locations up to the right and bottom locations. As an example: `{left: 0, top: 0, right: 10, bottom: 10}` will target ten pixels from location 0 to 9 in both directions (not including pixels from location 10). You can specify height and width instead of right and bottom - doing so can make the code easier to read: `{left: 0, top: 0, width: 10, height: 10}`.

The value range for pixel components depend on the componentSize.

| Component Size | Value range | Comments |
| -------------- | ----------- | -------- |
| 8              | 0..255      |          |
| 16             | 0..32768    |          | 
| 32             | 0..1+       | High dynamic range images may have component values that are below 0 or above 1.0 |

Instances of `PhotoshopImageData` cannot be created explicitly by JavaScript, but are returned from Imaging API methods.
* [getPixels](#getpixels)
* [getLayerMask](#getlayermask)
* [getSelection](#getselection)
* [createImageDataFromBuffer](#createimagedatafrombuffer)


---
## Performance considerations
Photoshop images can be (very) large. It is therefore important to manage the image data carefully in JavaScript.
If you use a large amount of JavaScript memory, then you may see warnings in the UDT debugger console such as the following:
```
Plugin memory usage increased to: 600MB.
Plugin exceeds memory limit. Currently used memory 600.
```

The potential large data space has a number of implications.

First off, all Imaging API methods that return pixels are asynchronous. This is needed because modifying and even querying pixel data may incur disk I/O.

When requesting pixels, use the smallest possible target size. Specifying a small target size allows Photoshop to optimize the retrieval (and possibly document compositing) of the source region.

When you are done working with image data, then you should call `dispose` on the `PhotoshopImageData` instance. This allow Photoshop to release memory immediately rather than waiting for garbage collection.

Converting image data between different color spaces or color profiles is somewhat time consuming. Whenever possible, work with a color space and color profile that match the document that you are operating on.


---
## APIs

### PhotoshopImageData
#### `getData`
Return pixel information from an `PhotoshopImageData` instance as a typed array. The return type depends on the `componentSize` of the image.

| Component Size | Return type |
| -------------- | ----------- |
| 8              | Uint8Array  |
| 16             | Uint16Array |
| 32             | Float32Array  |

The method takes an options argument. This argument can be used to specify attributes of the returned data. Possible options include:
* `chunky` | Boolean - Optional. If true then the data is returned as chunky data. If false, then data is returned in the planar format. The default value is true.
* `fullRange` | Boolean - Optional. This value is only used for 16 bit data. If true then the returned 16 bit pixel data use the full 16 bit range [0..65535]. If false, then the returned pixel data use the reduced Photoshop range: [0..32768]. The default value is false.

Return value: `Promise<Uint8Array | Uint16Array | FloatArray>`

The method is asynchronous, and thus returns a promise with the described data type.

Example:
```javascript
const pixelData = await imageObj.imageData.getData()
```

#### `dispose`
Calling this synchronous method will release the contained image data. Doing so will reduce memory usage faster then waiting for the JavaScript garbage collector to run.

```javascript
pixelData.dispose();
```


---
### getPixels
This API allows JavaScript to obtain pixel data from a Photoshop document. You can request pixels from an individual layer, or from the full document composite.

```javascript
const imageObj = await imaging.getPixels(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If missing, or negative, then the source is the active document.
   * `layerID` | Number - Optional.  The id of the source layer. If the value is not provided then the API returns pixels from the composite document image.
   * `historyStateID` | Number - Optional. The id of a history state that the thumbnail should be created for. If not provided, then the current document state is used. This option can be used to get pixels from past document states.
   * `sourceBounds` | Object - Optional.  The region whose pixels should be returned. If the value is not provided, then pixels from the entire layer or document are is returned. The provided bounds will be trimmed to only that region that contains pixel data. In this event, the returned `sourceBounds` will reflect this smaller region. The provided object must describe a rectangle using one the following number-value property sets:
        * `left`, `top`, `right`, and `bottom`
        * `left`, `top`, `width`, and `height`
   * `targetSize` | Object - Optional.  The dimensions of the returned image. If this value is not provided then the returned size will match the requested size. That is, no scaling will be performed on the returned pixels. The provided object must have one or more of the following attributes:
      * `width` and `height`. If only one dimension is included, then the returned image data is scaled proportionally to match the requested dimension.
   * `colorSpace` | String - Optional. Requested color space of the returned pixels. If omitted, then the color space of the source document is used to convert colors.
   * `colorProfile` | String - Optional. The name of a color profile to apply to the returned pixels. If omitted, then the resulting color profile depends on the requested color space:
      * If the requested color space matches the source document, then the returned data will use the color profile of the source document.
      * If the requested color space is different from the source document, then the working color profile for that color space is used to convert colors.
   * `componentSize` | Number - Optional. The requested `componentSize` of the returned image data. If this property is omitted then the `componentSize` of the source pixel data is used. The value can be: -1 (for using the source document's depth), 8 , 16, or 32.
   * `applyAlpha` | Boolean - Optional. If true, then RGBA pixels will be converted to RGB by matting on white. The returned imageData property will not contain an alpha channel. Note that any areas devoid of pixel data will still be trimmed, see `sourceBounds` above.

Return value: `Promise<Object>`

The returned object has the following properties:
   * `imageData` | [PhotoshopImageData](#photoshopimagedata). A `PhotoshopImageData` instance describing the returned pixel data.
   * `sourceBounds` | Object. The actual bounds used when obtaining pixels (see note regarding pyramid levels below).
   * `level` | Number. The pyramid level that was used when obtaining pixels.

Note: the `components` property of the image data depends on whether or not the pixel source includes an alpha channel, e.g., 4 for RGBA.

If the targetSize is smaller than the requested region, then the resulting image data will be scaled down. When scaling, Photoshop may use a smaller (cached) version of the image canvas. This is known as a pyramid level. The number of pyramid levels that are available in a document is determined by the preference: *"Performance Cache Levels"*. Using a cache level may result in dramatic performance improvements. The returned level indicates which level that was used. Level 0 indicates the full resolution canvas. Level 1 indicates a cache that is half of the size of the full resolution, and so forth. The returned `sourceBounds` are relative to the bounds of the source cache level (not relative to the full resolution bounds).

The valid bounds for the `sourceBounds` depend on the pixel source. The origin of the composite image is `(0, 0)`,and the size is given by the properties `width` and `height` on the DOM object for the source document. The origin of a pixel layer can be different from `(0, 0)`. You can get the valid pixel bounds for a layer by calling `boundsNoEffects` on the DOM object corresponding to the source layer.


Example - create a thumbnail of an region of the target document that is 100 pixels tall.
```javascript
const thumbnail = await imaging.getPixels({
    sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
    targetSize: { height: 100 }
});
```


---
### putPixels
This API allows JavaScript to change pixel data in a layer. You can replace all pixels in a layer or a region of the layer.

```javascript
await imaging.putPixels(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If missing, or negative, then the source is the active document.
   * `layerID` | Number - ***Required***.  The id of the target layer. The target layer must be a pixel layer.
   * `imageData` | [PhotoshopImageData](#photoshopimagedata) - ***Required***. Value describing the pixel data.
   * `replace` | Boolean - Optional. Describes how pixels are added to the layer. If true, then existing pixels in the layer are discarded before adding new pixels. If false, then the new pixels are added to the existing pixel content in the layer. The default value is true.
   * `targetBounds` | Object - Optional.  The region where the pixels should be inserted. If the value is not provided, then pixels are inserted at the origin `(0, 0)` of the document. The provided object must include the following values: `left`, `top`. (Dimension keys `width` and `height` are not used.)
   * `commandName` | String - Optional. If provided then this name is used when creating an entry in the history panel.

Example:
```javascript
await imaging.putPixels({
    layerID: 123
    imageData: imageData
});
```

---
### getLayerMask
This API allows JavaScript to retrieve the pixel data representing a layer's mask.
```javascript
const imageObj = await imaging.getLayerMask(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If the number is missing or negative, then the source will be the active document.
   * `layerID` | Number - ***Required***.  The id of the source layer.
   * `kind` | String - Optional. The kind of mask to return. There are two options: `"user"` or `"vector"`. The default value is `"user"` which is the kind (pixel) applied by "Add Layer Mask" button.
   * `sourceBounds` | Object - Optional.  The region whose pixels should be returned. If the value is not provided, then pixels from the entire mask are returned. The provided object must describe a rectangle using the following number properties:
      * `left`, `top`, `right`, and `bottom`
   * `targetSize` | Object - Optional.  The dimensions of the returned image. If this value is not provided then the returned size will match the requested size (i.e. no scaling is performed on the returned pixels). The provided object must have one or more of the following attributes:
      * `width` and `height`. If only one dimension is provided then the returned image data is scaled proportionally to match the requested dimension.

Return value: `Promise<Object>`

The returned object has the following properties:
   * `imageData` | [PhotoshopImageData](#photoshopimagedata). A `PhotoshopImageData` instance representing the pixels in the requested user mask. A user mask is represented as a single channel (gray scale image).
   * `sourceBounds` | Object. The actual bounds used when obtaining the mask pixels.

Example - get the user mask for a layer
```javascript
const imageObj = await imaging.getLayerMask({
    documentID: 123,
    layerID: 5,
    kind: "user"
    sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
    targetSize: { height: 100 }
});
```


---
### putLayerMask
This API allows JavaScript to edit the pixels of a layer's mask.  At this time, only pixel masks are editable. In the UI, they are what is referred to as a "Layer Mask".  

```javascript
await imaging.putLayerMask(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If the number is missing or negative, then the source will be the active document.
   * `layerID` | Number - ***Required***.  The id of the target layer.
   * `kind` | String - Optional. The kind of mask to change. Only `"user"` is accepted at this time. The default value is `"user"`.
   * `imageData` | [PhotoshopImageData](#photoshopimagedata) - ***Required***. Value describing the mask data. This must be image data with a single component using the grayscale color model.
   * `replace` | Boolean - Optional. Describes how mask pixels are added. If true, then the existing mask in the layer is discarded before creating a new mask. If false, then the new image data is placed into to the existing mask in the layer. The default value is true.
   * `targetBounds` | Object - Optional.  The region where the pixels should be inserted. If the value is not provided, then pixels are inserted at the origin `(0, 0)`. The provided object must include the following values: `left`, `top`. (Dimension keys `width` and `height` are not used here.)
   * `commandName` | String - Optional. If provided, then this name is used when creating an entry in the history panel.

Example:
```javascript
await imaging.putLayerMask({
    layerID: 123
    imageData: grayImageData
});
```


---
### getSelection
This API allows JavaScript to obtain a pixel representation of the active selection. Think of it like entering [Quick Mask mode](https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html). 
```javascript
const imageObj = await imaging.getSelection(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If missing, or negative, then the source is the active document.
   * `sourceBounds` | Object - Optional.  The region whose pixels should be returned. If the value is not provided, then pixels from the entire selection are returned. The provided object must describe a rectangle using the following number properties:
      * `left`, `top`, `right`, and `bottom`
   * `targetSize` | Object - Optional.  The dimensions of the returned image. If this value is not provided, then the returned size will match the requested size (i.e. no scaling is performed on the returned pixels). The provided object must have one or more of the following attributes:
      * `width` and `height`. If only one dimension is provided, then the returned image data is scaled proportionally to match the requested dimension.

Return value: `Promise<Object>`

The returned object has the following properties:
   * `imageData` | [PhotoshopImageData](#photoshopimagedata). A `PhotoshopImageData` instance representing the selection.
   * `sourceBounds` | Object. The actual bounds used when obtaining the selection pixels.

Example - get the document selection
```javascript
const imageObj = await imaging.getSelection({
    documentID: 123,
    sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 }
});
```


---
### putSelection
This API allows JavaScript to change the selection itself using a provided pixel data representation.  Think of it like exiting [Quick Mask mode](https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html).

```javascript
await imaging.putSelection(options);
```

* options | Object - ***Required***
Options describing the operation.
   * `documentID` | Number - Optional.  The id of the source document. If missing, or negative, then the source is the active document.
   * `replace` | Boolean - Optional. Describes how selection is modified. If true, then the existing document selection is discarded before creating a new selection. If false, then the new image data is added to the existing document selection. The default value is true.
   * `targetBounds` | Object - Optional.  The region where the selection should be inserted. If the value is not provided, then selection pixels are inserted at the origin `(0, 0)`. The provided object must include the following values: `left`, `top`. (Dimension keys `width` and `height` are not used here.)
   * `commandName` | String - Optional. If provided, then this name is used when creating an entry in the history panel.

Example:
```javascript
await imaging.putSelection({ imageData: grayImageData });
```


---
### createImageDataFromBuffer
This API allows JavaScript to create arbitrary image data from a memory buffer.

```javascript
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
```

* `imageData` | Typed array - ***Required*** | Describes the image data. Accepted types are: `Uint8Array`, `Uint16Array`, and `FloatArray`. The array type will indicate the componentSize of the provided data. See table above.
* options | Object - ***Required***
Options describing the operation.
   * `width` | Number - ***Required***. The width of the image.
   * `height` | Number - ***Required***. The height of the image.
   * `components` | Number - ***Required***. Number of components per pixel.
   * `chunky` | Boolean - Optional. Describes pixel layout. See discussion above. The default value is true.
   * `colorProfile` | String - Optional. Describes the color profile associated with the image data. See note regarding color profiles and 32 bit pixel data at the beginning of this document.
   * `colorSpace` | String - ***Required***. Describes the color space associated with the image data.
   * `fullRange` | Boolean - Optional. This value is only used for 16 bit data. Set to true if you are providing pixel data that use the full 16 bit range [0..65535]. Set to false if data is using the reduced range: [0..32768]. The default value is false.

Return value: `Promise<PhotoshopImageData>`

The number of elements in imageData must be equal to: `width * height * components`.

Example:
```javascript
const width = 30;
const height = 40;
const components = 4;  // RGBA
const componentCount = width * height;
const dataSize = componentCount * components;
const arrayBuffer = new Uint8Array(dataSize);

// Add some (chunky) data to the buffer
for (let i = 0 ; i < componentCount; i += components) {
    arrayBuffer[index]   = 255;      // red
    arrayBuffer[index+1] = 0;        // green
    arrayBuffer[index+2] = 0;        // blue
    arrayBuffer[index+3] = 127;      // alpha
}

const options = {
   width: width,
   height: height,
   components: components,
   colorProfile: "sRGB IEC61966-2.1",
   colorSpace: "RGB"
};
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options)
```

Image data that is used for layer masks or document selections uses a single grayscale component. When creating such data, use `components: 1`, `colorSpace: "Grayscale"` and `colorProfile: "Gray Gamma 2.2"` as shown in the following example:

```javascript
const width = 30;
const height = 40;
const componentCount = width * height;
const arrayBuffer = new Uint8Array(componentCount);

for (let i = 0 ; i < componentCount; ++i) {
   arrayBuffer[i] = 127; // all set to the median value
}

const options = {
   width: width,
   height: height,
   components: 1,  // masks are grayscale
   chunky: false,
   colorProfile: "Gray Gamma 2.2",
   colorSpace: "Grayscale"
};
const maskData = await imaging.createImageDataFromBuffer(arrayBuffer, options)
```


---
### encodeImageData
This API is exposed to allow image data to be used with UXP image elements. With the current version of UXP you must use jpeg/base64 encoding when assigning to an image element.

```javascript
const dataImage = await imaging.encodeImageData(options);
```

* options | Object - Required
Options describing the operation.
   * imageData | [PhotoshopImageData](#photoshopimagedata) - ***Required***. Value describing the pixel data.
   * base64 | Boolean - Optional. If provided, then the returned value will be a string that is base64 encoded.


Return value: `Promise<Number[] | string>`

Example:
```javascript
const imageElement = document.createElement('img');

const jpegData = await imaging.encodeImageData({"imageData": imgObj.imageData, "base64": true});

const dataUrl = "data:image/jpeg;base64," + jpegData;
imageElement.src = dataUrl;
document.body.appendChild(imageElement);
```


---
## Sample files
Here you will find a sample plugin ([how to load](../../../guides/devtool/plugin-management/#adding-an-existing-plugin)) and [UXP JavaScript file](uxpscripting.md) (.psjs) that exercise most of the above.

* ### UXP plugin - [imaging-test](assets/imaging-test.zip)
* ###  UXP script - [imaging.psjs](assets/imaging.psjs)
* ###  UXP script with dialog - [imaging_dialog.psjs](assets/imaging_dialog.psjs)
