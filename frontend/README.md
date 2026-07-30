# 🚗 Car Dealership Inventory System

A full-stack **Car Dealership Inventory Management System** built as part of a **TDD Kata assessment**.

The application provides a secure REST API and a React-based frontend for managing vehicle inventory, purchases, stock levels, and dashboard analytics.

## 🌐 Live Application

**Frontend:**
https://car-dealership-inventory-system-livid.vercel.app/

**Backend API:**
https://car-dealership-inventory-system-z808.onrender.com/

The frontend communicates with the deployed FastAPI backend through REST APIs.

---

## 📌 Project Overview

The Car Dealership Inventory System allows dealership administrators to:

* Register and authenticate users
* Secure API endpoints using JWT authentication
* Add vehicles to inventory
* View available vehicles
* Search and filter vehicles
* Sort and paginate inventory
* Update vehicle information
* Delete vehicles
* Purchase vehicles and decrease stock
* Restock vehicles
* View purchase history
* Monitor inventory statistics through a dashboard
* Identify low-stock vehicles

The project follows a **test-driven development approach** for backend functionality and uses Git for version control.

---

## 🛠️ Tech Stack

### Backend

* Python 3
* FastAPI
* SQLAlchemy
* SQLite
* JWT Authentication
* Passlib / bcrypt
* Pytest

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router
* Lucide React
* Framer Motion

### Deployment

* Backend: Render
* Frontend: Vercel

### Development Tools

* Git
* GitHub
* VS Code
* ChatGPT for AI-assisted development

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* Password hashing
* JWT-based authentication
* Protected API endpoints

### 🚘 Vehicle Inventory

* Add vehicles
* View vehicles
* Search vehicles by make/model/category
* Sort inventory
* Paginate inventory
* Update vehicle details
* Delete vehicles
* View stock quantities
* Low-stock detection

### 🛒 Purchases

* Purchase vehicles
* Automatically decrease stock after purchase
* Prevent purchasing unavailable inventory
* Maintain purchase history
* Display buyer information

### 📊 Dashboard

The dashboard provides:

* Total vehicles
* Total stock
* Total purchases
* Total inventory value
* Total revenue
* Vehicle categories
* Stock overview
* Recent purchases
* Low-stock vehicles

---

## 🔑 Authentication

The application uses **JWT token-based authentication**.

After successful login, the backend returns an access token. The frontend stores the token and sends it with protected API requests using the `Authorization` header.

```text
Authorization: Bearer <token>
```

### Demo Account

For evaluation purposes, a user can register and then log in through the application.

Example:

```text
Email: admin@example.com
Password: password123
```

> The deployed application uses the same registration/login flow. If the demo account does not exist in the deployed database, simply register a new account from the application.

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

### Vehicles

| Method | Endpoint                     | Description      |
| ------ | ---------------------------- | ---------------- |
| POST   | `/api/vehicles`              | Add a vehicle    |
| GET    | `/api/vehicles`              | Get vehicles     |
| GET    | `/api/vehicles/search`       | Search vehicles  |
| PUT    | `/api/vehicles/:id`          | Update vehicle   |
| DELETE | `/api/vehicles/:id`          | Delete vehicle   |
| POST   | `/api/vehicles/:id/purchase` | Purchase vehicle |
| POST   | `/api/vehicles/:id/restock`  | Restock vehicle  |

### Dashboard

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/dashboard` | Retrieve dashboard statistics |

### Purchase History

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/purchases` | Retrieve purchase history |

---

# 🧪 Test-Driven Development

The backend was developed using a **Red-Green-Refactor** approach.

The development history contains separate test and feature commits, including:

```text
test: implement first TDD cycle with FastAPI
feat(auth): implement user registration with password hashing
feat(auth): implement JWT authentication
feat(vehicle): implement vehicle management and search
feat(vehicle): implement vehicle update endpoint
feat(vehicle): implement vehicle deletion endpoint
feat(vehicle): implement vehicle purchase functionality
feat(purchase): implement vehicle purchase history
```

The project uses **pytest** for automated backend testing.

### Running Tests

Navigate to the backend directory:

```bash
cd backend
```

Run:

```bash
python -m pytest
```

### Test Result

The current backend test suite contains:

```text
15 tests
15 passed
0 failed
100% pass rate
```

See [TEST_REPORT.md](TEST_REPORT.md) for the complete test output and test coverage areas.

---

# 💻 Local Setup

## Prerequisites

Make sure the following are installed:

