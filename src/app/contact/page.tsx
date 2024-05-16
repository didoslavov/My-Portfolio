import React from "react";
import Contact from "./(components)/contact";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h2 className="mt-10 text-4xl text-raisin-black dark:text-silver">
        Send me an email and I&apos;ll reach out to you
      </h2>
      <Contact />
    </div>
  );
};

export default page;
