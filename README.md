<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Modern Group of Education - School Management System

A comprehensive full-stack school management system designed for managing multiple schools, colleges, and their departments.

## 🎓 Features

### 1. **School/College Management**
- Multiple institutions under one organization
- Role-based access control (Director, Principal, Department Heads, Staff)
- Institution-specific configurations

### 2. **Financial Management**
- School Fees Collection & Tracking
- Staff Salary Management
- Transport Fund Management
- Hostel Fee Management
- Invoice Generation
- Payment History & Reports

### 3. **Teachers/Staff Management**
- Staff profiles & credentials
- Attendance tracking
- Salary management
- Performance records
- Leave management

### 4. **Transport Management**
- Bus routes & schedules
- Driver management
- Student pickups/dropoffs
- Route tracking
- Transport fee billing

### 5. **Hostel Management**
- Room allocation
- Occupancy tracking
- Student records
- Mess billing
- Maintenance logs
- Visitor management

## 🛠️ Tech Stack

- **Frontend:** React.js + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT with Role-Based Access Control
- **Real-time Updates:** Socket.io
- **Deployment:** Docker + GitHub Actions

## 📁 Project Structure

```
school-management-system/
├── backend/
├── frontend/
├── database/
├── docker-compose.yml
├── .env.example
└── docs/
```

## 🚀 Quick Start

### Using Docker
```bash
git clone https://github.com/Narendra0266/school-management-system.git
cd school-management-system
docker-compose up
```

### Manual Setup
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm start
```

## 📊 Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Database:** localhost:5432

## 👥 Organization Structure

```
Modern Group of Education
├── Director: Mr. Devilal Kumawat
├── Hindi Medium School
│   └── Principal: Mr. Madanlal
├── English Medium School
│   └── Principal: Mr. Kamlesh Kumar
├── Girls College
│   └── Principal: Mr. Pankaj Sharma
└── Shared Departments
    ├── Transport (Head: Mr. Babulal Ji)
    └── Hostel (Head: Mr. Suresh Kumar)
```

## 📄 License

MIT License - See LICENSE file for details
>>>>>>> ef1034a186b06f8ba82fdcd1a0289db3e6bb68de
