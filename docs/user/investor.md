---
id: investor
title: Managing investors
slug: /user/investor
description: Overview of Gr0wing Studio's API investors management
keywords:
  - Gr0wing Studio's API
  - API
  - investor management
image: ../../static/img/gr0wing-logo.png
---

This guide is an overview of the investors management

# Investors

An investor is a person who acquires NFTs in the primary market and buys or sells NFTs in the secondary market.

The list of operations that can be performed on a market is as follows:

- Create investors

### Post /api/v1/investors

```
curl --location --request POST 'https://api.pre.dats.io.builders/pre/api/v1/investors' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "isAnonymous": true,
    "externalId": "gr0wing-test-investor-01"
}'

Resp:
{
    "processId": "35c43867-9421-4ebd-ab1a-24d1e36e61d2",
    "investorId": "73e0a713-8e42-46f9-90ca-d07d15536e31",
    "_embedded": {},
    "_links": {
        "self": {
            "href": "https://api.pre.dats.io.builders:443/api/v1/investors/73e0a713-8e42-46f9-90ca-d07d15536e31",
            "templated": false
        }
    }
}
```

    - Create anonymous investor
    - Create an anonymous investor with a custody provider
    - Create anonymous investor with DLT credential
    - Create identified investor
    - Create identified investor with custody provider
    - Create identified investor with credentials

- View investors information

  - View a list of investors
  - View investor details
  - View an investor's investment account information
  - View an investor's transactions
  - View an investor asset’s list
  - View the transaction list of an investor’s asset
  - View an investor's token list
  - View the token list of an investor’s asset

- Update investors information
