"use client";

import { messageIcons } from "@/constans/message-icons";
import { GuestBookEntry } from "@/graphql/queries";
import formatDate from "@/utils/formatDate";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineMessage } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";

const Message = ({ user, message, created_at }: Omit<GuestBookEntry, "id">) => {
  const [avatarIcon] = useState(
    messageIcons[Math.floor(Math.random() * messageIcons.length)],
  );

  return (
    <article className="rounded-md border border-wine bg-raisin-black bg-opacity-20 px-2 py-4 text-raisin-black shadow-md shadow-wine dark:border-sheen-gold dark:bg-opacity-40 dark:text-silver dark:shadow-sheen-gold md:px-6">
      <div className="flex justify-between">
        <div className="mb-6 flex items-center justify-center gap-2 rounded-md p-2 text-xl text-raisin-black dark:text-silver md:w-1/5 md:gap-6 md:text-3xl">
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
        <div className="flex items-center gap-2">
          <AiOutlineMessage className="text-3xl" />
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
