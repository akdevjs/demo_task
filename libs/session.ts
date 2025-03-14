import "server-only";
import { secret_key } from "../utils/constants";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const encoded_key = new TextEncoder().encode(secret_key);

interface SESSION_PAYLOAD extends JWTPayload {
  email: string;
  expiresAt: Date;
}
export const encrypt = async (payload: SESSION_PAYLOAD) =>
  new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoded_key);

export const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encoded_key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("failed to verify session: ", session);
  }
};

export const createSession = async (email: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ email, expiresAt });
  const cookie = await cookies();
  cookie.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
};

export const deleteSession = async () => {
  const cookie = await cookies();
  cookie.delete("session");
}