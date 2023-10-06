"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Buttons/Button";

type ContactFormProps = {
  className?: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

type SubmissionError = {
  tripped: boolean;
  message: string;
};

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

type SchemaType = z.infer<typeof schema>;

function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({ mode: "onSubmit", resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("grid gap-4 md:grid-cols-2", className)}
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full px-4 py-2"
          {...register("name")}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          className="w-full px-4 py-2"
          {...register("email")}
        />
      </div>
      <div className="col-span-full">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          className="h-36 w-full px-4 py-2"
          {...register("message")}
        />
      </div>
      <div className="col-span-full flex flex-col gap-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-semibold md:w-fit md:self-end"
        >
          Submit
        </Button>
        {(errors.name || errors.email || errors.message) && (
          <ul className="flex-col self-center text-center text-red-500 md:self-end md:text-end">
            {errors.name && (
              <li>
                <label htmlFor="name">{errors.name.message}</label>
              </li>
            )}
            {errors.email && (
              <li>
                <label htmlFor="email">{errors.email.message}</label>
              </li>
            )}
            {errors.message && (
              <li>
                <label htmlFor="message">{errors.message.message}</label>
              </li>
            )}
          </ul>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
