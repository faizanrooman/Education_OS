import { useState, type FormEvent } from "react";
import { ApiError } from "../api/client";
import { login } from "./session";

export function Login({ slug, onDone, onSignUp }: { slug?: string; onDone: () => void; onSignUp: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [org, setOrg] = useState(slug ?? "");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await login(email, password, org || undefined);
      onDone();
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : String(err);
      setError(msg.includes("pending_approval") ? "Your organisation's academic package is waiting for platform approval. Try again once you receive the approval email." : msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="eos-auth" onSubmit={submit}>
      <h1>Sign in</h1>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        Organisation short name <span className="eos-auth__hint">(only if your email is in more than one)</span>
        <input value={org} onChange={(e) => setOrg(e.target.value)} />
      </label>
      {error && <p className="eos-auth__error" role="alert">{error}</p>}
      <button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      <p className="eos-auth__hint">
        New here? <a href="#signup" onClick={(e) => { e.preventDefault(); onSignUp(); }}>Register your organisation</a>
      </p>
    </form>
  );
}
