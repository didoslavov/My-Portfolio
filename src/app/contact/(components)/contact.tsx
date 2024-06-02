"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import { ComponentType, useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  animateEnterPage,
  animateListSlider,
} from "@/utils/animations/animate-page";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { FormProps } from "@/components/ui/form";
import { InputProps } from "@/components/ui/input";
import { TextAreaProps } from "@/components/ui/text-area";

export type ContactFormData = z.infer<typeof contactFormSchema>;

const Form = dynamic<FormProps<ContactFormData>>(
  () => import("@/components/ui/form"),
);
const Input = dynamic<InputProps<ContactFormData>>(
  () => import("@/components/ui/input"),
);
const FormError = dynamic(() => import("@/components/ui/form-error"));
const TextArea = dynamic<TextAreaProps<ContactFormData>>(
  () => import("@/components/ui/text-area"),
);
const Button = dynamic(() => import("@/components/ui/button"));

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(contentRef);
    animateEnterPage(contentRef);
  });

  const onSubmit: SubmitHandler<ContactFormData> = (formData) => {
    sendEmail(formData);
    router.push("/contact?modal=true");
    reset();
  };

  return (
    <div
      ref={contentRef}
      className="flex flex-col items-center justify-center gap-10 md:gap-20"
    >
      <div className="mt-10 text-center font-concert text-lg text-raisin-black dark:text-silver sm:text-xl  md:text-4xl">
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
          or leave a message in the{" "}
          <Link
            href="/guest-book"
            className="transition-all duration-500 ease-in-out hover:text-wine dark:hover:text-sheen-gold"
          >
            guest book
          </Link>
          .
        </h3>
      </div>
      <Form
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        className="z-50 w-4/5 lg:w-1/4"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Full Name
          </label>
          <Input
            name="name"
            type="text"
            placeholder="John Doe"
            register={register}
            errors={errors}
          />
          {errors.name && <FormError field="name" errors={errors} />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Email Address
          </label>
          <Input
            name="email"
            placeholder="example@domain.com"
            register={register}
            errors={errors}
          />
          {errors.email && <FormError field="email" errors={errors} />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Message
          </label>
          <TextArea
            name="message"
            rows={4}
            placeholder="Type your message"
            register={register}
            errors={errors}
            className="px-6 pb-3 pt-2 text-lg placeholder:text-lg"
          ></TextArea>
          {errors.message && <FormError field="message" errors={errors} />}
        </div>
        <div className="text-center">
          <Button type="submit" className="px-8 py-3 text-lg md:mt-10">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
