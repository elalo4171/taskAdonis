# Adonis
# Introduction
Api creada con el framework Adonis Js, esta api consiste en poder crear proyectos y estos proyectos tener tareas, un usuario se puede unir a varios proyectos, y cada proyecto puede tener muchas tareas.

# Authentication
Bear token


## Indices
* [Add User To Project](#1-add-user-to-project)
* [Create Project](#2-create-project)
* [Create User](#3-create-user)
* [Create task](#4-create-task)
* [Delete task by id](#5-delete-task-by-id)
* [Done task](#6-done-task)
* [Get Projects](#7-get-projects)
* [Get Projects by Id](#8-get-projects-by-id)
* [Get User by id](#9-get-user-by-id)
* [Get all users](#10-get-all-users)
* [Login Adonis](#11-login-adonis)
* [Remove project](#12-remove-project)

- - - -
## Ungrouped

### 1. Add User To Project
**Endpoint:**

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/project/add
```

**Body:**

| Key | Value | Description |
| --- | ------|-------------|
| project_id | 1 |  |

**More example Requests/Responses:**

##### I. Example Request: Error in add user
**Body:**

| Key | Value | Description |
| --- | ------|-------------|
| project_id | 5 |  |

##### I. Example Response: Error in add user
```js
{
    "ok": false,
    "error": "Key (user_id, project_id)=(4, 5) already exists."
}
```

***Status Code:*** 200

### 2. Create Project
***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/project
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | test 6 |  |
| description | description |  |

***More example Requests/Responses:***

##### I. Example Request: Create Project
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | prueba |  |
| description | description |  |

##### I. Example Response: Create Project
```js
{
    "ok": true,
    "data": {
        "project": {
            "name": "prueba",
            "description": "description",
            "user_id": 4,
            "created_at": "2021-01-25 19:21:17",
            "updated_at": "2021-01-25 19:21:17",
            "id": 5
        }
    }
}
```

***Status Code:*** 200

### 3. Create User
***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/user/
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| email | z1@z.com |  |
| username | elalo4171 |  |
| password | 123456 |  |

***More example Requests/Responses:***

##### I. Example Request: User error
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| email | z11@z.com |  |
| username | elalo41711 |  |
| password | 123456 |  |

##### I. Example Response: User error
```js
{
    "ok": false,
    "error": "Key (username)=(elalo41711) already exists."
}
```

***Status Code:*** 200

##### II. Example Request: Create User
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| email | z121@z.com |  |
| username | elalo417112 |  |
| password | 123456 |  |

##### II. Example Response: Create User
```js
{
    "ok": true,
    "data": {
        "user": {
            "username": "elalo417112",
            "email": "z121@z.com",
            "updated_at": "2021-01-25 19:19:26",
            "id": 9
        }
    }
}
```

***Status Code:*** 200

### 4. Create task
***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/task
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | tarea 2 |  |
| description | vfewfewfwefew |  |
| project_id | 1 |  |

***More example Requests/Responses:***

##### I. Example Request: Create task
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| project_id | 3 |  |
| description | description |  |
| title | Tarea 4 |  |

##### I. Example Response: Create task
```js
{
    "ok": true,
    "task": {
        "title": "Tarea 4",
        "description": "description",
        "project_id": "3",
        "created_at": "2021-01-25 19:22:36",
        "updated_at": "2021-01-25 19:22:36",
        "id": 12
    }
}
```

***Status Code:*** 200

### 5. Delete task by id
***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{url}}/api/task/1
```

***More example Requests/Responses:***

##### I. Example Request: http://127.0.0.1:3333/api/task/1

##### I. Example Response: http://127.0.0.1:3333/api/task/1
```js
{
    "ok": true
}
```

***Status Code:*** 200

### 6. Done task
***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/task/done
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |

***More example Requests/Responses:***

##### I. Example Request: Done task
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 5 |  |

##### I. Example Response: Done task
```js
{
    "ok": true
}
```

***Status Code:*** 200

### 7. Get Projects
***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: {{url}}/api/project
```

***Body:***

***More example Requests/Responses:***

##### I. Example Request: Get Projects
***Body:***

##### I. Example Response: Get Projects
```js
{
    "ok": true,
    "projects": [
        {
            "id": 1,
            "user_id": 1,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-24T15:04:49.000Z",
            "updated_at": "2021-01-24T15:04:49.000Z"
        },
        {
            "id": 2,
            "user_id": 1,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-24T15:16:20.000Z",
            "updated_at": "2021-01-24T15:16:20.000Z"
        },
        {
            "id": 3,
            "user_id": 1,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-24T15:20:54.000Z",
            "updated_at": "2021-01-24T15:20:54.000Z"
        },
        {
            "id": 4,
            "user_id": 4,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-24T20:25:41.000Z",
            "updated_at": "2021-01-24T20:25:41.000Z"
        },
        {
            "id": 5,
            "user_id": 4,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-25T19:21:17.000Z",
            "updated_at": "2021-01-25T19:21:17.000Z"
        },
        {
            "id": 6,
            "user_id": 4,
            "name": "prueba",
            "description": "description",
            "created_at": "2021-01-25T19:59:57.000Z",
            "updated_at": "2021-01-25T19:59:57.000Z"
        }
    ]
}
```

***Status Code:*** 200

### 8. Get Projects by Id
***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: {{url}}/api/project/1
```

***Body:***

***More example Requests/Responses:***

##### I. Example Request: Get Projects by Id
***Body:***

##### I. Example Response: Get Projects by Id
```js
{
    "ok": true,
    "project": {
        "id": 3,
        "user_id": 1,
        "name": "prueba",
        "description": "description",
        "created_at": "2021-01-24 09:20:54",
        "updated_at": "2021-01-24 09:20:54"
    },
    "task": [
        {
            "id": 6,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 09:34:25",
            "updated_at": "2021-01-24 09:34:25"
        },
        {
            "id": 5,
            "project_id": 3,
            "done": true,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 09:34:04",
            "updated_at": "2021-01-24 09:43:16"
        },
        {
            "id": 7,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 09:43:27",
            "updated_at": "2021-01-24 09:43:27"
        },
        {
            "id": 8,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 14:28:37",
            "updated_at": "2021-01-24 14:28:37"
        },
        {
            "id": 9,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 14:28:38",
            "updated_at": "2021-01-24 14:28:38"
        },
        {
            "id": 10,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 14:28:39",
            "updated_at": "2021-01-24 14:28:39"
        },
        {
            "id": 11,
            "project_id": 3,
            "done": false,
            "title": "Tarea 4",
            "description": "description",
            "created_at": "2021-01-24 14:28:41",
            "updated_at": "2021-01-24 14:28:41"
        }
    ]
}
```

***Status Code:*** 200

### 9. Get User by id
Trae un usuario por su id

***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: {{url}}/api/user/1
```

***Body:***

***More example Requests/Responses:***

##### I. Example Request: Get User by id
***Body:***

##### I. Example Response: Get User by id
```js
{
    "ok": true,
    "data": {
        "user": {
            "id": 1,
            "username": "elalo417",
            "email": "z@z.com",
            "updated_at": "2021-01-24 09:04:11"
        }
    }
}
```

***Status Code:*** 200

### 10. Get all users
Trea todos los usuarios registrados

***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/user
```

***More example Requests/Responses:***

##### I. Example Request: Get all users

##### I. Example Response: Get all users
```js
{
    "ok": true,
    "data": {
        "users": [
            {
                "id": 1,
                "username": "elalo417",
                "email": "z@z.com",
                "updated_at": "2021-01-24 09:04:11"
            },
            {
                "id": 4,
                "username": "elalo4171",
                "email": "z1@z.com",
                "updated_at": "2021-01-24 09:32:40"
            },
            {
                "id": 7,
                "username": "elalo41711",
                "email": "z11@z.com",
                "updated_at": "2021-01-24 14:24:05"
            },
            {
                "id": 9,
                "username": "elalo417112",
                "email": "z121@z.com",
                "updated_at": "2021-01-25 13:19:26"
            }
        ]
    }
}
```

***Status Code:*** 200

### 11. Login Adonis
Inicio de sesion con username y password

***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/api/user/login
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| username | elalo417 |  |
| password | 123456 |  |

***More example Requests/Responses:***

##### I. Example Request: Login Adonis
***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| username | elalo4171 |  |
| password | 123456 |  |

##### I. Example Response: Login Adonis
```js
{
    "ok": true,
    "data": {
        "user": {
            "username": "elalo4171",
            "email": "z1@z.com",
            "id": 4
        },
        "projects": [
            {
                "id": 4,
                "user_id": 4,
                "name": "prueba",
                "description": "description",
                "created_at": "2021-01-24 14:25:41",
                "updated_at": "2021-01-24 14:25:41"
            }
        ],
        "token": {
            "type": "bearer",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxMTYyMzk4M30.KeFdmm8FrmviU1bz5WnYVyww30JHb3WhDD9Z92tVSQg",
            "refreshToken": null
        }
    }
}
```

***Status Code:*** 200

### 12. Remove project
***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{url}}/api/project/remove/2
```

***More example Requests/Responses:***

##### I. Example Request: Remove project

##### I. Example Response: Remove project
```js
{
    "ok": true
}
```

***Status Code:*** 200

- - - -
[Back to top](#adonis)
> Made with ♥ by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-02-01 15:37:12 by [docgen](https://github.com/thedevsaddam/docgen)  