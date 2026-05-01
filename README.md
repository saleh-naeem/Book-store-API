# Book Store API

A RESTful API for managing a book store application built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization with JWT
- CRUD operations for books and authors
- Role-based access control (Admin/User)
- Image upload functionality
- Pagination support
- Input validation

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Bcrypt for password hashing
- Multer for file uploads
- Joi for validation

## API Endpoints

### Authentication
- `POST /api/aoth/register` - Register new user
- `POST /api/aoth/login` - Login user

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

### Authors
- `GET /api/aother` - Get all authors (with pagination)
- `GET /api/aother/:id` - Get author by ID
- `POST /api/aother` - Create new author
- `PUT /api/aother/:id` - Update author
- `DELETE /api/aother/:id` - Delete author

### Users
- `GET /api/user` - Get all users (Admin only)
- `GET /api/user/:id` - Get user by ID
- `PUT /api/user/:id` - Update user
- `DELETE /api/user/:id` - Delete user

### Upload
- `POST /api/uplode/image` - Upload image

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=your_port
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

```bash
npm start
```

## Project Structure

```
├── config/          # Database configuration
├── controler/       # Request handlers
├── midelwear/       # Middleware functions
├── models/          # Database models
├── route/           # API routes
└── app.js           # Application entry point
```
