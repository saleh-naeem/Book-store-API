# Book Store API

A RESTful backend API for managing a book store application.  
The project was built using Node.js, Express.js, MongoDB, and JWT authentication to practice backend development fundamentals such as routing, middleware, validation, authentication, authorization, and CRUD operations.

---

## Features

- User registration and login
- JWT-based authentication
- Password hashing using bcrypt
- Role-based access control for Admin and User
- CRUD operations for books
- CRUD operations for authors
- User management
- Image upload using Multer
- Pagination support
- Input validation using Joi

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Joi

---

## API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/aoth/register` | Register new user | Public |
| POST | `/api/aoth/login` | Login user | Public |

---

### Books

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/books` | Get all books | Public |
| GET | `/api/books/:id` | Get book by ID | Public |
| POST | `/api/books` | Create new book | Admin |
| PUT | `/api/books/:id` | Update book | Admin |
| DELETE | `/api/books/:id` | Delete book | Admin |

---

### Authors

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/aother` | Get all authors with pagination | Public |
| GET | `/api/aother/:id` | Get author by ID | Public |
| POST | `/api/aother` | Create new author | Admin |
| PUT | `/api/aother/:id` | Update author | Admin |
| DELETE | `/api/aother/:id` | Delete author | Admin |

---

### Users

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/user` | Get all users | Admin |
| GET | `/api/user/:id` | Get user by ID | Admin/User |
| PUT | `/api/user/:id` | Update user | Admin/User |
| DELETE | `/api/user/:id` | Delete user | Admin/User |

---

### Upload

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/uplode/image` | Upload image | Admin |

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/saleh-naeem/Book-store-.APIgit
cd book-store-api
