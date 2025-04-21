# Pagination

## Paginated response metadata

Included in every paginated response. Use it to implement pagination logic in the application.

```json
{
    "pagination": {
        "page": number,
        "size": number,
        "totalData": number,
        "totalPages": number
    }
}
```

## Pagination parameters

Query parameters

```
page: number
size: number
```

Example

GET `/api/v1/tournaments?page=1&size=10`

`size` is not required, the default is `10`.
