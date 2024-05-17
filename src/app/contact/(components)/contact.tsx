"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  animateEnterPage,
  animateListSlider,
} from "@/utils/animations/animatePage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export type FormData = z.infer<typeof schema>;

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(contentRef);
    animateEnterPage(contentRef);
  });

  function onSubmit(formData: z.infer<typeof schema>) {
    sendEmail(formData);
    router.push("/contact?modal=true");
    reset();
  }

  return (
    <div
      ref={contentRef}
      className="flex flex-col items-center justify-center gap-10 md:gap-20"
    >
      <div className="font-concert mt-10 text-center text-lg text-raisin-black dark:text-silver sm:text-xl  md:text-4xl">
        <h2 className="mb-4">
          Send me an email and I&apos;ll reach out to you.
        </h2>
        <h3 className="text-sm md:text-xl">
          You can find me on{" "}
          <Link
            href="https://t.me/didoslavov"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
          >
            Telegram
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/didoslavov/"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="http://github.com/didoslavov"
            target="_blank"
            className="transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
          >
            GitHub
          </Link>{" "}
          too.
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="z-50 w-4/5 lg:w-1/4">
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
            className={`w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-base text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold ${errors.name && "border-wine"}`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="font-concert text-sm text-wine">
              {errors.name.message}
            </p>
          )}
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
            className={`w-full rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-lg text-raisin-black  outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold ${errors.email && "border-wine"}`}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="font-concert text-sm text-wine">
              {errors.email.message}
            </p>
          )}
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
            className={`w-full resize-none rounded-md border border-transparent bg-raisin-black bg-opacity-20 px-6 pb-3 pt-2 text-lg text-raisin-black outline-none placeholder:text-lg placeholder:text-taupe-gray focus:border-raisin-black focus:shadow-md dark:bg-silver dark:focus:border-sheen-gold ${errors.message && "border-wine"}`}
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <p className="font-concert text-sm text-wine">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <button className="hover:shadow-form rounded-md bg-wine px-8 py-3 text-lg font-semibold text-silver outline-none hover:bg-wine-700 dark:bg-sheen-gold dark:text-raisin-black dark:hover:bg-sheen-gold-500 md:mt-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
