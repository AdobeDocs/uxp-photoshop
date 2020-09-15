---
title: Guides - Adobe Analytics
description: This is the guides reporting overview page of Adobe Analytics 
---

# Reporting API

The `/reports` endpoint is the primary endpoint for reporting requests. In order to provide maximum flexibility,
many configuration options are available for requests.

## Overview

While the Adobe Analytics UI can help an analyst or digital marketer answer key questions, the Analytics API can
automate those answers by reporting to executive dashboards, custom reporting platforms, or tight Experience Cloud integrations.
Because the `/reports` endpoint uses the same API as the Analytics UI, you can configure it for many options.

## Authentication and authorization

Before you can use Analytics APIs, you need to obtain authentication and receive authorization. For more information,
see the [Get Started guide](..).

## /reports Endpoint description

The `/reports` endpoint description is shown in our [Swagger UI](../../api). Use the Swagger UI to see endpoint summaries,
available methods, parameters, example values, models, and status codes, and to try out the API.

## Best practises

**Please follow these guidelines when using Analytics APIs**

* Make multiple, smaller requests instead of a large, single request.
* Request data once and cache it.
* Do not poll for new data faster than a 30 minute interval.
* Pull historical data and increment it regularly instead of requesting the entire data set.

**Discouraged practises**

* Requesting as much data as possible in a single request.
* Requesting one year of data at day granularity everyday - just request the new day and merge it.
* Driving a web page with a site performance widget by making an API request every time the web page is called.
* Requesting a full year of day-level data every day to get a 12-months window.

## Time series reports

The Reports API includes the Time Series reports. These simple reports include information about the performance of a metric
(or metrics) over a period of time.

The following request example includes both a JSON message request body and a `curl` request for the **Page Views** metric.

<CodeBlock slots="heading, code" repeat="3" languages="JSON, CURL, JSON" />

#### Request

```json
{
  "rsid":"adbedocrsid",
  "globalFilters":[
    {
      "type":"dateRange",
      "dateRange":"2017-12-31T00:00:00.000/2018-01-06T23:59:59.999"
    }
  ],
  "metricContainer":{
    "metrics":[
      {
        "columnId":"0",
        "id":"metrics/pageviews",
        "filters":[
          "0"
        ]
      }
    ],
    "metricFilters":[
      {
        "id":"0",
        "type":"dateRange",
        "dateRange":"2017-12-31T00:00:00.000/2018-01-06T23:59:59.999"
      }
    ]
  },
  "dimension":"variables/daterangeday",
  "settings":{
    "dimensionSort":"asc"
  }
}
```

#### Request

```bash
curl -X POST \
  https://analytics.adobe.io/api/{COMPANYID}/reports \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESSTOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {APIKEY}' \
  -H 'x-proxy-global-company-id: {COMPANYID}' \
  -d '{REQUESTJSON}'
```

#### Response

```json
{
  "totalPages":1,
  "firstPage":true,
  "lastPage":false,
  "numberOfElements":7,
  "number":0,
  "totalElements":7,
  "columns":{
    "dimension":{
      "id":"variables/daterangeday",
      "type":"time"
    },
    "columnIds":[
      "0"
    ]
  },
  "rows":[
    {
      "itemId":"1171131",
      "value":"Dec 31, 2017",
      "data":[
        794.0
      ]
    },
    {
      "itemId":"1180001",
      "value":"Jan 1, 2018",
      "data":[
        16558.0
      ]
    },
    {
      "itemId":"1180002",
      "value":"Jan 2, 2018",
      "data":[
        17381.0
      ]
    },
    {
      "itemId":"1180003",
      "value":"Jan 3, 2018",
      "data":[
        17384.0
      ]
    },
    {
      "itemId":"1180004",
      "value":"Jan 4, 2018",
      "data":[
        17442.0
      ]
    },
    {
      "itemId":"1180005",
      "value":"Jan 5, 2018",
      "data":[
        17417.0
      ]
    },
    {
      "itemId":"1180006",
      "value":"Jan 6, 2018",
      "data":[
        17334.0
      ]
    }
  ],
  "summaryData":{
    "totals":[
      104310.0
    ]
  }
}
```

**The JSON message requests**

* **Page Views** metric for the report suite `adbedocrsid` (line 12 and 2).
* Time period From Dec. 31, 2017 00:00:00.000 - Jan. 06, 2018 23:59:59.999, using the report suite timezone `variables/daterangeday granularity` (line 26). 
With seven days specified in this time period, you can expect seven numbers in the response.
* Sort response by ascending date, i.e. oldest to newest (line 28).

**The JSON response includes**

* The `rows` section contains each report record. In the above example, you can see three rows, each with a `value` (lines 19-29).
* The `value` property contains the dimension value. Because the request includes a total of page views by day, the value of each row
will contain a date identifier for the day (e.g. line 25). For time series data, this identifier changes based on granularity. For example,
if you request `variables/daterangemonth` instead, each value will contain a month/year identifier.
* You can also easily modify this example to get metrics for visits. Simply change the id property in the metrics section to metrics/visits (line 15).
    
  