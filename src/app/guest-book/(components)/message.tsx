import { GuestBookEntry } from "@/graphql/queries";
import formatDate from "@/utils/formatDate";
import { AiOutlineDelete, AiOutlineMessage } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";

const Message = ({
  user,
  message,
  created_at,
}: Pick<GuestBookEntry, "user" | "message" | "created_at">) => {
  return (
    <article className="rounded-md border border-sheen-gold bg-raisin-black bg-opacity-40 px-6 py-4 text-silver shadow-md shadow-sheen-gold">
      <div className="flex justify-between">
        <div className="mb-6 flex w-1/3 items-center justify-center gap-6 rounded-md p-2 text-2xl text-silver">
          <div className="w-fit rounded-full border-2 border-sheen-gold-500 bg-silver bg-opacity-20 p-2 text-3xl">
            <FaUserAstronaut />
          </div>
          <h3 className="text-3xl font-bold">{user}</h3>
        </div>
        <time className="font-concert text-lg">{formatDate(created_at)}</time>
      </div>
      <div className="flex items-center justify-between rounded-md border-b border-t border-silver px-2 py-4">
        <div className="flex items-center gap-2">
          <AiOutlineMessage className="text-3xl" />
          <p className="text-lg font-semibold tracking-[0.9px]">{message}</p>
        </div>
        <div className="flex items-center gap-2 text-3xl">
          <button>
            <BiMessageSquareEdit />
          </button>
          <button>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Message;
