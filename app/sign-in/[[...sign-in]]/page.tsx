"use client";

import * as Clerk from "@clerk/elements/common";
// import * as SignIn from "@clerk/elements/sign-in";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="bg-backgroundBanner bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
      {/* <SignIn.Root>
          <SignIn.Step name="start">
        <h1>Sign in to your account</h1>
        <Clerk.Connection name="google">Sign in with Google</Clerk.Connection>

        <Clerk.Field name="identifier">
          <Clerk.Label>Email</Clerk.Label>
          <Clerk.Input />
          <Clerk.FieldError />
        </Clerk.Field>

        <SignIn.Action submit>Sign in with Email</SignIn.Action>
      </SignIn.Step>
      <SignIn.Step name="verifications">
        <SignIn.Strategy name="email_code">
          <h1>Check your email</h1>
          <p>
            We sent a code to <SignIn.SafeIdentifier />.
          </p>

          <Clerk.Field name="code">
            <Clerk.Label>Email code</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit>Continue</SignIn.Action>
        </SignIn.Strategy>
      </SignIn.Step>
  </SignIn.Root> */}

      {/* <SignIn.Root>
        <SignIn.Step name="start" className="container">
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow-lg shadow-blue-500 ">
              <div className="mb-6 flex flex-col items-center">
                <h1 className="text-[22px] font-bold text-blue-500 ">
                  GreenDev
                </h1>

                <h1 className="mb-2 text-2xl font-bold">Login</h1>

                <p className="text-muted-foreground">Welcome back</p>
              </div>

              <div>
                <div className="grid gap-4">
                  <Clerk.Field name="identifier" className="flex flex-col">
                    <Clerk.Input asChild>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Clerk.Input>
                    <Clerk.FieldError />
                  </Clerk.Field>

                  <Clerk.Field name="password">
                    <Clerk.Input asChild>
                      <div>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </Clerk.Input>
                  </Clerk.Field> */}
                  {/* CAPTCHA Widget */}
                  {/* <div id="clerk-captcha"></div>
                  <SignIn.Action submit asChild>
                    <Button type="submit" className="mt-2 w-full">
                      Log-in
                    </Button>
                  </SignIn.Action>
                  <Clerk.Connection name="google" asChild>
                    <Button variant="outline" className="w-full">
                      <FcGoogle className="mr-2 size-5" />
                      Log in with Google
                    </Button>
                  </Clerk.Connection>
                </div>

                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                  <p>Don't have an account?</p>
                  <Link href="/sign-up" className="font-medium text-primary">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SignIn.Step> 
 </SignIn.Root> */} 
      {/* ------------------------------------------------------------- */}


      <SignIn forceRedirectUrl='/' />
    </section>
  );
}
