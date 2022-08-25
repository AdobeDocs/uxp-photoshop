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
| coordinate | *number* | Read-write | Location of the guide from origin of image, in float units.  In the future, we will accept a UnitValue here, supporting number input for floatUnit |
| direction | [*Direction*](/ps_reference/modules/constants/#direction) | Read-write | Indicates whether the guide is vertical or horizontal |
| docId | *number* | Read-only | The ID of the document of this guide. |
| id | *number* | Read-only | For use with batchPlay operations. This guide ID, along with its document ID can be used to represent this guide for the lifetime of this document or the guide. |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | Owner document of this guide |
| typename | *string* | Read-only | The class name of the referenced Guide object |

## Methods

### delete

*void*

Deletes the guide from the document.
