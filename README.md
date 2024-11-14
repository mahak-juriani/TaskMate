Task Management API

This is a Node.js and Express API for managing tasks, with user authentication and role-based access control. It supports user registration, login, task creation, and admin-only endpoints for managing users and tasks.
Features

    User authentication with JWT
    Role-based access control (User and Admin roles)
    CRUD operations for tasks
    Admin-only routes for user and task management
    Sorting and pagination for task retrieval

Technologies Used

    Node.js
    Express
    MongoDB with Mongoose
    JWT for authentication
    Vercel for deployment (or Heroku alternative)

Installation

    Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:

npm install

Create a .env file in the root directory and add the following environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the application locally:

    npm start

    The API will be running at http://localhost:5000.

Endpoints
Authentication

    POST /auth/register
    Register a new user. Requires name, email, password, and an optional role field (admin or user). Default role is user.

    Body:

{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "role": "user"
}

POST /auth/login
Log in a user and receive a JWT token.

Body:

    {
      "email": "user@example.com",
      "password": "password123"
    }

Tasks (User-Only Endpoints)

These endpoints require a Bearer token from the login response.

    POST /tasks
    Create a new task. Requires authentication.

    Body:

    {
      "title": "New Task",
      "description": "Task description",
      "priority": "high",
      "dueDate": "2024-12-01"
    }

    GET /tasks
    Retrieve tasks with optional pagination and sorting.

    Query Parameters:
        page (optional): Page number, default is 1.
        limit (optional): Number of tasks per page, default is 10.
        sortBy (optional): Field to sort by (e.g., dueDate or priority), default is dueDate.
        sortOrder (optional): asc for ascending, desc for descending, default is asc.

    PUT /tasks/:id
    Update a specific task by its ID.

    DELETE /tasks/:id
    Delete a specific task by its ID.

Admin-Only Endpoints

These endpoints require an admin role and a valid Bearer token.

    GET /admin/users
    Retrieve a list of all users.

    DELETE /admin/users/:id
    Delete a specific user by their ID.

    GET /admin/tasks
    Retrieve all tasks created by all users.

    DELETE /admin/tasks/:id
    Delete any task by ID.

Running Tests

If you have written tests, you can run them with:

npm test

Deployment

This application can be deployed on Vercel or Heroku. Make sure to set up environment variables (MONGO_URI and JWT_SECRET) in your chosen deployment platform.
Vercel Deployment

    Install the Vercel CLI:

npm install -g vercel

Deploy to Vercel:

vercel

Set environment variables in the Vercel dashboard or via CLI:

    vercel env add MONGO_URI production
    vercel env add JWT_SECRET production

Example Postman Workflow

    Register as a new user or admin (POST /auth/register).
    Log in to get a JWT token (POST /auth/login).
    Use the token in Bearer Authentication for further requests (e.g., task creation, admin actions).

