---
id: standards
title: API HTTP standards
slug: /http-standards
sidebar_label: API HTTP standards
description: An overview of the HTTP standards used on Palm Studio's API
keywords:
  - Palm
  - Http
  - Standards
---

export const Highlight = ({children, color}) => (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );

## HTTP Methods

Palm Studio's API supports 5 `HTTP` methods to interact with resources:

| Method |
|:------|
| <Highlight color="#106149">GET</Highlight>  |
| Send `GET` requests to retrieve data. `GET` requests are read-only, they will not cause an update or a change to your data. |
| <Highlight color="#FFB533">POST</Highlight>  |
| Send `POST` requests to create new resources. For instance, to create a new user, send a `POST` request to the user's endpoint where the body of your request `JSON` is a new user. |
| <Highlight color="#194F7A">PUT</Highlight>  |
| Use `PUT` request to create or update a resource. |
| <Highlight color="#FF5733">DEL</Highlight>  |
| Use `DEL` requests to remove existing resources. For example, make a `DEL` request to the user's endpoint to unsubscribe a user from the system. |



## Making requests

Palm Studio's API supports `JSON`. Most `POST` and `PUT` requests require a valid `JSON` object as body. So all requests should supply the `Accept: application/json` header. `POST` requests must specify the `Content-Type: application/json` header. Response bodies are `JSON` encoded as well.

### Base-paths
For all requests to Palm Studio APIs, the following base-paths have to be used for the PRO environment:

#### PRO environment

https://api.pro.dats.io.builders/pro/


## Parameters

There are three main parameter categories for each endpoint in Palm Studio's API: path, request body, and response body. This section offers an overview of the three.

### Path parameters

In an API url, we include resource names and unique identifiers to help you figure out how to structure your requests. Resource names are immutable, but resource identifiers are required, so you need to replace them with real values from your ioCash client account. Let’s look at an example:

https://api.io.cash/pro/private/client/api/v1/public/wallets/{walletId}/movements/{movementId}

In this request example, there is one primary resource wallets and a secondary one movements. There ar also 2 resource identifiers that you need to replace with real values of your ioCash account: walletId and movementId.

### Request body parameters

For `PATCH` and `POST` requests you may need to include a request body in JSON format. The user operations docs and the wallet operations docs show you all the available request parameters for each endpoint, including the required fields.

### Response body parameters

Every API call response includes headers and an optional JSON-formatted body.

## HTTP Status Codes

### Success codes

| Http Status |  Code | Description  |
|:------------|:------------|:---------------------------|
| 200  | OK | Standard response for successful HTTP requests. The actual response will depend on the request method used. |
| 201  | Created | A new resource has been created.|
| 202  | Accepted | The process has not finished e.g. user creation . Usually when the process is asynchronous.|

### Client errors codes

| Http Status |  Error code | Description  |
|:------------|:------------|:---------------------------|
| 400  | Bad Request | The request cannot be fulfilled due to bad syntax. Usually used for request fields validations. |
| 401  | Unauthorized | This error will show anytime you make a request without being previously authorized for using the API.|
| 403  | Forbidden | If authentication credentials were provided in the request the server considers them insufficient to grant access.|
| 404  | Not Found | The origin server did not find a current representation for the target resource|
| 409  | Conflict | The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request. The server SHOULD generate a payload that includes enough information for a user to recognize the source of the conflict.|

### Server error codes

| Http Status | Error code | Description  |
|:------------|:------------|:---------------------------|
| 500  | Internal Server Error | A generic error message, given when no more specific message is suitable. Should not be thrown programatically. |
| 503  | Service Unavailable | The server is currently down and unable to handle the request|
