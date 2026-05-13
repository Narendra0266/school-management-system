# School Management System - Setup Guide

## Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL (if running manually)
- Git

## Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/Narendra0266/school-management-system.git
cd school-management-system

# Start all services
docker-compose up
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Database: localhost:5432

## Manual Setup

### 1. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

### 3. Database Setup

```bash
# PostgreSQL must be running
psql -U admin -d school_management < database/init.sql
```

## Login Credentials

**Demo User:**
- Email: director@modern.edu
- Password: password123

## Environment Variables

Create `.env` file in root directory:

```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=school_management
DB_USER=admin
DB_PASSWORD=admin123
JWT_SECRET=your_secret_key_here
```

## Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=5001
```

### Database Connection Error
```bash
# Verify PostgreSQL is running
psql -U admin -d school_management
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## API Documentation

See [API.md](./API.md) for complete API documentation.
