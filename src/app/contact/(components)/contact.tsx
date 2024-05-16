"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="z-50 w-1/4">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-xl text-raisin-black dark:text-sheen-gold"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="placeholder:text-ls w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-base text-gray-700 outline-none placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base text-raisin-black dark:text-sheen-gold"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="placeholder:text-ls w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-base text-gray-700 outline-none placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base text-raisin-black dark:text-sheen-gold"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="placeholder:text-ls w-full resize-none rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-base text-gray-700 outline-none placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div className="text-center">
        <button className="hover:shadow-form dark:hover:bg-sheen-gold-500 mt-10 rounded-md bg-wine px-8 pb-3 pt-1 text-base font-semibold text-silver outline-none hover:bg-wine-800 dark:bg-sheen-gold dark:text-raisin-black">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
