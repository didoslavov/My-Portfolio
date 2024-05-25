"use client";

import Message from "@/app/guest-book/(components)/message";
import Button from "@/components/ui/button";
import Form from "@/components/ui/form";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import { GuestBookEntry } from "@/graphql/queries";
import {
  animateEnterPage,
  animateListSlider,
} from "@/utils/animations/animatePage";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const messageFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export type MessageFormData = z.infer<typeof messageFormSchema>;

function GuestBook({ data }: { data: { guest_book: GuestBookEntry[] } }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageFormSchema),
    mode: "onChange",
  });
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateListSlider(contentRef);
    animateEnterPage(contentRef);
  });

  const onSubmit: SubmitHandler<MessageFormData> = (formData) => {
    reset();
  };

  return (
    <section
      ref={contentRef}
      className="mx-auto flex max-w-[1440px] flex-col items-center justify-center"
    >
      <h2 className="mb-14 font-concert text-5xl text-raisin-black dark:text-silver">
        Leave me a message
      </h2>
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className="flex w-1/2 items-center justify-center gap-2"
      >
        <div className="w-1/6">
          <label
            htmlFor="name"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Name
          </label>
          <Input
            register={register}
            errors={errors}
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="max-w-1/2 rounded-md border border-raisin-black p-1 dark:border-sheen-gold"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Message
          </label>
          <TextArea
            register={register}
            errors={errors}
            name="message"
            placeholder="Your message"
            required
            className="max-h-[34px] w-full rounded-md border border-raisin-black p-1 dark:border-sheen-gold"
          />
        </div>
        <div className="flex h-[120px] flex-col justify-end">
          <Button
            type="submit"
            className="max-h-12 rounded-md bg-raisin-black px-4 py-1 text-base text-white dark:bg-sheen-gold dark:text-black"
          >
            Send
          </Button>
        </div>
      </Form>
      <ul className="w-1/2">
        {data.guest_book.map((m) => (
          <li key={m.id}>
            <Message
              user={m.user}
              message={m.message}
              created_at={m.created_at}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GuestBook;
