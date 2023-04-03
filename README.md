
## API Documentation

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

#### Edit User Data

```http
  GET /api/${username}/edit
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `username` | `string` | **Required**. Username of user to fetch |

| Bearer Token | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| `token`      | `string` | **Required**. Authorization user token |

| Request Body | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `fullname`   | `string` | **Required**. Fullname for edit user data|
| `city`       | `string` | **Required**. City for edit user data    |
| `country`    | `string` | **Required**. Country for edit user data |
| `job`        | `string` | **Required**. Job for edit user data     |
| `about`      | `string` | About for edit user data                 |
| `avatar`     | `string` | Avatar Base64 URL for edit user data     |
| `instagram`  | `string` | Instagram URL for edit user data         |
| `facebook`   | `string` | Facebook URL for edit user data          |
| `twitter`    | `string` | Twitter URL for edit user data           |
