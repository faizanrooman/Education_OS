import { ROLES, type RoleId } from "@eos/contracts";

export interface RoleSwitcherProps {
  value: RoleId;
  onChange: (role: RoleId) => void;
}

/** Development aid until platform/identity provides the signed-in role. */
export function RoleSwitcher({ value, onChange }: RoleSwitcherProps) {
  return (
    <label className="eos-role-switcher">
      View as
      <select value={value} onChange={(e) => onChange(e.target.value as RoleId)}>
        {ROLES.map((r) => (
          <option key={r.id} value={r.id}>
            {r.title}
          </option>
        ))}
      </select>
    </label>
  );
}
