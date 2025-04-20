---
title: "Signin with google"
---

# Signin with google

Verify your `id_token` obtained from Firebase via this API.

POST `/api/v1/auth/google/signin/`

### Request Body

```json
{
  "idToken": "token string"
}
```

### Response

200

```json
{
  "success": true,
  "data": {
    "user": {
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
    "token": "string"
  }
}
```

`role` is
`"USER" | "ADMIN" | "MODERATOR"`
