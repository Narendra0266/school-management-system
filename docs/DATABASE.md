# Database Schema

## Tables Overview

### organizations
Stores organization/group information
- id, name, director, logo_url, created_at

### schools
Individual schools/colleges under organization
- id, org_id, name, principal, medium, type, address

### users
System users (teachers, principals, admins)
- id, school_id, email, password_hash, name, role, phone

### students
Student records
- id, school_id, roll_number, name, email, parent_info, class_name

### fees
Student fee records
- id, student_id, month, amount, status, due_date, paid_date

### staff
Teachers and other staff
- id, school_id, name, email, position, salary, joining_date

### buses
Transport buses
- id, org_id, bus_number, driver_name, capacity

### routes
Bus routes
- id, bus_id, name, start_point, end_point, stops

### hostel_rooms
Hostel room information
- id, org_id, room_number, block_name, capacity

### hostel_allocations
Student hostel allocations
- id, room_id, student_id, check_in_date, check_out_date, monthly_fees

### attendance
Staff/student attendance
- id, user_id, date, status

## Relationships

```
organizations
├── schools
│   ├── users
│   └── students
│       ├── fees
│       └── hostel_allocations
├── buses
│   └── routes
├── hostel_rooms
└── staff
```
