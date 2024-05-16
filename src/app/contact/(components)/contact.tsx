"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateEnterPage, animateListSlider } from "@/utils/animatePage";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(contentRef);
    animateEnterPage(contentRef);
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div
      ref={contentRef}
      className="flex flex-col items-center justify-center gap-20"
    >
      <h2 className="mt-10 text-4xl text-raisin-black dark:text-silver">
        Send me an email and I&apos;ll reach out to you
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="z-50 w-1/4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-base text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-lg text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 py-3 text-lg text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-wine focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="hover:shadow-form dark:hover:bg-sheen-gold-500 mt-10 rounded-md bg-wine px-8 pb-3 pt-1 text-lg font-semibold text-silver outline-none hover:bg-wine-700 dark:bg-sheen-gold dark:text-raisin-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
