# 🔐 Role-Based Access Control (RBAC) Dashboard

A secure, responsive, and aesthetically premium **Role-Based Access Control (RBAC) Dashboard** application built with React 19, TypeScript, Vite, and React Router DOM v7. This project demonstrates dynamic front-end permission handling, custom context-driven authentication, and protected routing.

---

## 🌟 Features

### 1. Multi-Role Simulated Authentication
* **Seamless Login**: Users can log in using any username and select one of three preconfigured system roles.
* **Global Auth State**: Managed dynamically via custom React context (`AuthContext` & `useAuth` hook) providing uniform access to the current authenticated user's state.

### 2. Role-Based Dynamic Dashboards
The home workspace dynamically adapts its layout, widgets, and functional panels according to the logged-in user's role:
* **👑 Admin Workspace**: Access to critical administrator actions such as user management, system audit logs, and global preferences.
* **✍️ Editor Workspace**: A feature-rich drafting environment allowing editors to write, draft, and publish new content.
* **👁️ Viewer Workspace**: A clean, read-only analytics grid showing detailed status records (e.g., approved/pending/rejected sales and growth reports).

### 3. Route Guarding & Page Protection
* **General Protection (`ProtectedRoute`)**: Restricts access to standard personal workspaces (like `/dashboard` and `/profile`) to logged-in users only. Unauthenticated requests are gracefully redirected to the `/login` portal.
* **Role-Specific Restrictions (`AdminRoute`)**: Restricts high-privilege configuration routes (like `/settings`) exclusively to users holding the **Admin** role. Editors and Viewers are blocked and redirected to the main dashboard.

---

## 📊 Roles & Permissions Matrix

The application strictly implements the following permission control framework:

| Role | Access Level | Permitted Pages | Dashboard Actions |
| :--- | :--- | :--- | :--- |
| **Admin** | Full Access | `/dashboard`, `/profile`, `/settings` | Manage Users, View System Logs, Change Global Preferences |
| **Editor** | Read & Write | `/dashboard`, `/profile` | Draft and Publish Content |
| **Viewer** | Read Only | `/dashboard`, `/profile` | View Reports Grid & Approval Statuses |

---

## 🛠️ Technology Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 8](https://vite.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (type-safe interfaces for user models and navigation controls)
* **Routing**: [React Router v7](https://reactrouter.com/) (declarative nested routing & conditional navigation)
* **Styling**: Modern Vanilla CSS featuring smooth gradients, interactive hover micro-animations, and glassmorphism styling parameters.

---

## 📂 Project Structure

```text
learnable-task-12/
├── public/                 # Static assets & redirects
│   └── _redirects          # SPA routing support for static hosting
├── src/
│   ├── assets/             # Images & SVGs
│   ├── components/         # Reusable modules & route guards
│   │   ├── AdminPanel.tsx  # Admin controls widget
│   │   ├── AdminRoute.tsx  # Admin authorization route guard
│   │   ├── EditorPanel.tsx # Content writing & editing interface
│   │   ├── Navbar.tsx      # Dynamic role-badge navigation header
│   │   ├── ProtectedRoute.tsx # General authentication route guard
│   │   └── ViewerPanel.tsx # Read-only analytics grid
│   ├── context/
│   │   └── AuthContext.tsx # Context-based authentication state provider
│   ├── pages/              # Main route endpoints
│   │   ├── DashboardPage.tsx # Dynamic layout controller
│   │   ├── LoginPage.tsx   # Login page
│   │   ├── ProfilePage.tsx # User profile overview
│   │   └── SettingsPage.tsx # Global admin options
│   ├── App.tsx             # Route registry & core provider wrapper
│   ├── App.css             # Page and core layouts styling
│   ├── index.css           # Global tokens, buttons, cards, and theme vars
│   └── main.tsx            # Application entrypoint
├── package.json            # Scripts & dependencies
└── tsconfig.json           # Compiler rules
```

---

## 🚀 Getting Started

Follow these instructions to run the application locally on your computer.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or above recommended).

### Installation & Development

1. **Navigate to the project folder**:
   ```bash
   cd "Learnable Task 12"
   ```

2. **Install all project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**: 
   Click on the local address printed in your terminal (usually `http://localhost:5173`) to view and interact with the application.

---

## 📦 Production Build

To compile the application into static files ready for optimized production deployment:

```bash
npm run build
```

This compiles TypeScript, bundles files using Vite, and outputs all build artifacts directly into the `dist/` directory.
