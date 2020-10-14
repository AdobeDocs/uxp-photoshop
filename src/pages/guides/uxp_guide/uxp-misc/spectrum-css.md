# Spectrum CSS

[Spectrum CSS](https://opensource.adobe.com/spectrum-css/) is Adobe's open-source implementation of Adobe's design system, used across multiple applications.

> If you want to dive right in to using Spectrum CSS, head over to the [GitHub site](https://github.com/adobe/spectrum-css/blob/main/README.md) and read the installation instructions.

Your plugin should use Spectrum-based controls wherever possible in its UI, both for consistency and because, over time, Adobe applications' own controls will migrate to using Spectrum CSS.

Additionally, with Spectrum controls your plugin gets theme awareness essentially for free. So when the user changes from light to dark, you don't have to wire up all those appearance changes yourself.

As used in UXP, Spectrum CSS provides a library of UI components that enable a consistent look and feel, both within an application and for cross-platform and cross-application plugins.

Spectrum CSS is "pure" CSS; no JavaScript or other code is required to use it.