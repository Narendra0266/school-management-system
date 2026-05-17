export const permissions = {
  DIRECTOR: [
    "CREATE_USER",
    "DELETE_USER",
    "UPDATE_USER",
    "VIEW_USERS",
    "MANAGE_ORGANIZATION",
  ],

  PRINCIPAL: [
    "VIEW_USERS",
    "UPDATE_USER",
    "MANAGE_STUDENTS",
    "MANAGE_TEACHERS",
  ],

  TEACHER: [
    "VIEW_STUDENTS",
    "MARK_ATTENDANCE",
    "UPLOAD_MARKS",
  ],

  ACCOUNTANT: [
    "MANAGE_FEES",
    "VIEW_PAYMENTS",
  ],

  TRANSPORT_HEAD: [
    "MANAGE_TRANSPORT",
  ],

  HOSTEL_WARDEN: [
    "MANAGE_HOSTEL",
  ],

  STAFF: [],
} as const;

export function hasPermission(
  role: keyof typeof permissions,
  permission: string
) {
  return permissions[role]?.includes(
    permission as never
  );
}