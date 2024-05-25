"use client";

import Message from "@/app/guest-book/(components)/message";
import Button from "@/components/ui/button";
import Form from "@/components/ui/form";
import FormError from "@/components/ui/form-error";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import { GuestBookEntry } from "@/graphql/queries";
import { addMessage } from "@/lib/actions/hasura-messages";
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
  user: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" }),
});

export type MessageFormData = z.infer<typeof messageFormSchema>;

function GuestBook({
  data,
}: {
  data: {
    guest_book: GuestBookEntry[];
  };
}) {
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
    const { user, message } = formData;

    addMessage(user, message);
    reset();
  };

  return (
    <section
      ref={contentRef}
      className="mx-auto mb-10 flex max-w-[1440px] flex-col items-center justify-center"
    >
      <h2 className="mb-14 font-concert text-5xl text-raisin-black dark:text-silver">
        Leave me a message
      </h2>
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className="mb-10 flex w-2/3 items-start gap-2"
      >
        <div className="w-1/4">
          <label
            htmlFor="user"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Name
          </label>
          <Input
            register={register}
            errors={errors}
            name="user"
            type="text"
            placeholder="Your name"
            required
            className="max-w-1/2 rounded-md p-1"
          />
          {errors.user && <FormError field="user" errors={errors} />}
        </div>
        <div className="flex w-full flex-col">
          <label
            htmlFor="message"
            className="mb-3 block text-lg text-raisin-black dark:text-sheen-gold"
          >
            Message
          </label>
          <TextArea
            rows={1}
            register={register}
            errors={errors}
            name="message"
            placeholder="Your message"
            required
            className="w-full rounded-md p-1"
          />
          {errors.message && <FormError field="message" errors={errors} />}
        </div>
        <div className="flex h-[114px] flex-col justify-center">
          <Button type="submit" className="px-4 py-[5px] text-base">
            Send
          </Button>
        </div>
      </Form>
      <ul className="flex w-2/3 flex-col gap-6">
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
