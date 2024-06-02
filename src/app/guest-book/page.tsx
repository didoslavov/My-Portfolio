import { getMessages } from "@/lib/actions/hasura-messages";
import dynamic from "next/dynamic";

const GuestBook = dynamic(() => import("./(components)/guest-book"));

export const metadata = {
  title: "Portfolio | Guest Book",
  description: "Leave a message in the guest book",
};

const page = async () => {
  const { data, errors } = await getMessages();

  if (errors) {
    console.error(errors);
  }

  return <GuestBook data={data} />;
};

export default page;
