
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

#### User Login

```http
  POST /api/login
```

| Request Body | Type     | Description                                       |
| :----------- | :------- | :------------------------------------------------ |
| `username`   | `string` | **Required**. **Unique**. Username for login user |
| `password`   | `string` | **Required**. Password for login user             |

#### Get User

```http
  GET /api/${username}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `username` | `string` | **Required**. Username of user to fetch |

| Bearer Token | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| `token`      | `string` | **Required**. Authorization user token |

#### add(num1, num2)

Takes two numbers and returns the sum.

