---
id: "eventcodes"
title: "Event Codes"
sidebar_label: "Event Codes"
---

## Event Codes

There are two kinds of events to use with the two `addNotificationListener` methods. 
- [`action.addNotificationListener`](./photoshopaction/#addnotificationlistener) is used with Photoshop events that alter a document.
- [`core.addNotificationListener`](./photoshopcore/#addnotificationlistener) is used with other events including those involving the UI and coming from the operating system.


### Action Events
The first table contains action events, the four-character ID codes used in ExtendScript, and the string event used with [`action.addNotificationListener`](./photoshopaction/#addnotificationlistener). 


| Action Event Name | Old Char Code | String Code |
| :--------- | :------------ | :---------- |
| 3D Transform | TdT  | 3DTransform|
| Average | Avrg | $Avrg|
| Apply Style | ASty | applyStyle|
| Assert | Asrt | assert|
| Accented Edges | AccE | accentedEdges|
| Add | Add  | add|
| Add Noise | AdNs | addNoise|
| Add To | AddT | addTo|
| Align | Algn | align|
| All | All  | all|
| Angled Strokes | AngS | angledStrokes|
| Apply Image | AppI | applyImageEvent|
| Bas Relief | BsRl | basRelief|
| Batch | Btch | batch|
| Batch From Droplet | BtcF | batchFromDroplet|
| Blur | Blr  | blurEvent|
| Blur More | BlrM | blurMethod|
| Border | Brdr | border|
| Brightness | BrgC | brightnessEvent|
| Canvas Size | CnvS | canvasSize|
| Chalk Charcoal | ChlC | chalkCharcoal|
| Channel Mixer | ChnM | channelMixer|
| Charcoal | Chrc | charcoal|
| Chrome | Chrm | chrome|
| Clear | Cler | clearEvent|
| Close | Cls  | close|
| Clouds | Clds | clouds|
| Color Balance | ClrB | colorBalance|
| Color Halftone | ClrH | colorHalftone|
| Color Range | ClrR | colorRange|
| Colored Pencil | ClrP | colorPalette|
| Conte Crayon | CntC | centerCropMarks|
| Contract | Cntc | contract|
| Convert Mode | CnvM | convertMode|
| Copy | copy | copyEvent|
| Copy Effects | CpFX | copyEffects|
| Copy Merged | CpyM | copyMerged|
| Copy To Layer | CpTL | copyToLayer|
| Craquelure | Crql | craquelure|
| Create Droplet | CrtD | createDroplet|
| Crop | Crop | crop|
| Crosshatch | Crsh | crosshatch|
| Crystallize | Crst | crystallize|
| Curves | Crvs | curves|
| Custom | Cstm | custom|
| Cut | cut  | cut|
| Cut To Layer | CtTL | cutToLayer|
| Dark Strokes | DrkS | darkStrokes|
| De Interlace | Dntr | deInterlace|
| Define Pattern | DfnP | definePattern|
| Defringe | Dfrg | defringe|
| Delete | Dlt  | delete|
| Desaturate | Dstt | desaturate|
| Deselect | Dslc | deselect|
| Despeckle | Dspc | despeckle|
| Difference Clouds | DrfC | $DrfC|
| Diffuse | Dfs  | diffuse|
| Diffuse Glow | DfsG | diffuseGlow|
| Disable Layer FX | dlfx | disableLayerFX|
| Displace | Dspl | displace|
| Distribute | Dstr | distort|
| Draw | Draw | draw|
| Dry Brush | DryB | dryBrush|
| Duplicate | Dplc | duplicate|
| Dust And Scratches | DstS | dustAndScratches|
| Emboss | Embs | emboss|
| Equalize | Eqlz | equalize|
| Exchange | Exch | exchange|
| Expand | Expn | expand|
| Export | Expr | export|
| Jumpto | Jpto | $Jpto|
| Extrude | Extr | extrude|
| Facet | Fct  | facet|
| Fade | Fade | fade|
| Feather | Fthr | feather|
| Fibers | Fbrs | $Fbrs|
| Film Grain | FlmG | filmGrain|
| Filter | Fltr | filter|
| Find Edges | FndE | findEdges|
| Flatten Image | FltI | flattenImage|
| Flip | Flip | flip|
| Fragment | Frgm | fragment|
| Fresco | Frsc | fresco|
| Gaussian Blur | GsnB | gaussianBlur|
| Get | getd | get|
| Glass | Gls  | glass|
| Glowing Edges | GlwE | glowingEdges|
| Gradient | Grdn | gradientClassEvent|
| Gradient Map | GrMp | gradientMapEvent|
| Grain | Grn  | grain|
| Graphic Pen | GraP | graphicPen|
| Group | GrpL | groupEvent|
| Grow | Grow | grow|
| Halftone Screen | HlfS | halftoneScreen|
| High Pass | HghP | highPass|
| HSBHSL | HsbP | $HsbP|
| Hue Saturation | HStr | hueSaturation|
| Image Size | ImgS | imageSize|
| Import | Impr | import|
| Ink Outlines | InkO | inkOutlines|
| Intersect | Intr | interfaceIconFrameDimmed|
| Intersect With | IntW | interfaceWhite|
| Inverse | Invs | inverse|
| Invert | Invr | invert|
| Lens Flare | LnsF | lensFlare|
| Levels | Lvls | levels|
| Lighting Effects | LghE | lightingEffects|
| Link | Lnk  | link|
| Make | Mk  | make|
| Maximum | Mxm  | maximum|
| Median | Mdn  | median|
| Merge Layers | Mrg2 | mergeLayersNew|
| Merge Layers Old | MrgL | mergeLayers|
| Merge Spot Channel | MSpt | mergeSpotChannel|
| Merge Visible | MrgV | mergeVisible|
| Mezzotint | Mztn | mezzotint|
| Minimum | Mnm  | minimum|
| Mosaic | Msc  | mosaic|
| Mosaic_PLUGIN | MscT | mosaicPlugin|
| Motion Blur | MtnB | motionBlur|
| Move | move | move|
| NTSCColors | NTSC | NTSC|
| Neon Glow | NGlw | neonGlow|
| Next | Nxt  | next|
| Note Paper | NtPr | notePaper|
| Notify | Ntfy | notify|
| Ocean Ripple | OcnR | oceanRipple|
| Offset | Ofst | offset|
| Open | Opn  | open|
| Paint | Pnt  | paint|
| Paint Daubs | PntD | paintDaubs|
| Palette Knife | PltK | paletteKnife|
| Paste | past | paste|
| Paste Effects | PaFX | pasteEffects|
| Paste Into | PstI | pasteInto|
| Paste Outside | PstO | pasteOutside|
| Patchwork | Ptch | patchwork|
| Photocopy | Phtc | photocopy|
| Pinch | Pnch | pinch|
| Place | Plc  | placeEvent|
| Plaster | Plst | plaster|
| Plastic Wrap | PlsW | plasticWrap|
| Play | Ply  | play|
| Pointillize | Pntl | pointillize|
| Polar | Plr  | polar|
| Poster Edges | PstE | posterEdges|
| Posterize | Pstr | posterization|
| Previous | Prvs | previous|
| Print | Prnt | print|
| Profile To Profile | PrfT | profileToProfile|
| Purge | Prge | purge|
| Quit | quit | quit|
| Radial Blur | RdlB | radialBlur|
| Rasterize | Rstr | rasterize|
| Rasterize Type Sheet | RstT | rasterizeTypeLayer|
| Remove Black Matte | RmvB | removeBlackMatte|
| Remove Layer Mask | RmvL | removeLayerMask|
| Remove White Matte | RmvW | removeWhiteMatte|
| Rename | Rnm  | rename|
| Replace Color | RplC | replaceColor|
| Reset | Rset | reset|
| Reticulation | Rtcl | reticulation|
| Revert | Rvrt | revert|
| Ripple | Rple | ripple|
| Rotate | Rtte | rotateEventEnum|
| Rough Pastels | RghP | roughPastels|
| Save | save | save|
| Select | slct | select|
| Selective Color | SlcC | selectiveColor|
| Set | setd | set|
| Sharpen Edges | ShrE | sharpenEdges|
| Sharpen | Shrp | sharpen|
| Sharpen More | ShrM | sharpenMore|
| Shear | Shr  | shear|
| Show | Shw  | show|
| Similar | Smlr | similar|
| Smart Blur | SmrB | smartBlur|
| Smooth | Smth | smoothness|
| Smudge Stick | SmdS | smudgeStick|
| Solarize | Slrz | solarize|
| Spatter | Spt  | spatter|
| Spherize | Sphr | spherize|
| Split Channels | SplC | splitChannels|
| Sponge | Spng | sponge|
| Sprayed Strokes | SprS | separationSetup|
| Stained Glass | StnG | stainedGlass|
| Stamp | Stmp | stamp|
| Stop | Stop | stop|
| Stroke | Strk | stroke|
| Subtract | Sbtr | subtract|
| Subtract From | SbtF | subtractFrom|
| Sumie | Smie | sumie|
| Take Merged Snapshot | TkMr | takeMergedSnapshot|
| Take Snapshot | TkSn | takeSnapshot|
| Texture Fill | TxtF | textureFile|
| Texturizer | Txtz | texturizer|
| Threshold | Thrs | thresholdClassEvent|
| Tiles | Tls  | tiles|
| Torn Edges | TrnE | tornEdges|
| Trace Contour | TrcC | traceContour|
| Transform | Trnf | transform|
| Trap | Trap | trap|
| Twirl | Twrl | twirl|
| Underpainting | Undr | underpainting|
| Undo | undo | undoEvent|
| Ungroup | Ungr | ungroup|
| Unlink | Unlk | unlink|
| Unsharp Mask | UnsM | unsharpMask|
| Variations | Vrtn | variations|
| Wait | Wait | wait|
| Water Paper | WtrP | waterPaper|
| Watercolor | Wtrc | watercolor|
| Wave | Wave | wave|
| Wind | Wnd  | wind|
| Zig Zag | ZgZg | zigZag|
| Back Light | BacL | $BacL|
| Fill Flash | FilE | $FilE|
| Color Cast | ColE | $ColE|


### Core Events
See [`core.addNotificationListener`](./photoshopcore/#addnotificationlistener).

| Event Name | Group | String Code |
| :--------- | :---- | :---------- |
| Activation Changed | OS | activationChanged |
| Display Configuration Changed | OS | displayConfigurationChanged |
| Idle | UI | userIdle |
| Minimize App Window | UI | minimizeAppWindow |
| Panel Visibility Changed | UI | panelVisibilityChanged |
| Workspace Activation Changed | UI | activationChanged |
| Workspace Drag Completed | UI | workspaceDragCompleted |
| Workspace Drag Started | UI | workspaceDragStarted |
| Workspace Layout Completed | UI | workspaceLayoutCompleted |
| Workspace Interactive Resize Begin | UI | interactiveResizeBegin |
| Workspace Interactive Resize End | UI | interactiveResizeEnd |
