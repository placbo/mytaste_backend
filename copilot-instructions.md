# Copilot Instructions for MyTaste Backend

This document provides guidelines for code generation and maintenance of the MyTaste backend application, a Node.js/Express/TypeScript REST API with MySQL database integration.

## Project Overview

MyTaste Backend is a TypeScript-based Express.js application that manages items, reviews, tags, and user authentication. It includes image upload functionality, Google OAuth authentication, and comprehensive CRUD operations.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MySQL with mysql2 driver
- **Authentication**: JWT + Passport.js (Google OAuth)
- **File Upload**: Multer + Sharp for image processing
- **Session Management**: express-session
- **Security**: bcrypt for password hashing
- **Development**: nodemon, ESLint, Prettier

## Project Structure

```
src/
├── server.ts                # Main application entry point
├── middleware/              # Custom middleware functions
├── controllers/             # HTTP request/response handling, route definitions
├── services/                # Business logic, database operations
└── utils/                   # Shared utilities and configurations
```

## Coding Standards and Patterns

### 1. File Organization
- **Controllers**: Handle HTTP requests/responses, delegate business logic to separate service files
- **Services**: Contain pure business logic functions, database operations
- **Middleware**: Reusable functions for request processing (auth, validation, etc.)
- **Utils**: Shared utilities, type definitions, constants

### 2. TypeScript Usage
- All files must use TypeScript with proper type annotations
- Define interfaces for all data structures extending `RowDataPacket` for database entities
- Use generic types for database query results: `db.query<Type[]>`
- Import types from `mysql2` package: `ResultSetHeader`, `RowDataPacket`

```typescript
// Example interface definition
export interface Item extends RowDataPacket {
  id: string;
  title: string;
  creator?: string;
  description?: string;
  imageURL?: string;
  averageRating?: number;
  averageRatingCount?: number;
}
```

### 3. Database Patterns
- Use connection pooling via `mysql2` with promise-based queries
- Always use parameterized queries to prevent SQL injection
- Structure database functions to return typed results
- Handle database errors with proper error messages

```typescript
// Good: Parameterized query
const [result] = await db.query<Item[]>('SELECT * FROM items WHERE itemId = ?', [id]);

// Avoid: String concatenation (SQL injection risk)
// const [result] = await db.query(`SELECT * FROM items WHERE itemId = ${id}`);
```

### 4. Controller Patterns
- Use async/await for all asynchronous operations
- Wrap controller handlers in try-catch blocks
- Use proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Delegate business logic to separate service functions
- Use middleware for authentication and validation

```typescript
itemController.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    
    const item = await itemService.getItemById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    res.json(item);
  } catch (error: any) {
    createErrorResponse(`Error fetching item: ${error.message}`, res);
  }
});
```

### 5. Error Handling
- Use the `createErrorResponse` utility for consistent error responses
- Always catch and handle async errors
- Provide meaningful error messages
- Log errors for debugging purposes

```typescript
export const createErrorResponse = (errorText: string, res: Response) => {
  console.error(errorText); // Add logging
  res.status(500).json({ errorText });
};
```

### 6. Authentication Middleware
- Protect routes with `authMiddleware` for authenticated endpoints
- Extract JWT tokens from Authorization header
- Verify tokens and attach user data to request object
- Handle authentication failures with proper HTTP status codes

### 7. Data Validation and Sanitization
- Validate input parameters (required fields, data types, formats)
- Sanitize user inputs to prevent injection attacks
- Use proper type checking and conversion
- Handle edge cases (empty strings, null values, undefined)

### 8. Service Layer Patterns
- Separate database operations into dedicated service functions
- Use transaction patterns for related database operations
- Implement proper error handling within business logic
- Return structured data with consistent formatting

```typescript
// services/itemService.ts
export async function getItems(page = 1, order = 'ASC', numberPrPage = 10) {
  // Input validation
  const offset = getOffset(page, numberPrPage);
  
  // Database operations
  const [totalResult] = await db.query<RowDataPacket[]>(`SELECT COUNT(*) FROM items`);
  const total = totalResult[0]['COUNT(*)'];
  
  // Return structured response
  return {
    items: itemsWithTags,
    meta: { page, total }
  };
}
```

## API Design Principles

### 1. RESTful Endpoints
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Structure URLs hierarchically (`/items`, `/items/:id`, `/items/:id/reviews`)
- Use query parameters for filtering, pagination, sorting

### 2. Response Format
- Return JSON responses with consistent structure
- Include metadata for paginated results
- Use proper HTTP status codes
- Provide meaningful error messages

### 3. Pagination and Filtering
- Implement pagination with `page` and `limit` parameters
- Support sorting with `order` parameter (ASC/DESC)
- Include total count in response metadata

## Security Best Practices

### 1. Authentication & Authorization
- Use JWT tokens for stateless authentication
- Implement proper token validation and expiration
- Protect sensitive endpoints with authentication middleware
- Support OAuth integration (Google OAuth 2.0)

### 2. Input Validation
- Always validate and sanitize user inputs
- Use parameterized queries to prevent SQL injection
- Implement proper type checking and conversion
- Handle file uploads securely with Multer

### 3. CORS Configuration
- Configure CORS with specific allowed origins
- Enable credentials for authenticated requests
- Avoid wildcard origins in production

## Database Optimization

### 1. Query Optimization
- Use efficient JOIN operations for related data
- Implement proper indexing strategies
- Batch related queries when possible
- Use connection pooling for better performance

### 2. Data Relationships
- Handle many-to-many relationships (items-tags) with junction tables
- Implement cascading operations carefully
- Use foreign key constraints for data integrity

## Development Workflow

### 1. Code Quality
- Use ESLint and Prettier for code formatting
- Follow TypeScript strict mode guidelines
- Write descriptive function and variable names
- Add JSDoc comments for complex functions

### 2. Environment Configuration
- Use dotenv for environment variable management
- Keep sensitive data in environment variables
- Provide default values for optional configurations

### 3. Testing and Debugging
- Use nodemon for development with hot reloading
- Implement proper logging for debugging
- Use console.log strategically for development debugging
- Remove or minimize console.logs in production code

## Common Patterns to Follow

1. **Async Function Exports**: Export async functions for all database operations in services
2. **Error Boundaries**: Wrap all async operations in try-catch blocks
3. **Type Safety**: Always use TypeScript interfaces and proper type annotations
4. **Middleware Usage**: Use middleware for cross-cutting concerns (auth, logging, CORS)
5. **Resource Cleanup**: Properly handle database connections and file operations
6. **Consistent Naming**: Use camelCase for variables/functions, PascalCase for interfaces
7. **Modular Design**: Keep functions focused on single responsibilities
8. **Parameter Validation**: Always validate input parameters before processing
9. **Controller-Service Separation**: Controllers handle HTTP concerns, services handle business logic

## File Upload Best Practices

- Use Multer for handling multipart/form-data
- Implement Sharp for image processing and optimization
- Store files with unique identifiers (UUID)
- Validate file types and sizes
- Handle upload errors gracefully

## Architecture Layers

### Controllers Layer
- Handle HTTP requests and responses
- Validate request parameters and body
- Call appropriate service methods
- Format and return responses
- Handle HTTP-specific concerns (status codes, headers)

### Services Layer
- Implement business logic
- Perform database operations
- Handle data transformations
- Manage transactions
- Return domain objects/data structures

### Middleware Layer
- Authentication and authorization
- Request validation
- Logging and monitoring
- Error handling
- CORS and security headers

When generating code for this project, follow these patterns and maintain consistency with the existing codebase structure and conventions using the controller-service architecture.