* Python 3.10+
* Node.js and npm
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/Rikita1709/car-dealership-inventory-system.git

cd car-dealership-inventory-system
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

FastAPI's interactive API documentation is available at:

```text
http://127.0.0.1:8000/docs
```

---

## 3. Frontend Setup

Open another terminal and navigate to:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 📁 Project Structure

```text
car-dealership-inventory-system/
│
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── tests/
│   │   ├── conftest.py
│   │   ├── test_dashboard.py
│   │   ├── test_main.py
│   │   ├── test_purchase.py
│   │   └── test_vehicle.py
│   │
│   ├── requirements.txt
│   └── pytest.ini
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── PROMPTS.md
├── TEST_REPORT.md
├── README.md
└── .gitignore
```

---

# 📸 Screenshots

Screenshots of the final application are included below.

### Login

![alt text](image.png)

### Dashboard

*Add screenshot here.*

### Vehicle Inventory

*Add screenshot here.*

### Add / Update Vehicle

*Add screenshot here.*

### Purchase History

*Add screenshot here.*

> Screenshots demonstrate the final frontend functionality and deployed application workflow.

---

# 🤖 My AI Usage

AI tools were used as part of the development workflow, in accordance with the assessment's AI usage policy.

### Tool Used

**ChatGPT**

### How AI Was Used

ChatGPT was used as a development assistant for:

* Brainstorming application architecture and project structure
* Discussing backend API design
* Generating and refining initial code structures
* Writing and improving test cases
* Debugging backend and frontend errors
* Diagnosing authentication and JWT issues
* Debugging React routing and API integration
* Reviewing SQLAlchemy and FastAPI implementation
* Improving frontend UI/UX
* Assisting with deployment configuration
* Reviewing README and project documentation
* Explaining errors and suggesting fixes during development

AI-generated suggestions were reviewed, adapted, tested, and integrated manually rather than blindly copying generated code.

### Reflection

Using AI significantly improved the development workflow by reducing time spent diagnosing errors and researching implementation details. It was particularly useful during debugging and when connecting the React frontend with the FastAPI backend.

However, the AI was treated as an **assistant rather than an autonomous developer**. Implementation decisions, testing, debugging, verification, and final integration were performed as part of the development process.

The project was continuously tested locally, and backend functionality was verified using automated pytest tests.

For transparency, the AI prompts and relevant interaction history are documented in [`PROMPTS.md`](PROMPTS.md).

---

# 📜 AI Prompt History

The assessment requires documentation of AI tooling interactions.

The project's AI prompt history is available in:

**[PROMPTS.md](PROMPTS.md)**

This file documents the prompts used during development and the areas where AI assistance was involved.

---

# 🔄 Git & Version Control

Git was used throughout the development process.

The repository contains incremental commits documenting the development journey, including:

* Initial project setup
* TDD test implementation
* Authentication
* Vehicle management
* Purchasing
* Dashboard functionality
* Sorting and pagination
* Deployment preparation
* Production CORS configuration
* Production frontend configuration

The repository is publicly available on GitHub.

---

# 🚀 Deployment

### Frontend

Deployed using **Vercel**:

https://car-dealership-inventory-system-livid.vercel.app/

### Backend

Deployed using **Render**:

https://car-dealership-inventory-system-z808.onrender.com/

The deployed frontend communicates with the deployed FastAPI backend.

> The Render free instance may take some time to wake up after a period of inactivity.

---

# 📋 Assessment Requirements Checklist

| Requirement                 | Status   |
| --------------------------- | -------- |
| RESTful backend API         | ✅        |
| FastAPI backend             | ✅        |
| Persistent database         | ✅ SQLite |
| User registration           | ✅        |
| User login                  | ✅        |
| JWT authentication          | ✅        |
| Vehicle CRUD                | ✅        |
| Vehicle search              | ✅        |
| Vehicle purchase            | ✅        |
| Vehicle restocking          | ✅        |
| React SPA                   | ✅        |
| Tailwind CSS                | ✅        |
| Search/filter functionality | ✅        |
| Inventory management UI     | ✅        |
| Dashboard                   | ✅        |
| Automated tests             | ✅        |
| TDD development history     | ✅        |
| Git version control         | ✅        |
| Public GitHub repository    | ✅        |
| Live deployment             | ✅        |
| Test report                 | ✅        |
| AI usage disclosure         | ✅        |
| PROMPTS.md                  | ✅        |

---

# 📄 License

This project was developed as part of a software development assessment.
