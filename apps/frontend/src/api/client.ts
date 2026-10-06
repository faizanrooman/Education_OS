/** Minimal API client for the platform services. Feature modules use their generated clients instead. */

export const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "/api/v1";
const TOKEN_KEY = "eos.token";

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage unavailable: session lives in memory only */
  }
}

export class ApiError extends Error {
  constructor(public status: number, message: string, public body?: unknown) {
    super(message);
  }
}

export async function api<T>(path: string, init: RequestInit & { json?: unknown } = {}): Promise<T> {
  const headers: Record<string, string> = { ...(init.headers as Record<string, string>) };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  let body = init.body;
  if (init.json !== undefined) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(init.json);
  }
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers, body });
  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => undefined);
  if (!res.ok) throw new ApiError(res.status, (data as { detail?: string })?.detail ?? res.statusText, data);
  return data as T;
}

/** True when the API answers; false means the shell runs in preview mode. */
export async function apiReachable(): Promise<boolean> {
  try {
    // The static host answers every unknown path with index.html and 200, so require the health JSON.
    const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(2500), headers: { Accept: "application/json" } });
    if (!res.ok) return false;
    const data = (await res.json().catch(() => null)) as { status?: string } | null;
    return data?.status === "ok";
  } catch {
    return false;
  }
}
