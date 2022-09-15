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

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| coordinate | *number* | Read-write | Position of the guide measured from the ruler origin in pixels. The value can be a decimal number.  Note: the user can move the ruler origin which will affect the position value of the guides.  ***Fixes in Photoshop 24.0:***  - *Return correct value when resolution is not 72 PPI* |
| direction | [*Direction*](/ps_reference/modules/constants/#direction) | Read-write | Indicates whether the guide is vertical or horizontal |
| docId | *number* | Read-only | The ID of the document of this guide. |
| id | *number* | Read-only | For use with batchPlay operations. This guide ID, along with its document ID can be used to represent this guide for the lifetime of this document or the guide. |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | Owner document of this guide |
| typename | *string* | Read-only | The class name of the referenced Guide object |

## Methods

### delete

*void*

Deletes the guide from the document.
