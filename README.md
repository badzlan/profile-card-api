
## API Reference

#### User Register

```http
  POST /api/register
```

| Request Body | Type     | Description                                          |
| :----------- | :------- | :--------------------------------------------------- |
| `username`   | `string` | **Required**. **Unique**. Username for register user |
| `fullname`   | `string` | **Required**. Fullname for register user             |
| `city`       | `string` | **Required**. City for register user                 |
| `country`    | `string` | **Required**. Country for register user              |
| `job`        | `string` | **Required**. Job for register user                  |
| `password`   | `string` | **Required**. Password for register user             |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

