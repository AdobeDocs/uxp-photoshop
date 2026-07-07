---
title: window.ImageBlob
description: Since: UXP v7.0.0
---

# window.ImageBlob
**Since**: UXP v7.0.0  


## ImageBlob(arrayBuffer, options)
Blobs are used to create URLs, which can be used as `src` in `HTMLImageElement`. It can be created using image data in the standard compression formats such as PNG, JPG, JPEG ,etc.
ImageBlob is a custom type that extends the support to use uncompressed image data. \<br\>\</br\>
e.g. ImageBlob can be created by passing arrayBuffer containing the RGB values for each pixel and options containing metadata to interpret the data in arraybuffer.

ImageBlob can be created in the following ways
- standard image compression formats: pass ArrayBuffer of the `standard compression formats` and mimeType of the compression in the options.type.
- uncompressed image: pass ArrayBuffer of the uncompressed image data i.e. raw data of each pixel and options to interpret the data, option.type should be passed as "image/uncompressed".\<br\>\</br\>

[PhotoshopImageData](/ps-reference/media/imaging.md#photoshopimagedata-1) is compatible with ImageBlob,
`PhotoshopImageData` object can be directly passed in for options.

\<b\>Note: `ImageBlob support is subject to enablement by HostApp. Currently supported by Photoshop.`\</b\>

**Returns**: Instance of `ImageBlob` with the given data  
**Throws**:

- `TypeError` thrown if the arrayBuffer is not of type ArrayBuffer
- `Error` thrown if the height or width is not provided or if either is < 0
- `Error` thrown if the colorSpace mentioned is not supported
- `Error` thrown if the componentSize mentioned is not supported
- `Error` thrown if the ByteLength of not matching the required size as per the given options
- `Error` thrown if the PixelFormat mentioned is not supported


| Param | Type | Description |
| --- | --- | --- |
| arrayBuffer | `ArrayBuffer` | ArrayBuffer containing the image data |
| options | `Object` | Meta data to interpret ArrayBuffer passed. For standard compression options.type is mandatory, for uncompressed image data all the values are mandatory unless mentioned optional |
| options.type | `string` | mimeType of the imageData passed. Could be standard formats "image/png", "image/jpg" and for uncompressed data "image/uncompressed" |
| options.width | `number` | The width in pixels of the image data |
| options.height | `number` | The height in pixels of the image data |
| options.colorSpace | `string` | The color space (or mode) for the image data. This can be "RGB" or "Grayscale" |
| options.hasAlpha | `boolean` | True if the image includes an alpha channel |
| options.components | `number` | Number of components per pixel. This is 3 for RGB, 4 for RGBA and so forth |
| options.componentSize | `number` | Number of bits per component. This can be 8 or 16 |
| options.pixelFormat | `string` | Memory layout (order) of components in a pixel. Could be "RGB", "RGBA", or "Gray" |
| options.colorProfile | `string` | `[Optional]` - The color profile (or mode) for the image data. This could be be "Adobe RGB (1998)" |

**Example**  
```js
// Updating HTML with ImageBlob
<!DOCTYPE html>
<html>

<head>
<script src="index.js"></script>
</head>
<style>
body {
  background-color: whitesmoke;
  padding: 0 16px;
}

#image,

container {
   margin: 8px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start
}
</style>

 <body>
<div class="container">
   <sp-button id="pixel-btn" variant="secondary" quiet>Paint image</sp-button>
   <img id="image"></img>
</div>

</body>
</html>

//Creating ImageBlob by creating the options Object seperatly and then pass the Object as argument
function getPixel() {
 const imageMetaData = {
    width : 8,
    height : 8,
    colorSpace : "RGB",
    colorProfile : "",
    pixelFormat : "RGB",
    components : 3,
    componentSize : 8,
    hasAlpha : false, // Alpha is set to false
    type : "image/uncompressed",
 }

 let buffer = new ArrayBuffer(imageMetaData.width * imageMetaData.height * 3);
 let colorArrayView = new Uint8Array(buffer);
 for(let i = 0; i < colorArrayView.length / 4; i++) {
    // here we are creating a red image, update values to see the variations
    colorArrayView[i * 3] = 255; // Red Component
    colorArrayView[i * 3 + 1] = 0; // Green Component
    colorArrayView[i * 3 + 2] = 0; // Blue Component
 }
 let imageBlob = new ImageBlob(colorArrayView, imageMetaData);
 // Generate url which can be used as src on HTMLImageElement
 const url = URL.createObjectURL(imageBlob);
 // ensure that there is a HTMLImageElement in the Document with id `image`.
 const imageElement = document.getElementById("image");
 imageElement.src = url;

 // revoke(destroy image from the memory) when url is no more required.
 URL.revokeObjectURL(url);
}
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("pixel-btn").addEventListener("click", getPixel);
});
```
**Example**  
```js
// Creating ImageBlob using PhotoshopImageData object(more details about PhotoshopImageData in description).
const photoshopImageObject; // get image object using Photoshp's imaging apis.
let colorArrayView = await photoshopImageObject.getData();

let imageBlob = new ImageBlob(colorArrayView, photoshopImageObject);
// Generate url which can be used as src on HTMLImageElement
const url = URL.createObjectURL(imageBlob);
// ensure that there is a HTMLImageElement in the Document with id `image`.
const imageElement = document.getElementById("image");
imageElement.src = url;

// revoke(destroy image from the memory) when url is no more required.
URL.revokeObjectURL(url);
```


## size : `number`
**Read only**
Size of the Blob in bytes.



## type : `string`
**Read only**
MIME type of the Blob.



## arrayBuffer()
Get the contents of the Blob in the form of an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer that contains the blob's data in binary form.  


## slice([start], [end], [contentType])
Get a portion of the Blob's data selected from start to end (end not included).

**Returns**: `Blob` - New Blob object containing the specified subset of the data contained with the blob on which this method was called.
The original blob is not altered.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob indicating the first byte to include in the new Blob |
| [end] | `number` | `size` | `(Optional)` Index into the Blob indicating the first byte that will NOT be included in the new Blob |
| [contentType] | `string` | `&quot;\&quot;\&quot;&quot;` | `(Optional)` String containing the file's [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or empty string if the type could not be determined. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |



## stream()
Get the data contained within the Blob as a ReadableStream.

**Returns**: `ReadableStream` - Content of the Blob.  


## text()
Get contents of the Blob as a string.

**Returns**: `Promise<string>` Promise that resolves with a string which contains the blob's data as a text string.
The data is always presumed to be in UTF-8 format.  

  