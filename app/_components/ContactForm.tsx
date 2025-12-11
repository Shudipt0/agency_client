"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { createContact } from "../actions/contact/createContact";

const ContactForm = () => {
      const [state, action, isPending] = useActionState(createContact, null);
  // console.log(state?.errors)
  return (
              <div className="w-full lg:w-[540px] z-10 ">
            <form
              action={action}
              className="mx-auto flex w-full flex-col gap-8 lg:gap-10 "
            >
              <div className="w-full flex gap-8">
                <div className="grid w-full text-start gap-1.5">
                  <Label
                    htmlFor="name"
                    className="text-[12px] lg:text-sm font-bold "
                  >
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="text-sm lg:text-[16px] font-medium bg-white dark:bg-black/90"
                  />
                  {state?.errors && (
                    <p className="text-red-500 font-semibold text-[12px] py-2 ">
                      {state.errors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid w-full text-start items-center gap-1.5 ">
                <Label
                  htmlFor="email"
                  className="text-[12px] lg:text-sm font-bold "
                >
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="text-sm lg:text-[16px] font-medium bg-white dark:bg-black/90 "
                />
                {state?.errors && (
                  <p className="text-red-500 font-semibold text-[12px] py-2 ">
                    {state.errors.email}
                  </p>
                )}
              </div>
              <div className="grid w-full text-start items-center gap-1.5 ">
                <Label
                  htmlFor="phone"
                  className="text-[12px] lg:text-sm font-bold "
                >
                  Your Phone Number
                </Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="text-sm lg:text-[16px] font-medium bg-white dark:bg-black/90"
                />{" "}
                {state?.errors && (
                  <p className="text-red-500 font-semibold text-[12px] py-2 ">
                    {state.errors.phone}
                  </p>
                )}
              </div>
              <div className="grid w-full text-start gap-1.5">
                <Label
                  htmlFor="message"
                  className="text-[12px] lg:text-sm font-bold "
                >
                  Messages
                </Label>
                <Textarea
                  placeholder="About What do you want to talk?"
                  className="resize-none h-[200px] text-sm lg:text-[16px] font-medium bg-white dark:bg-black/90"
                  id="message"
                  name="message"
                />
                {state?.errors && (
                  <p className="text-red-500 font-semibold text-[12px] py-2 ">
                    {state.errors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 text-sm lg:text-[16px] font-medium "
              >
                Submit
              </Button>
            </form>
          </div>
  )
}

export default ContactForm
