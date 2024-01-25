import React from "react";

const Link = ({ type, value, link = false }) => {
  return (
    <li className="flex items-center justify-start gap-3 w-2/5 min-w-fit">
      <img
        src={`./icons/icon-${type}.svg`}
        alt=""
        className="dark:brightness-[350%]"
      />
      <a
        className={`text-lg text-ternary dark:text-darkTernary ${
          link && value !== "" ? " hover:text-blue dark:hover:text-blue" : ""
        } outline-none outline-[1.5px] rounded-sm focus:outline-blue px-1 transition`}
        href={link && value !== "" ? value : undefined}
        target="_blank"
      >
        {value || "Not Available!"}
      </a>
    </li>
  );
};

export default Link;
