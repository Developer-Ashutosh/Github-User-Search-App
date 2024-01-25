import React, { useState } from "react";

const searchBar = ({ sendUserName }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      className=" bg-secondary dark:bg-darkSecondary text-ternary dark:text-darkTernary  pl-6 pr-2 py-1 h-[3.85rem] rounded-xl flex items-center justify-between gap-5 shadow-custom border border-transparent focus-within:border-blue max-md:h-14 max-[550px]:flex-col max-[550px]:h-[8rem] max-[550px]:justify-center max-[550px]:bg-transparent max-[550px]:dark:bg-transparent max-[550px]:shadow-transparent max-[550px]:focus-within:border-none max-[550px]:px-0"
      onSubmit={(e) => {
        e.preventDefault();
        sendUserName(inputValue.toString());
      }}
    >
      <div className="flex gap-3 items-center justify-between w-full bg-secondary dark:bg-darkSecondary max-[550px]:h-[3.5rem] max-[550px]:pl-3 max-[550px]:rounded-lg max-[550px]:shadow-custom max-[550px]:focus-within:border max-[550px]:border-transparent max-[550px]:focus-within:border-blue ">
        <img
          src="./icons/icon-search.svg"
          alt=""
          className="h-fit w-fit scale-90"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search GitHub Username..."
          className="h-full w-full bg-transparent border-0 outline-none text-lg caret-blue font-spacemono placeholder:text-md "
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
        />
      </div>
      <button className="px-5 h-4/5 rounded-lg bg-blue lg:dark:hover:bg-button-hover transition font-spacemono text-[1rem] tracking-wider text-darkTernary outline-none lg:focus:scale-[1.05] max-md:h-[95%] max-[550px]:h-10">
        Search
      </button>
    </form>
  );
};

export default searchBar;
