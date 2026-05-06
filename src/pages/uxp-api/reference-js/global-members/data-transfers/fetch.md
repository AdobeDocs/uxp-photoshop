---
title: window.fetch(input, [init])
description: Fetches a resource from the network.
---

# window.fetch(input, [init])
Fetches a resource from the network.

**Returns**: `Promise<Response>` Promise that resolves to a Response object.  
**Throws**:

- `TypeError` If init.body is set and init.method is either "GET" or "HEAD".
- `TypeError` If either network error or network time-out occurs after a http request is made.
- `TypeError` If there is a failure in reading files in FormData during posting FormData.
\<br\>\</br\>
In order to leverage `fetch`, update the `manifest.json` with the `network.domains` permission shown below.
\<b\>Example:\</b\>

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
From UXP v7.4.0 onwards `permissions.network.domains` does not support WildCards in top-level domains.
\<b\>Example:\</b\>

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**See**: [Headers](headers.md), [Request](request.md) and [Response](response.md)  

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Either the URL string to connect with or a Request object having the URL and the init option. |
| [init] | `Object` | `(Optional)` Custom settings for a HTTP request. |
| [init.method] | `string` | HTTP request method. The default value is "GET". |
| [init.headers] | `Headers` | HTTP request headers to add. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `URLSearchParams` | Body to add to HTTP request. |
| [init.credentials] | `string` | Indicates whether to send cookies. The default value is "include". Possible values and functions are as follows: \<ul style="list-style: none;"\>  \<li\>"omit" : cookies are NOT sent.\</li\> \<li\>"include" : cookies are sent.\</li\> \</ul\> |


