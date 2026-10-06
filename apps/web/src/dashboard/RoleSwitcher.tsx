import type { RoleRef } from "@eos/contracts";

export interface RoleSwitcherProps {
  roles: readonly RoleRef[];
  value: string;
  onChange: (role: string) => void;
}

/** Development aid until platform/identity provides the signed-in role. */
export function RoleSwitcher({ roles, value, onChange }: RoleSwitcherProps) {
  return (
    <label className="eos-role-switcher">
      View as
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {roles.map((r) => (
          <option key={r.id} value={r.id}>
            {r.title}
          </option>
        ))}
      </select>
    </label>
  );
}
