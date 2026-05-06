---
id: "preferencesnotifications"
title: "PreferencesNotifications"
sidebar_label: "PreferencesNotifications"
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

# PreferencesNotifications

Notification preferences including Quiet Mode and notification display settings

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| quietMode | *boolean* | R W | 26.11 | Enables or disables Quiet Mode, which limits in-app messages and notifications.  When Quiet Mode is enabled, certain notification preferences become read-only and cannot be modified until Quiet Mode is disabled. |
| showFeatureOnboarding | *boolean* | R W | 26.11 | If true, feature introduction notifications are shown.  Note: This preference will be locked when Quiet Mode is enabled. |
| showToolTips | *boolean* | R W | 26.11 | If true, pop-up definitions or descriptions are displayed on mouseover. |
| showWhatsNew | *boolean* | R W | 26.11 | If true, &quot;What&#x27;s New&quot; update notifications are shown.  Note: This preference will be locked when Quiet Mode is enabled. |
| typename | *string* | R | 26.11 | The class name of the referenced object: *&quot;PreferencesNotifications&quot;*. |
| useRichToolTips | *boolean* | R W | 26.11 | If true, enhanced tooltip displays are shown.  Note: This preference will be locked when Quiet Mode is enabled. |
