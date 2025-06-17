```md
# NestJS REST & GraphQL API Example

This is a minimal example project demonstrating how to build a **REST API** and a **GraphQL API** in parallel using **NestJS** framework.

> 🚀 Designed for developers who want to understand how REST and GraphQL coexist and when to use each.

---

## 📁 Project Structure

```

<pre><code>nest-api-demo/ ├── src/ │ ├── user/ │ │ ├── user.controller.ts # REST endpoints │ │ ├── user.resolver.ts # GraphQL resolver │ │ ├── user.service.ts # Shared business logic │ │ ├── user.model.ts # GraphQL schema (code-first) │ │ └── user.module.ts │ └── app.module.ts # Main application module ├── .env # Environment config (optional) ├── package.json ├── tsconfig.json └── README.md </code></pre>

````

---

## ⚙️ Setup Instructions

### 1. Install Nest CLI (if not yet)

```bash
npm i -g @nestjs/cli
````

### 2. Clone Repository

```bash
git clone https://github.com/yourusername/nest-api-demo.git
cd nest-api-demo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run start:dev
```

---

## 🔵 REST API

Base URL: `http://localhost:3000/user`

### Routes

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/user`     | Get all users    |
| GET    | `/user/:id` | Get a user by ID |
| POST   | `/user`     | Create new user  |

### Sample Payload (POST)

```json
{
  "name": "Neo",
  "email": "neo@matrix.com"
}
```

---

## 🔴 GraphQL API

GraphQL Playground URL: `http://localhost:3000/graphql`

### Sample Query

```graphql
query {
  users {
    id
    name
  }
}
```

### Sample Mutation

```graphql
mutation {
  createUser(name: "Morpheus", email: "morpheus@zion.com") {
    id
    email
  }
}
```

---

## 🧠 Key Concepts

* **REST API** is implemented in `user.controller.ts`
* **GraphQL API** is implemented in `user.resolver.ts`
* **Shared logic** resides in `user.service.ts`
* GraphQL schema is defined using **code-first approach** in `user.model.ts`

---

## 📦 Tech Stack

* [NestJS](https://nestjs.com/)
* [GraphQL](https://graphql.org/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [TypeScript](https://www.typescriptlang.org/)

---

## 🧪 Testing

```bash
# Unit tests (if implemented)
npm run test
```

---
