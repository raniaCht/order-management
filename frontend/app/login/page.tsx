import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="bg-secondary flex justify-center items-center px-56 text-black min-h-screen">
      <div className="w-full flex justify-between gap-2 bg-white p-3">
        <div className="w-1/3 p-3">
          <div className="flex flex-col justify-start gap-4">
            <span className="inline-block w-10 h-10 bg-logo"></span>
            <h1 className="font-medium text-2xl">Login</h1>
            <p className="font-medium text-[15px] opacity-60">
              See your growth and get support!
            </p>
          </div>
          <form className="flex flex-col justify-start p-3 gap-7">
            <button className="flex justify-center items-center gap-2 w-full cursor-pointer border border-black rounded-full p-3">
              <span className="text-xs font-normal">Sign in with google</span>
              <Image src={"/google.svg"} alt="google" width={32} height={32} />
            </button>
            <div className="flex flex-col justify-start gap-2">
              <label className="text-primary" htmlFor="email">
                Email*
              </label>
              <input
                className="bg-secondary border rounded-[4px] px-3 py-4 text-sm outline-primary"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <label className="text-primary" htmlFor="password">
                Password*
              </label>
              <input
                className="bg-secondary border rounded-[4px] px-3 py-4 text-sm outline-primary"
                id="password"
                name="password"
                placeholder="minimum 8 characters"
              />
            </div>
            <div className="flex justify-between text-primary">
              <div className="cursor-pointer">
                <input type="checkbox" id="rememberme" />
                <label className="ps-2" htmlFor="rememberme">
                  Remember me
                </label>
              </div>
              <Link href={""}>Forgot password?</Link>
            </div>
            <button className="cursor-pointer p-3 bg-primary text-white rounded-md">
              Login
            </button>
            <p className="font-medium">
              Not regestered yet?{" "}
              <Link className="text-primary" href={""}>
                Create a new account
              </Link>
            </p>
          </form>
        </div>
        <div className="w-2/3">
          <img className="h-full" src={"/image3.svg"} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
