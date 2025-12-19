# 🛠️ Local Service Management System

![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=061E26)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-Server-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Test_Mode-635BFF?logo=stripe&logoColor=white)

A full‑stack app to manage local service complaints, assignments, technician workflows, and payments. Includes role‑based dashboards (Customer, Admin, Technician, Super Admin) and Stripe checkout integration.

---

## 🚀 Quick Start

- Prerequisites: Node.js 18+ and npm

```bash
# 1) Install dependencies
cd server && npm install
cd ../frontend && npm install

# 2) Configure environment (server)
# Create server/.env and add your Stripe key
# STRIPE_SECRET_KEY=sk_test_...

# 3) Run the backend (server)
cd ../server
npm start
# → Server runs on http://localhost:3000

# 4) Run the frontend (React)
cd ../frontend
npm run dev
# → Frontend runs on http://localhost:5173
```

---

## 📦 Project Structure

```
final_project/
├─ frontend/            # React + Vite app (UI)
│  ├─ src/
│  │  ├─ components/    # Role‑based views and pages
│  │  ├─ context/       # Auth context
│  │  └─ utils/         # Helpers
│  └─ ...
└─ server/              # Express API + Mongo + Stripe
   ├─ models/           # Mongoose models
   ├─ index.js          # Routes and controllers
   └─ .env              # STRIPE_SECRET_KEY (local only)
```

Key files:
- Frontend scripts: see [frontend/package.json](frontend/package.json)
- Backend entry: see [server/index.js](server/index.js)
- Environment file (local): [server/.env](server/.env)

---

## ⚙️ Environment Variables (Server)

Create a single file at [server/.env](server/.env):

```env
STRIPE_SECRET_KEY=sk_test_your_test_key_here
```

Notes:
- The server uses `dotenv` to load this value.
- Never commit real secrets. `.env` is ignored by Git.

---

## 🧩 Install & Run

- Backend (Express):
  - Install: `npm install` in [server](server)
  - Start: `npm start` (uses nodemon)
  - URL: http://localhost:3000

- Frontend (React + Vite):
  - Install: `npm install` in [frontend](frontend)
  - Dev server: `npm run dev`
  - URL: http://localhost:5173

---

## 🧪 Available Scripts

- Frontend (run inside `frontend/`):
  - `npm run dev` — start Vite dev server
  - `npm run build` — build for production
  - `npm run preview` — preview built app
  - `npm run lint` — lint with ESLint

- Server (run inside `server/`):
  - `npm start` — start Express server with nodemon

---

## 🔐 Payments (Stripe Test)

- The app creates Stripe Checkout Sessions when a complaint is resolved.
- Configure `STRIPE_SECRET_KEY` in [server/.env](server/.env) using a Stripe test key.
- Test cards: `4242 4242 4242 4242`, any future date, any CVC.

---

## 🧠 Features

- Role‑based dashboards: Customer, Admin, Technician, Super Admin
- Complaint lifecycle: create → assign → in‑progress → resolve → close
- Technician workload visibility and assignment
- Stripe checkout for payments on resolved complaints
- Super Admin overview and statistics

---

## 🔍 Troubleshooting

- Port conflicts:
  - Backend uses `3000`; Frontend uses `5173`.
- Env not loaded:
  - Ensure [server/.env](server/.env) exists and `STRIPE_SECRET_KEY` is set.
  - Restart server after changing `.env`.
- CRLF/LF warnings:
  - Safe to ignore; line endings normalized by Git.

---

## 🖼️ Screenshots (Placeholders)

> Add screenshots to `docs/screenshots/` and update the links below.

- Customer Dashboard: ![Customer](docs/screenshots/customer.png)
- Admin Dashboard: ![Admin](docs/screenshots/admin.png)
- Technician Dashboard: ![Technician](docs/screenshots/technician.png)
- Super Admin Dashboard: ![Super Admin](docs/screenshots/superadmin.png)

---

## 🏗️ Tech Stack

- Frontend: React 19, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB (Mongoose)
- Payments: Stripe Checkout

---

## 📜 License

This project is for educational/demo purposes.
