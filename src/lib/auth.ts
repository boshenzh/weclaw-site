import { SignJWT, jwtVerify } from "jose";
import { serverEnv } from "./env";

const secret = new TextEncoder().encode(serverEnv.AUTH_SECRET);

export type SessionClaims = {
  sub: string; // user id
  email: string;
};

export async function signLoginToken(payload: { email: string }, ttlMinutes = 15) {
  return new SignJWT({ email: payload.email, typ: "login" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ttlMinutes}m`)
    .sign(secret);
}

export async function verifyLoginToken(token: string): Promise<{ email: string }> {
  const { payload } = await jwtVerify(token, secret);
  if (payload.typ !== "login") throw new Error("Invalid token type");
  const email = payload.email;
  if (typeof email !== "string") throw new Error("Invalid token payload");
  return { email };
}

export async function signSessionToken(claims: SessionClaims, ttlDays = 30) {
  return new SignJWT({ email: claims.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(claims.sub)
    .setIssuedAt()
    .setExpirationTime(`${ttlDays}d`)
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<SessionClaims> {
  const { payload } = await jwtVerify(token, secret);
  const sub = payload.sub;
  const email = payload.email;
  if (typeof sub !== "string" || typeof email !== "string") throw new Error("Invalid session");
  return { sub, email };
}
