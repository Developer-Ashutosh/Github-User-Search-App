import React from "react";

const Not_Found = () => {
  return (
    <div className="flex flex-col gap-7">
      <img src="./icons/not_found.png" alt="not found image" />
      <p className="font-spacemono text-primary dark:text-darkPrimary text-xl text-center leading-6">
        Your search did not match any users.
      </p>
    </div>
  );
};

export default Not_Found;
