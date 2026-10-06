/**
 * The 15 user roles from the high-level architecture diagram.
 * The id is the file name of the role's dashboard layout in
 * platform/identity/config/dashboards/<id>.yaml.
 */
export const ROLES = [
  { id: "applicant", title: "Applicant" },
  { id: "student", title: "Student" },
  { id: "athlete", title: "Athlete" },
  { id: "faculty", title: "Faculty / Instructor" },
  { id: "coach", title: "Coach" },
  { id: "medical-staff", title: "Medical Staff (Doctor / Physio)" },
  { id: "nutritionist", title: "Nutritionist" },
  { id: "examination-staff", title: "Examination Staff" },
  { id: "department-admin", title: "Department Admin / HoD" },
  { id: "finance-staff", title: "Finance Staff" },
  { id: "hr-staff", title: "HR Staff" },
  { id: "facility-staff", title: "Facility / Inventory Staff" },
  { id: "governance", title: "Governance (Grievance / RTI / IQAC)" },
  { id: "support-staff", title: "Support Staff (Helpdesk)" },
  { id: "management", title: "Management (VC, Registrar)" },
] as const;

export type RoleId = (typeof ROLES)[number]["id"];

export function isRoleId(value: string): value is RoleId {
  return ROLES.some((r) => r.id === value);
}
