import GuestBook from "./(components)/guest-book";
import { getData } from "@/lib/actions/get-messages";

const page = async () => {
  const { data, errors } = await getData();

  if (errors) {
    console.error(errors);
  }

  return <GuestBook data={data} />;
};

export default page;
