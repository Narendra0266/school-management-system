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
