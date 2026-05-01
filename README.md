# Book Store API

A RESTful backend API for managing a book store application.

This project was built using Node.js, Express.js, MongoDB, and JWT authentication to practice backend development fundamentals such as routing, middleware, validation, authentication, authorization, CRUD operations, pagination, and file upload.

---

## Features

### Authentication & Authorization

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control for Admin and User
- Protected routes

### Books

- Add new books
- Get all books
- Get book by ID
- Update book information
- Delete books

### Authors

- Add new authors
- Get all authors
- Get author by ID
- Update author information
- Delete authors
- Pagination support for authors

### Users

- Get all users
- Get user by ID
- Update user information
- Delete users
- Admin-only user management

### Upload

- Upload images using Multer

### Validation

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
- Postman

---

##  API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/aoth/register` | Register new user | Public |
| POST | `/api/aoth/login` | Login user | Public |

Examples:

```http
POST http://localhost:3000/api/aoth/register
POST http://localhost:3000/api/aoth/login
```

---

### Books

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/books` | Get all books | Public |
| GET | `/api/books/:id` | Get book by ID | Public |
| POST | `/api/books` | Create new book | Admin |
| PUT | `/api/books/:id` | Update book | Admin |
| DELETE | `/api/books/:id` | Delete book | Admin |

Examples:

```http
GET http://localhost:3000/api/books
GET http://localhost:3000/api/books/BOOK_ID
POST http://localhost:3000/api/books
PUT http://localhost:3000/api/books/BOOK_ID
DELETE http://localhost:3000/api/books/BOOK_ID
```

---

### Authors

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/aother` | Get all authors with pagination | Public |
| GET | `/api/aother/:id` | Get author by ID | Public |
| POST | `/api/aother` | Create new author | Admin |
| PUT | `/api/aother/:id` | Update author | Admin |
| DELETE | `/api/aother/:id` | Delete author | Admin |

Examples:

```http
GET http://localhost:3000/api/aother
GET http://localhost:3000/api/aother?page=1&limit=10
GET http://localhost:3000/api/aother/AUTHOR_ID
POST http://localhost:3000/api/aother
PUT http://localhost:3000/api/aother/AUTHOR_ID
DELETE http://localhost:3000/api/aother/AUTHOR_ID
```

---

### Users

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/user` | Get all users | Admin |
| GET | `/api/user/:id` | Get user by ID | Admin/User |
| PUT | `/api/user/:id` | Update user | Admin/User |
| DELETE | `/api/user/:id` | Delete user | Admin/User |

Examples:

```http
GET http://localhost:3000/api/user
GET http://localhost:3000/api/user/USER_ID
PUT http://localhost:3000/api/user/USER_ID
DELETE http://localhost:3000/api/user/USER_ID
```

---

### Upload

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/uplode/image` | Upload image | Admin |

Example:

```http
POST http://localhost:3000/api/uplode/image
```


---

##  Authentication

Some routes are protected and require a JWT token.

After logging in, copy the token and send it in the request headers:

```http
Authorization: Bearer token
```

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/saleh-naeem/Book-store-API.git
cd book-store-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

##  Running the Application

```bash
node app
```

The server will run on:

```bash
http://localhost:3000
```


---

## Testing

The API was tested using Postman.

You can test the endpoints by sending requests to:

```bash
http://localhost:3000
```

For protected routes, include the JWT token in the request headers:

```http
Authorization: Bearer your_token_here
```

---

## Project Structure

```bash
book-store-api/
│
├── config/          # Database configuration
├── controler/       # Request handlers
├── midelwear/       # Middleware functions
├── models/          # Database models
├── route/           # API routes
├── app.js           # Application entry point
├── package.json
└── README.md
```

---

## 📦 Main Dependencies

```json
{
  "express": "Backend framework",
  "mongoose": "MongoDB object modeling",
  "jsonwebtoken": "JWT authentication",
  "bcrypt": "Password hashing",
  "multer": "Image upload handling",
  "joi": "Input validation"
}
```

---

## User Roles

### User

Users can:

- Register
- Login
- View books
- View authors
- View user profile
- Update user information

### Admin

Admins can:

- Manage books
- Manage authors
- Manage users
- Upload images
- Access protected admin routes

---

## what i do

I built this backend API to practice and apply backend development concepts using Node.js, Express.js, MongoDB, and JWT.

Through this project, I practiced:

- Building RESTful APIs
- Creating database models with Mongoose
- Implementing authentication and authorization
- Protecting routes using middleware
- Applying role-based access control
- Handling file uploads using Multer
- Validating user input using Joi
- Structuring a backend project
- Testing APIs using Postman

---

##  Notes

This project was built for learning backend development fundamentals.

Some business features, such as book pricing, stock quantity, cart system, ordering system, and payment flow, can be added in future versions.

---


## 🔗 Links

- GitHub Repository: `https://github.com/saleh-naeem/Book-store-API`

---

## 📄 License

This project is for learning and portfolio purposes.
