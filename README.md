# Matching App Skeleton

This repository contains a minimal skeleton for a matching/dating application built with **React + TypeScript** for the frontend and **Node.js + TypeScript** for the backend.

## Folder Structure

```
matching-app/
  frontend/   # React application
  backend/    # Node.js API server
```

### Frontend

- `index.html` - entry HTML file
- `src/main.tsx` - React entry point
- `src/App.tsx` - root component
- `src/components/*` - placeholder React components for features such as registration, login, profile, search, matches, chat, and admin panel.

### Backend

- `src/index.ts` - Express server setup
- `src/routes/auth.ts` - example authentication routes

The backend includes placeholders for user registration and login using JWT tokens. Additional routes and database logic would be added to complete the application.

## Development

This project does not include dependencies or build tooling because the environment has no network access. Add the necessary packages (React, Express, TypeScript, etc.) and configure your build tools (e.g., Vite or webpack) in a real environment.

```bash
# Build backend
cd backend
npm install  # install dependencies
npm run build

# Start server
node dist/index.js
```

```bash
# Build frontend
cd frontend
npm install  # install dependencies
npm run build
```

This skeleton is a starting point for implementing features such as user registration, profile management, search, matching, messaging, notifications, and admin tools.
