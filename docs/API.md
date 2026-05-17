# School Management System - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All requests (except login/register) require JWT token:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth

#### Login
```
POST /auth/login
Body: { email, password }
```

#### Register
```
POST /auth/register
Body: { email, password, name, role }
```

### Schools

#### Get All Schools
```
GET /schools
```

#### Get School by ID
```
GET /schools/:id
```

#### Create School
```
POST /schools
Body: { name, principal, medium, type }
```

### Fees

#### Get All Fees Records
```
GET /fees
```

#### Get Student Fees
```
GET /fees/student/:studentId
```

#### Record Payment
```
POST /fees/payment
Body: { studentId, amount, month }
```

### Transport

#### Get All Buses
```
GET /transport/buses
```

#### Get Routes
```
GET /transport/routes
```

#### Track Student
```
GET /transport/tracking/:studentId
```

### Hostel

#### Get All Rooms
```
GET /hostel/rooms
```

#### Get Student Hostel Info
```
GET /hostel/student/:studentId
```

#### Book Room
```
POST /hostel/book
Body: { studentId, roomId, checkInDate }
```

### Staff

#### Get All Staff
```
GET /staff
```

#### Record Attendance
```
POST /staff/attendance
Body: { staffId, date, status }
```

## Response Format

### Success
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error
```json
{
  "success": false,
  "error": "Error message"
}
```
