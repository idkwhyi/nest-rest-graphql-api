# NestJS REST & GraphQL API Example

A minimal example project demonstrating how to build **REST API** and **GraphQL API** in parallel using **NestJS** framework.

> 🚀 To understand how REST and GraphQL can coexist and when to use each approach.

---

## 📁 Project Structure

```
nest-api-demo/
├── src/
│   ├── user/
│   │   ├── user.controller.ts   # REST endpoints
│   │   ├── user.resolver.ts     # GraphQL resolver
│   │   ├── user.service.ts      # Shared business logic
│   │   ├── user.entity.ts       # Data model/entity
│   │   └── user.module.ts       # User module
│   ├── app.controller.ts        # Root controller
│   ├── app.service.ts           # Root service
│   └── app.module.ts            # Main application module
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── nest-cli.json               # Nest CLI configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

---

## ⚙️ Setup Guide

### 1. Prerequisites

Make sure you have installed:
- **Node.js** (version 16.x or higher)
- **npm** or **yarn**

### 2. Install Nest CLI (optional)

```bash
npm install -g @nestjs/cli
```

### 3. Clone Repository

```bash
git clone https://github.com/idkwhyi/nest-rest-graphql-api/tree/main
cd nest-api-demo
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Setup Environment Variables

```bash
cp .env.example .env
```

Edit the `.env` file as needed:

```env
PORT=3000
NODE_ENV=development
```

### 6. Run Development Server

```bash
npm run start:dev
```

Server will run at `http://localhost:3000`

---

## 🔵 REST API

**Base URL:** `http://localhost:3000/users`

### Available Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/users`       | Get all users             |
| GET    | `/users/:id`   | Get user by ID            |
| POST   | `/users`       | Create new user           |
| PUT    | `/users/:id`   | Update user by ID         |
| DELETE | `/users/:id`   | Delete user by ID         |

### Sample Request & Response

#### GET `/users`
**Response:**
```json
[
  {
    "id": 1,
    "name": "Neo",
    "email": "neo@matrix.com",
    "createdAt": "2024-01-01T10:00:00Z"
  }
]
```

#### POST `/users`
**Request Body:**
```json
{
  "name": "Neo",
  "email": "neo@matrix.com"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Neo",
  "email": "neo@matrix.com",
  "createdAt": "2024-01-01T10:00:00Z"
}
```

---

## 🔴 GraphQL API

**GraphQL Playground:** `http://localhost:3000/graphql`

### Sample Queries

#### Get All Users
```graphql
query GetAllUsers {
  users {
    id
    name
    email
    createdAt
  }
}
```

#### Get User by ID
```graphql
query GetUser($id: Int!) {
  user(id: $id) {
    id
    name
    email
    createdAt
  }
}
```

### Sample Mutations

#### Create New User
```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    createdAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "name": "Morpheus",
    "email": "morpheus@zion.com"
  }
}
```

#### Update User
```graphql
mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    createdAt
  }
}
```

---

## 🧠 Key Concepts

### Architecture
- **REST API** is implemented in `user.controller.ts`
- **GraphQL API** is implemented in `user.resolver.ts`
- **Shared business logic** resides in `user.service.ts`
- **Data model** is defined in `user.entity.ts`

### Code-First vs Schema-First
This project uses the **code-first** approach for GraphQL, where the GraphQL schema is automatically generated from TypeScript decorators.

### Dependency Injection
NestJS uses a powerful dependency injection system, enabling service sharing between REST and GraphQL resolvers.

---

## 📦 Tech Stack

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[GraphQL](https://graphql.org/)** - Query language for APIs
- **[Apollo Server](https://www.apollographql.com/docs/apollo-server/)** - GraphQL server
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing
- **[Class Validator](https://github.com/typestack/class-validator)** - Validation decorators
- **[Class Transformer](https://github.com/typestack/class-transformer)** - Object transformation

---

## 🛠️ Available Scripts

```bash
# Development
npm run start:dev    # Run in development mode
npm run start:debug  # Run with debug mode

# Production
npm run build        # Build the application
npm run start:prod   # Run production build

# Testing
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
npm run test:cov     # Test coverage

# Linting
npm run lint         # ESLint check
npm run format       # Prettier format
```

---

## 🧪 Testing

### Unit Testing
```bash
npm run test
```

### End-to-End Testing
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

---

## 📝 API Documentation

### REST API Documentation
After the server is running, Swagger documentation is available at:
`http://localhost:3000/api`

### GraphQL Schema
GraphQL schema can be viewed in GraphQL Playground:
`http://localhost:3000/graphql`

---

## 🚀 Deployment

### Docker
```bash
# Build image
docker build -t nest-api-demo .

# Run container
docker run -p 3000:3000 nest-api-demo
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
# Add database, Redis, etc configurations
```

---

## 🔗 Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## ❓ FAQ

**Q: When should I use REST vs GraphQL?**
A: Use REST for simple CRUD operations and easy caching. Use GraphQL when clients need flexibility in selecting the data they request.

**Q: Can I use both in one application?**
A: Yes! This project demonstrates how REST and GraphQL can coexist by sharing the same business logic.

**Q: How do I add authentication?**
A: NestJS provides guards and decorators for authentication. Check the NestJS documentation on Authentication and Authorization.