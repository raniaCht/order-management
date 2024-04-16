"use server";

import { cookies } from "next/headers";

export async function registerUser(user: any) {
  const res = await fetch("http://127.0.0.1:8000/accounts/", {
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const session = await res.json();
  delete session["message"];
  const expires = new Date(Date.now() + 10 * 1000);
  cookies().set("session", session, { expires, httpOnly: true });
}
