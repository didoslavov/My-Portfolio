import GuestBook from "./(components)/guest-book";
import { getMessages } from "@/lib/actions/hasura-messages";

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
