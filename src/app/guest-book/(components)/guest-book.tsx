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
} from "@/utils/animations/animate-page";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { GiDiamondsSmile } from "react-icons/gi";

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
      className="mx-2 mb-10 flex max-w-[1440px] flex-col items-center justify-center md:mx-auto"
    >
      <h2 className="mb-4 font-concert text-4xl text-raisin-black dark:text-silver sm:text-5xl">
        Leave me a message
      </h2>
      <p className="mb-10 text-center text-lg font-bold text-wine dark:text-sheen-gold sm:text-xl">
        It could be anything. A question, a suggestion, a joke. I love dad jokes too!
      </p>
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className="mb-10 flex w-full flex-col items-start gap-2 sm:w-5/6 md:w-2/3 md:flex-row"
      >
        <div className="w-full md:w-1/4">
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
            className="md:max-w-1/2 rounded-md p-1"
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
        <div className="mt-4 flex w-full flex-col items-center justify-center text-center md:mt-0 md:h-[114px] md:w-fit">
          <Button
            type="submit"
            className="w-3/4 px-4 py-[5px] text-base md:w-full"
          >
            Send
          </Button>
        </div>
      </Form>
      {data.guest_book.length ? (
        <ul className="flex w-full flex-col gap-6 sm:w-5/6 md:w-2/3">
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
      ) : (
        <div className="flex md:flex-row items-center flex-col md:items-end gap-4">
          <p className="mt-20 font-concert text-raisin-black dark:text-silver text-center text-lg font-bold sm:text-xl">
            Share this milestone with me! Be the first one leaving a message!{" "}
          </p>
          <GiDiamondsSmile className="text-3xl text-wine dark:text-sheen-gold" />
        </div>
      )}
    </section>
  );
}

export default GuestBook;
