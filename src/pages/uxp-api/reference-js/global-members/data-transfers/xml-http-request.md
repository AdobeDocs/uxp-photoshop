---
title: window.XMLHttpRequest
description: Overview of window.XMLHttpRequest
---

# window.XMLHttpRequest


## XMLHttpRequest()
XMLHttpRequest objects are used to interact with servers.
You can retrieve data from a URL without having to do a full page refresh.
This enables a Web page to update just part of a page without disrupting what the user is doing.

In order to leverage `XMLHttpRequest`, update the `manifest.json` with the `network.domains` permission shown in the example section

\<b\> Example \</b\>

```json
{
  "permissions": {
      "network": {
          "domains": [
              "https://www.adobe.com",
              "https://*.adobeprerelease.com",
              "wss://*.myplugin.com"
          ]
      }
  }
}
```

\<b\>Limitation:\</b\>
From UXP v7.4.0 onwards `permissions.network.domains` does not support WildCards in top-level domains. Example:

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Returns**: `XMLHttpRequest` - New XMLHttpRequest object  


## responseURL : `string`
**Read only**
URL of the response or the empty string if the URL is null.
Any URL fragment present in the URL will be stripped away and will be the final URL obtained after any redirects.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    console.log(xhr.responseURL);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## readyState : `number`
**Read only**
State of the XMLHttpRequest object. Available states are as follows.

     UNSENT(0):           Object has been constructed.
     OPENED(1):           open() method has been successfully invoked.
     HEADERS_RECEIVED(2): All headers of a response have been received.
     LOADING(3):          Response body is being received.
     DONE(4):             Data transfer has been completed or something went wrong during the transfer.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## responseText : `string`
**Read only**
Text receive from a server following a request being sent.
If readyState is not either LOADING or DONE, it returns the empty string.

**Throws**:

- `DOMException` InvalidStateError if XMLHttpRequest.responseType is not set to either the empty string "" or "text".

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## responseXML : `Document`
**Read only**
Document containing the XML or HTML received by the request or
null if the request was unsuccessful, has not yet been sent, or
if the data cannot be parsed as XML or HTML.

**Throws**:

- `DOMException` If responseType is not either the empty string or "document".

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseXML);
    }
};
xhr.open("GET", "https://www.mydocumentserver.com");
xhr.responseType = "document";
xhr.send();
```


## response : `string` \| `ArrayBuffer` \| `Blob` \| `Document` \| `Object`
**Read only**
Response's body content.
The value is null if the request is not yet complete or was unsuccessful.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.response);
    }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## status : `number`
**Read only**
HTTP status code of the response.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    console.log(xhr.status);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## statusText : `string`
**Read only**
String containing the response's status message.
It will be an empty string if the request's readyState is UNSENT or OPENED.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    console.log(xhr.statusText);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## timeout : `number`
Number of milliseconds a request can take before automatically being terminated.
Default value is 0, which means there is no timeout.



## timeout
**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.adobe.com");
xhr.ontimeout = (e) => {
    console.log("xhr timed out");
};
xhr.timeout = 2000;  // 2,000 milliseconds
xhr.send();
```


## responseType : `string`
Type of data contained in the response.
Available types are as follows.

     "" (Empty string): Default type. Same as "text".
     "text"           : Text in s string.
     "arrayBuffer"    : ArrayBuffer containing binary data.
     "blob"           : Blob object containing binary data.
     "document"       : HTML Document or XML Document based on MIME type of the received data.
     "json"           : Object created by parsing the contents of the received data as JSON.



## responseType
**Throws**:

- `DOMException` If readyState is either LOADING or DONE.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.responseType = "blob";
```


## withCredentials : `boolean`
Gets the value of the withCredentials. It indicates whether to send cookies on a HTTP request.
When the value is set to true, XMLHttpRequest sends cookies. Otherwise, cookies are not sent.
Note that unlike the specification, the default is true.



## withCredentials
**Throws**:

- `DOMException` If readyState is neither UNSENT nor OPENED or send() is invoked.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```


## upload : `XMLHttpRequestEventUpload`
**Read only**
XMLHttpRequestEventUpload object that can be used to monitor an upload's progress.
The following events can be triggered on an upload object and used to monitor the upload.

     'loadstart'  : Upload has begun.
     'progress'   : Periodically delivered to indicate the amount of progress made so far.
     'abort'      : Upload operation was aborted.
     'error'      : Upload failed due to an error.
     'load'       : Upload completed successfully.
     'timeout'    : Upload timed out because a reply did not arrive within the time interval specified by the timeout.
     'loadend'    : Upload finished.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.myserver.com");
