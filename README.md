
# Insignia Technical Test

My submission for Full Stack Developer position at Insignia

[Click here to go to Backend](#backend-submission)

[Click here to go to Frontend](#frontend-submission)



# Backend Submission
## Run Project

To run this project, go to folder `insigniaorg`

```bash
  cd insigniaorg
  nx serve server
```

## Features

- NestJS with Typescript
- PrismaORM
- PostgreSQL
- JWT Authentication
- Passport.js
- bcrypt.js
- ESLint
- Pagination


## API Reference

#### 1. GET Users
Get all user with filters
```http
  GET /api/users?page=1&pageSize=10
```

#### 1. POST Users
Add new user to the list
```http
  GET /api/users
```
Request Body
```json
{
  "email": "user@example.com",
  "password": "securePassword",
  "name": "John Doe",
  "role": "USER",
  "workspaceId": "workspace-id"
}
```
#### 3. PATCH Users
Edit existing user
```http
  PATCH /api/users/${userId}
```
Request Body
```json
{
  "email": "user.updated@example.com",
  "password": "newSecurePassword",
  "name": "John Doe Updated"
}
```
#### 4. DELETE Users
Remove existing user
```http
  DELETE /api/users/${userId}
```

#### 5. GET Contacts
Get all available contacts
```http
  GET /api/contacts?page=1&pageSize=10&name=John
```

#### 6. POST Contacts
Add new contact to the contact list
```http
  POST /api/products/
```
Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+123456789",
  "address": "123 Main St",
  "workspaceId": "22b8ffdf-8898-4d78-bdbd-90dacc6816cb"
}
```

#### 7. PATCH Contacts
Add new contact to the contact list
```http
  PATCH /api/contacts/${contactId}
```
Request Body:
```json
{
  "name": "John Doe Updated",
  "email": "john.updated@example.com",
  "phoneNumber": "+987654321"
}
```
#### 8. DELETE Contacts
Remove a contact from the list
```http
  DELETE /api/contacts/${contactId}
```

#### 9. GET Contact Groups
Get all groups available on the list

```http
  GET /api/contact-groups?page=1&pageSize=10
```

#### 10. POST Contact Group
Add new contact group

```http
  POST /api/contact-groups
```
Request Body:
```json
{
  "name": "Friends",
  "description": "Group for my friends"
}
```

#### 11. POST Contact to Group
Add a contact to a group

```http
  POST /api/contact-groups/${groupId}/contacts
```
Request Body:
```json
{
  "contactId": "contact-id"
}
```
#### 12. GET Contact from a Group
Get all contact from a group

```http
  GET api/contact-groups/${groupId}/contacts
```
#### 13. DELETE Contact from a Group
Delete a contact from a group
```http
  DELETE /api/contact-groups/${groupId}/contacts/${contactId}
```

# Frontend Submission
## Run Project

To run this project, go to folder `client`

```bash
  cd client
  npm run dev
```

## Features

- NestJS with Typescript
- PrismaORM
- PostgreSQL
- JWT Authentication
- Passport.js
- bcrypt.js
- ESLint
- Pagination
