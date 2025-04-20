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
