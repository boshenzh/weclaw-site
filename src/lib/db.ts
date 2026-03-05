import postgres from "postgres";
import { getDatabaseUrl } from "./env";

let _sql: ReturnType<typeof postgres> | null = null;

export function sql() {
  if (_sql) return _sql;
  const url = getDatabaseUrl();
  if (!url) throw new Error("Missing DATABASE_URL/POSTGRES_URL_NON_POOLING");

  _sql = postgres(url, {
    // Vercel/Supabase: use ssl
    ssl: "require",
    // Keep it conservative
    max: 5,
  });

  return _sql;
}
