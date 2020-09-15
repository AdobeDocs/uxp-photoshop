---
title: Guides - Adobe Analytics
description: This is the guides overview page of Adobe Analytics 
---

# Get Started

To get started with Analytics 2.0 APIs you must first decide whether your application will need
an OAuth client or a JWT client.

## Authentication

There are multiple type of authentication for authenticating with the analytics APIs. General information
about authenticating with Adobe's APIs is located here. Specific information related to authenticating
with the analytics APIs is available in the sections below

## OAuth

Use an OAuth client if you are creating an application that requires an end use to authenticate before
calling the Adobe Analytics APIs. The OAuth tokens expire after 24 hours and the end user must then
re-authenticate before they will be able to call the APIs. To authenticate with an OAuth client, you first
create an OAuth client on the [Adobe I/O Console](https://console.adobe.io).

<InlineAlert variant="info" slots="text"/>

The refresh token grant type is automatically added to OAuth clients created after September 18, 2019

## JWT

A JWT client is best if you are creating an application that needs to programmatically authenticate calls to 
the Adobe Analytics APIs. A new JWT token can be generated whenever the old one is about to expire so your application
can continue to make API calls.  