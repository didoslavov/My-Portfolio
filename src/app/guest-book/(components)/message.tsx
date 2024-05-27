"use client";

import { messageIcons } from "@/constans/message-icons";
import { GuestBookEntry } from "@/graphql/queries";
import formatDate from "@/utils/formatDate";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Message = ({ user, message, created_at }: Omit<GuestBookEntry, "id">) => {
  const [avatarIcon] = useState(
    messageIcons[Math.floor(Math.random() * messageIcons.length)],
  );

  return (
    <article className="rounded-md border border-wine bg-raisin-black bg-opacity-20 px-2 py-4 text-raisin-black shadow-md shadow-wine dark:border-sheen-gold dark:bg-opacity-40 dark:text-silver dark:shadow-sheen-gold md:px-6">
      <div className="flex flex-col-reverse gap-2 md:flex-row md:justify-between md:gap-0">
        <div className="mb-6 flex items-center gap-2 rounded-md p-2 text-lg text-raisin-black dark:text-silver md:gap-6 md:text-3xl">
          <div className="w-fit rounded-full border-2 border-wine bg-silver bg-opacity-20 p-2 text-2xl dark:border-sheen-gold-500 md:text-3xl">
            {avatarIcon}
          </div>
          <h3 className="font-bold">{user}</h3>
        </div>
        <time className="font-concert md:text-lg">
          {formatDate(created_at)}
        </time>
      </div>
      <div className="flex items-center justify-between rounded-md border-b border-t border-raisin-black px-2 py-4 dark:border-silver">
        <div className="flex flex-col gap-2 text-raisin-black dark:text-silver md:flex-row">
          <AiOutlineMessage className="min-w-10 text-3xl" />
          <p className="font-semibold md:text-lg md:tracking-[0.9px]">
            {message}
          </p>
        </div>
        {/* <div className="flex items-center gap-2 text-2xl md:text-3xl">
          <button>
            <BiMessageSquareEdit />
          </button>
          <button>
            <AiOutlineDelete />
          </button>
        </div> */}
      </div>
    </article>
  );
};

export default Message;
