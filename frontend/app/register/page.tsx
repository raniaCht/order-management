import Link from "next/link";
import React from "react";
import { FormControl } from "../components/FormControl";
import { registerUser } from "@/lib/actions/auth";

async function RegisterPage() {
  return (
    <div className="bg-secondary flex justify-center items-center px-3 md:px-40 lg:px-4 xl:px-32 2xl:px-60 py-4 rounded-lg text-black min-h-screen">
      <div className="w-full flex justify-between gap-2 bg-white p-1 lg:p-3">
        <div className="w-1/3 hidden lg:block bg-[url('/image3.svg')] bg-center">
          {/* <img className="h-full" src={"/image3.svg"} /> */}
        </div>
        <div className="w-full lg:w-2/3 p-1 lg:p-4">
          <div className="flex flex-col justify-start gap-4">
            <span className="inline-block w-10 h-10 bg-logo"></span>
            <h1 className="font-medium text-2xl text-primary">Register</h1>
            <div>
              <h3 className="text-primary font-medium">
                Manage all your inventory efficiently
              </h3>
              <p className="font-medium text-[15px] opacity-60">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your work profile
              </p>
            </div>
          </div>
          <form
            action={async (formData) => {
              "use server";
              const data = Object.fromEntries(formData);
              await registerUser(data);
            }}
            className="flex flex-col justify-start p-3 gap-7"
          >
            <div className="flex justify-between flex-col lg:flex-row gap-5">
              <FormControl
                label="First name"
                name="firstName"
                placeholder="Enter your first name"
              />
              <FormControl
                label="Last name"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex justify-between flex-col lg:flex-row gap-5">
              <FormControl
                label="Email*"
                name="email"
                placeholder="Enter your email"
              />
              <FormControl
                label="Phone no."
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <FormControl
              label="Password*"
              name="password"
              placeholder="minimum 8 characters"
            />
            <div className="cursor-pointer text-primary">
              <input type="checkbox" id="accept" />
              <label className="ps-2" htmlFor="accept">
                I agree to all terms, privacy policies, and fees
              </label>
            </div>
            <button
              type="submit"
              className="cursor-pointer p-3 bg-primary text-white rounded-md w-60"
            >
              Sign up
            </button>
            <p className="font-medium">
              Already have an account?{" "}
              <Link className="text-primary" href={"/login"}>
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
