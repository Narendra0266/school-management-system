# Role-Based Permissions

## Roles

### Director
- Access to all schools and data
- View reports and analytics
- Manage principals
- Financial overview

### Principal
- Access to their school only
- Manage teachers and staff
- View student records
- Approve expenses

### Department Head
- Manage specific departments (Transport, Hostel)
- Record transactions
- View department reports

### Teacher
- View student list
- Mark attendance
- Submit grades
- View their salary info

### Student
- View personal info
- Check fee status
- View transport info
- Access hostel info

### Finance Staff
- Record fee payments
- Generate invoices
- View financial reports

## Permission Matrix

| Action | Director | Principal | Head | Teacher | Student |
|--------|----------|-----------|------|---------|--------|
| View All Schools | ✅ | ❌ | ❌ | ❌ | ❌ |
| Manage Students | ✅ | ✅ | ❌ | ✅ | ❌ |
| Record Fees | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Fees | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage Transport | ✅ | ❌ | ✅ | ❌ | ✅ |
| Manage Hostel | ✅ | ❌ | ✅ | ❌ | ✅ |
| Generate Reports | ✅ | ✅ | ✅ | ❌ | ❌ |
