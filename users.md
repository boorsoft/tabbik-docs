---
title: Current user data
---

# Get current user data

GET `/api/v1/users/me`

### Response

```json
{
  "success": true,
  "data": {
    "username": "tabbist",
    "email": "tabbist@gmail.com",
    "avatar": "url",
    "firstName": "John",
    "lastName": "Doe",
    "role": "USER",
    "isNovice": false,
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

# Update current user data

Patch `/api/v1/users/me`

### Request Body

```json
{
  "username": "tabbist",
  "avatar": "url",
  "firstName": "John",
  "lastName": "Doe",
  "isNovice": false
}
```

::: tip
You can pass only updated fields.
:::

# Get all users list

GET `/api/v1/users/`

Query parameters

```
search?: string
```

Example

GET `/api/v1/users?search=tabbist`

### Response

```json
{
  "success": true,
  "message": "",
  "error": null,
  "data": [
    {
      "username": "tabbist",
      "email": "tabbist@gmail.com",
      "avatar": "url",
      "firstName": "John",
      "lastName": "Doe",
      "role": "USER",
      "isNovice": false,
      "createdAt": "date",
      "updatedAt": "date"
    },
    ...
  ],
  "pagination": {
    "page": number,
    "size": number,
    "totalData": number,
    "totalPages": number
  }
}
```
