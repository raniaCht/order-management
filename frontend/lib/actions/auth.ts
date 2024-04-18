"use server";

import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

function setCookies(
  cookies: ReadonlyRequestCookies | ResponseCookies,
  name: string,
  value: string
) {
  const expires = new Date(Date.now() + 10 * 1000);
  cookies.set(name, value, { expires, httpOnly: true });
}

export async function registerUser(user: any) {
  const res = await fetch("http://127.0.0.1:8000/accounts/", {
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const { access, refresh } = await res.json();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("access", access, { expires, httpOnly: true });
  cookies().set("refresh", refresh, { expires, httpOnly: true });
}

export async function login(credential: any) {
  const res = await fetch("http://127.0.0.1:8000/api/token/", {
    body: JSON.stringify(credential),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const { access, refresh } = await res.json();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("access", access, { expires, httpOnly: true });
  cookies().set("refresh", refresh, { expires, httpOnly: true });
}

export async function updateSession(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh")?.value;
  if (!refreshToken) return null;

  const res = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });
  const { access, refresh } = await res.json();
  const response = NextResponse.next();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  response.cookies.set("access", access, { expires, httpOnly: true });
  response.cookies.set("refresh", refresh, { expires, httpOnly: true });
  return response;
}
