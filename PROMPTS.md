# AI Development Prompts & Chat History

This document records the AI-assisted development process used while building the Car Dealership Inventory System.

The primary AI tool used was **ChatGPT**.

AI was used as a development assistant for architecture discussions, implementation guidance, debugging, testing, frontend development, deployment troubleshooting, and documentation.

---

# 1. Project Planning

### Prompt

> I need to build a TDD Kata Car Dealership Inventory System. Help me decide the technology stack and project architecture based on the assessment requirements.

### Purpose

Used to understand the requirements and plan the overall full-stack architecture.

---

# 2. Backend Architecture

### Prompt

> Help me structure a FastAPI backend for a car dealership inventory system using SQLAlchemy and SQLite.

### Purpose

Used to plan the backend directory structure, database layer, models, routes, schemas, and authentication components.

---

# 3. Authentication

### Prompt

> Help me implement user registration and login using FastAPI, password hashing, and JWT authentication.

### Purpose

Used to understand the authentication flow and implement protected API endpoints.

---

# 4. JWT Debugging

### Prompt

> My JWT authentication is returning a token but protected endpoints are not working. Help me debug the token flow.

### Purpose

Used to investigate token generation, validation, authorization headers, and protected endpoints.

---

# 5. Vehicle APIs

### Prompt

> Help me implement vehicle CRUD APIs including adding, retrieving, updating, deleting, searching, sorting, and pagination.

### Purpose

Used during implementation and debugging of vehicle inventory functionality.

---

# 6. Purchase Functionality

### Prompt

> Help me implement a purchase endpoint that decreases vehicle quantity and records the purchase.

### Purpose

Used to reason about inventory updates and purchase history.

---

# 7. Dashboard

### Prompt

> Help me design a dashboard API that returns vehicle counts, stock, revenue, low-stock vehicles, and recent purchases.

### Purpose

Used to design the dashboard response structure consumed by the React frontend.

---

# 8. TDD and Testing

### Prompt

> Help me write pytest tests for the FastAPI vehicle APIs and follow a Red-Green-Refactor workflow.

### Purpose

Used to create meaningful backend tests and verify API behavior.

---

# 9. Debugging Test Failures

### Prompt

> My pytest dashboard test is failing with KeyError for total_stock. Here is my dashboard route and test. Help me understand the mismatch and fix it.

### Purpose

Used to diagnose mismatches between the API response and expected test contract.

---

# 10. Purchase Test Debugging

### Prompt

> My purchase history test expects vehicle_id but my endpoint currently returns make, model, category, price and buyer. How should I fix the API response?

### Purpose

Used to align the API response with the expected test contract.

---

# 11. Frontend Architecture

### Prompt

> Help me structure a React frontend for the car dealership inventory system with reusable components, pages, API modules and routing.

### Purpose

Used to plan the React application architecture.

---

# 12. Axios API Integration

### Prompt

> Help me create Axios API functions for authentication, vehicles, purchases and protected requests using a JWT stored in localStorage.

### Purpose

Used to connect the React frontend with the FastAPI backend.

---

# 13. Inventory UI

### Prompt

> Help me build a modern inventory page with search, category filtering, sorting, pagination, add/edit/delete and purchase functionality.

### Purpose

Used during frontend feature development and UI improvement.

---

# 14. Dashboard UI

### Prompt

> Help me design a dealership dashboard showing total vehicles, purchases, low stock, revenue, categories, recent purchases and low-stock vehicles.

### Purpose

Used to create the dashboard interface.

---

# 15. Deployment

### Prompt

> Help me deploy the FastAPI backend to Render and the React Vite frontend to Vercel.

### Purpose

Used to understand deployment configuration and production frontend/backend integration.

---

# 16. CORS Debugging

### Prompt

> My Vercel frontend is getting a CORS error when calling my Render FastAPI backend. Here is the browser console error and my FastAPI CORS configuration. Help me diagnose it.

### Purpose

Used to debug production frontend-to-backend communication.

---

# 17. Production API Configuration

### Prompt

> Help me configure the React frontend to use the deployed Render backend instead of localhost.

### Purpose

Used to configure the production API URL.

---

# 18. Test Report

### Prompt

> I have 15 passing pytest tests. Help me create a professional TEST_REPORT.md for the assessment.

### Purpose

Used to document the final automated test results.

---

# 19. README Documentation

### Prompt

> Help me create a comprehensive README covering the assessment requirements, architecture, setup instructions, testing, deployment and AI usage.

### Purpose

Used to organize the project documentation.

---

# 20. AI Usage Reflection

### Prompt

> Help me document my AI usage transparently for an assessment that requires disclosure of AI-assisted development.

### Purpose

Used to prepare the "My AI Usage" section of the README.

---

# AI Usage Principles

AI was used as an assistant rather than as an automatic replacement for development.

The generated suggestions were reviewed and adapted to the project requirements.

The application was manually tested through:

* Local frontend
* Local FastAPI server
* Swagger UI
* Automated pytest tests
* Deployed Vercel frontend
* Deployed Render backend

The final implementation and integration decisions were reviewed during development.

---

# Important Note

This file is intended to provide transparency about the use of AI during development.

AI assistance included brainstorming, implementation guidance, debugging, testing assistance, documentation, and deployment troubleshooting.
