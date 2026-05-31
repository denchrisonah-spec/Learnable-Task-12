#  Dynamic User Dashboard with Protected Routes

A secure, responsive, and aesthetically premium **Role-Based Access Control (RBAC) Dashboard** application built with React 19, TypeScript, Vite, and React Router DOM v7. This project demonstrates dynamic front-end permission handling, custom context-driven authentication, and protected routing.

---

##  Features

### 1. Multi-Role Simulated Authentication
* **Seamless Login**: Users can log in using any username and select one of three preconfigured system roles.
* **Global Auth State**: Managed dynamically via custom React context (`AuthContext` & `useAuth` hook) providing uniform access to the current authenticated user's state.

### 2. Role-Based Dynamic Dashboards
The home workspace dynamically adapts its layout, widgets, and functional panels according to the logged-in user's role:
* ** Admin Workspace**: Access to critical administrator actions such as user management, system audit logs, and global preferences.
* ** Editor Workspace**: A feature-rich drafting environment allowing editors to write, draft, and publish new content.
* ** Viewer Workspace**: A clean, read-only analytics grid showing detailed status records (e.g., approved/pending/rejected sales and growth reports).

### 3. Route Guarding & Page Protection
* **General Protection (`ProtectedRoute`)**: Restricts access to standard personal workspaces (like `/dashboard` and `/profile`) to logged-in users only. Unauthenticated requests are gracefully redirected to the `/login` portal.
* **Role-Specific Restrictions (`AdminRoute`)**: Restricts high-privilege configuration routes (like `/settings`) exclusively to users holding the **Admin** role. Editors and Viewers are blocked and redirected to the main dashboard.

---

##  Technology Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 8](https://vite.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (type-safe interfaces for user models and navigation controls)
* **Routing**: [React Router v7](https://reactrouter.com/) (declarative nested routing & conditional navigation)
* **Styling**: Modern Vanilla CSS featuring smooth gradients, interactive hover micro-animations, and glassmorphism styling parameters.

---

##  Link
https://jobister.netlify.app/

