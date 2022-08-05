---
id: collection-management
title: Managing assets collections
slug: /asset/collection-management
description: Overview of Palm Studio's API collection management functionalities
keywords:
  - Palm Studio's API
  - API
  - collections
  - management
image: ../../static/img/palm-logo.png
---

Collections are a way of grouping assets and have their own entity and characteristics. There is also a type of collection, the blind collection, which has the particularity that all the assets that are part of it are not revealed until the collection's reveal date is reached. The concept of closing the collection is about generating a provenance record and not allowing to modify, add or remove the elements that compose the collection from that moment on.

- Create collection
    - Create a normal collection

## Create Collection

### POST /api/v1/issuers/{issuerId}/collection

{
  "name": "Dali's selfies",
  "marketId": "1e38b54d-2c8a-4bd7-bd5b-cd051a979291",
  "description": "Dali actually had a smart phone",
  "symbol": "DALI",
  "acceptedAssetType": "PFP",
  "collectionType": "NORMAL"
}

response

{
    "id": "3f9fea45-cd90-4978-b31c-5d3898a7c74f",
    "status": "STARTED",
    "collectionId": "8e4de6ab-9532-447d-99f3-37ad11093e89"
}

## Create collection metadata
### POST /api/v1/collections/{collectionId}/metadata
{
    "baseUri": "https://bafkreid4wjk4vdmuvlzrxymsm5wdjq27mxyxky2refbgxwrotvhzohz67y.ipfs.dweb.link/",
    "metadata": [{
    "key": "pfp",
    "value": "Dali1"
    }, {
    "key": "Color",
    "value": "Blue"
    }]
}


    - Create a blind collection

- View collection information
    - View a list of collections
    - View collection details

- Reveal a blind collection
- Close collection
