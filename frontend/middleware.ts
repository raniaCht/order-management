import { NextRequest } from "next/server";
import { updateSession } from "./lib/actions/auth";

export default async function refreshToken(request: NextRequest) {
  return await updateSession(request);
}
