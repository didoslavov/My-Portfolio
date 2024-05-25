import GuestBook from "./(components)/guest-book";
import { getMessages } from "@/lib/actions/hasura-messages";

const page = async () => {
  const { data, errors } = await getMessages();

  if (errors) {
    console.error(errors);
  }

  return <GuestBook data={data} />;
};

export default page;
