---
id: "guide"
title: "Guide"
sidebar_label: "Guide"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# Guide

Represents a single guide in the document.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| coordinate | *number* | R W | 23.0 | Position of the guide measured from the ruler origin in pixels. The value can be a decimal number.  Note: the user can move the ruler origin which will affect the position value of the guides.  ***Fixes in Photoshop 24.0:*** - *Return correct value when resolution is not 72 PPI* |
| direction | [*Direction*](/ps_reference/modules/constants/#direction) | R W | 23.0 | Indicates whether the guide is vertical or horizontal. |
| docId | *number* | R | 23.0 | The ID of the document of this guide. |
| id | *number* | R | 23.0 | For use with batchPlay operations. This guide ID, along with its document ID can be used to represent this guide for the lifetime of this document or the guide. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 23.0 | Owner document of this guide. |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Guide&quot;*. |

## Methods

### delete
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Deletes the guide from the document.