xhr.upload.onprogress = (e) => {
    console.log(`Uploading ${(e.loaded / e.total) * 100}%`);
};
const arraybuffer = new ArrayBuffer(1024 * 1024);
// fill the arraybuffer with contents.
xhr.send(arraybuffer);
```


## abort()
Aborts the request if it has already been sent.
When a request is aborted, its readyState is changed to UNSENT(0) and the request's status code is set to 0.

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onabort = () => {
    console.log("aborted");
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
abortButton.addEventListener("click", () => {
    xhr.abort();
});
```


## getAllResponseHeaders()
Returns sorted and combined response’s header list.
Each header field is defined by a group of [lower cased name]": "[value]"\r\n". Combined value is separated by ", ".

**Returns**: `string` - All the response headers.  
**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        console.log(xhr.getAllResponseHeaders());
    }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## getResponseHeader(name)
Returns the matching value of the given field name in response's header.
The search key value is case-insensitive.

**Returns**: `string` - Value of the given name in response's header list.  
**Throws**:

- `TypeError` If the name parameter is not provided.


| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name to search in response's header list. |

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        console.log(xhr.getResponseHeader("Content-Type"));
    }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```


## open(method, url, [async], [user], [password])
Initializes a request or re-initializes an existing one.
Self-signed certificates are not currently supported for HTTPS connections.
Note that UXP does not support synchronous request, which means 'async' is false.

**Throws**:

- `DOMException` NotSupportedError if async parameter is false
- `DOMException` TypeError if method and url parameters are not provided
- `DOMException` SyntaxError if either method is not valid or url cannot be parsed.
- `DOMException` SecurityError if method matches for CONNECT, TRACE or TRACK.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| method | `string` |  | HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs. |
| url | `string` |  | String representing the URL to send the request to. |
| [async] | `boolean` | `true` | Optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously.                               If this value is false, the send() method does not return until the response is received.                               If true, notification of a completed transaction is provided using event listeners.                               This must be true if the multipart attribute is true, or an exception will be thrown. |
| [user] | `string` | `null` | Optional user name to use for authentication purposes; by default, this is the null value. |
| [password] | `string` | `null` | Optional password to use for authentication purposes; by default, this is the null value. |



## overrideMimeType(mimetype)
Specifies a MIME type other than the one specified in the response to be used
when interpreting the data being transferred in a request.
If it fails to parse the MIME type, "application/octet-stream" will be used to interpret the data.

**Throws**:

- `DOMException` If state is LOADING or DONE


| Param | Type | Description |
| --- | --- | --- |
| mimetype | `string` | MIME type to use instead of the one specified in the response. Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid. |

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    console.log(xhr.response);
    console.log(xhr.responseText);
};
xhr.open("GET", "https://www.myxmlserver.com");
xhr.overrideMimeType("text/plain");
xhr.send();
```


## setRequestHeader(header, data)
Adds a new request header or appends a value to an existing request header.
If a header is forbidden request header, it does nothing and just returns.
The following are forbidden request headers.

     `Accept-Charset`
     `Accept-Encoding`
     `Access-Control-Request-Headers`
     `Access-Control-Request-Method`
     `Connection`
     `Content-Length`
     `Cookie`
     `Cookie2`
     `Date`
     `DNT`
     `Expect`
     `Host`
     `Keep-Alive`
     `Origin`
     `Referer`
     `Set-Cookie`
     `TE`
     `Trailer`
     `Transfer-Encoding`
     `Upgrade`
     `Via`
     If header starts with `proxy-` or `sec-`.

**Throws**:

- `DOMException` InvalidStateError if either state is not OPENED or send() is already invoked.
- `DOMException` SyntaxError if a header is not a header name or if data is not a header value.


| Param | Type | Description |
| --- | --- | --- |
| header | `string` | Name of the header whose value is to be set. |
| data | `string` | Value to set as the body of the header. |

**Example**  
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.mywebserver.com");
xhr.setRequestHeader("Accept", "text/xml");
xhr.send();
```


## send([body])
Sends the request to the server.
Body can be a Blob, an ArrayBuffer, a TypedArray, a DataView, a FormData or a string.
If no value is specified for the body, a default value of null is used.

There is a caveat for sending a FormData object. The files in the FormData object are being read after calling this method.
To ensure uploading files as-is, the file contents or files shouldn't be changed until uploading files to the server is done. see [XMLHttpRequest.upload](#module-global-xmlhttprequest-upload).
If there is a problem during reading files, the XMLHttpRequest transaction initiated by this method can be aborted with an error event fired.

**Throws**:

- `DOMException` InvalidStateError if either state is not OPENED or send() is already invoked.
- `Error` Body is not a supported type.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `*` | `\null` | Body of data to be sent in the request. |

**Example** *(Getting the resource as text)*  
```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
    console.log(xhr.responseText);
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
**Example** *(Post request)*  
```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        console.log(xhr.responseText);
    }
};
xhr.open("POST", "https://www.myserver.com");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("foo=bar&lorem=ipsum");
```

  