---
id: "coremodules"
title: "CoreModules"
sidebar_label: "CoreModules"
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

# CoreModules

## Namespaces

- [photoshopAction](/ps_reference/media/photoshopaction/)
- [photoshopCore](/ps_reference/media/photoshopcore/)

## Interfaces

- [ActionDescriptor](/ps_reference/interfaces/actiondescriptor/)
- [BatchPlayCommandOptions](/ps_reference/interfaces/batchplaycommandoptions/)
- [CPUInfo](/ps_reference/interfaces/cpuinfo/)
- [ExecuteAsModalOptions](/ps_reference/interfaces/executeasmodaloptions/)
- [ExecutionContext](/ps_reference/interfaces/executioncontext/)
- [GPUInfo](/ps_reference/interfaces/gpuinfo/)
- [HistoryStateInfo](/ps_reference/interfaces/historystateinfo/)
- [OpenCLDeviceInfo](/ps_reference/interfaces/opencldeviceinfo/)
- [OpenGLDeviceInfo](/ps_reference/interfaces/opengldeviceinfo/)

## Enumerations

### ColorConversionModel

These internal numbers are used by Photoshop as target color spaces during [photoshopCore.convertColor](/ps_reference/media/photoshopcore/#convertcolor) calls.

| Name | Description |
| :------ | :------ |
| CMYK | - |
| Gray | - |
| HSB | - |
| Lab | - |
| RGB | - |

## Type aliases

### CPUVendorKind

Ƭ **CPUVendorKind**: ``"Intel"`` \| ``"AMD"`` \| ``"ARM"`` \| ``"Unknown"``
