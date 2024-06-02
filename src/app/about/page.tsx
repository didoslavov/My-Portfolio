import dynamic from "next/dynamic";

const About = dynamic(() => import("./(components)/about"));

export const metadata = {
  title: "Portfolio | About",
  description: "About Dido Slavov",
};

const page = () => {
  return <About />;
};

export default page;
