import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./(components)/contact"));

export const metadata = {
  title: "Portfolio | Contact",
  description: "Contact Dido Slavov",
};

const page = () => {
  return <Contact />;
};

export default page;
