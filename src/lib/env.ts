import { z } from "zod";

// Server-only env (do not import this in client components)
export const serverEnv = z
  .object({
    AUTH_SECRET: z.string().min(16),
    NEXT_PUBLIC_SITE_URL: z.string().url(),

    RESEND_API_KEY: z.string().min(10),
    EMAIL_FROM: z.string().min(3),

    STRIPE_SECRET_KEY: z.string().min(10),

    // We use Vercel Postgres / Supabase Postgres connection string.
    // Prefer POSTGRES_URL_NON_POOLING when present.
    DATABASE_URL: z.string().url().optional(),
    POSTGRES_URL_NON_POOLING: z.string().url().optional(),
  })
  .passthrough()
  .parse(process.env);

export function getDatabaseUrl(): string {
  return serverEnv.POSTGRES_URL_NON_POOLING || serverEnv.DATABASE_URL || "";
}
