# Tournaments API

## Get tournaments list

GET `/api/v1/tournaments/`

### Query parameters

```
isActive: boolean
title: string
owner: number // id of the user, who organized the tournament
```

### Response

200

```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "GTT",
            "description": "",
            "icon": "icon-url", // or null
            "location": "string",
            "ownerId": 1,
            "maxTeams": 16,
            "registrationFee": 200,
            "isActive": true,
            "status": "PENDING" | "IN_PROGRESS" | "FINISHED" | "CANCELED" | "HIDDEN",
            "startDate": "datestring",
            "endDate": "datestring",
            "createdAt": "datestring",
            "updatedAt": "datestring"
        }
    ],
    "pagination": {
        "page": 1,
        "size": 10,
        "totalData": 1,
        "totalPages": 1
    },
    "message": "Success!",
    "error": null
}
```

## Create a new tournament

POST `api/v1/tournaments/`

### Request body

```json
{
  "title": "Summer Cup 2025",
  "description": "An exciting summer tournament for local teams.",
  "icon": "https://example.com/icons/summer-cup.png",
  "location": "Los Angeles, CA",
  "ownerId": 1,
  "maxTeams": 16,
  "registrationFee": 50,
  "isActive": true,
  "status": "PENDING",
  "startDate": "2025-07-01T10:00:00Z",
  "endDate": "2025-07-07T18:00:00Z"
}
```

### Response

200

```json
{
  "success": true,
  "data": {
    "title": "Summer Cup 2025",
    "description": "An exciting summer tournament for local teams.",
    "icon": "https://example.com/icons/summer-cup.png",
    "location": "Los Angeles, CA",
    "ownerId": 1,
    "maxTeams": 16,
    "registrationFee": 50,
    "isActive": true,
    "status": "PENDING",
    "startDate": "2025-07-01T10:00:00Z",
    "endDate": "2025-07-07T18:00:00Z"
  },
  "message": "Success!",
  "error": null
}
```
