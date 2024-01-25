import React from "react";

const Statistic = ({ title, value }) => {
  return (
    <li className="flex flex-col items-center justify-center gap-1">
      <h3 className="text-md text-ternary dark:text-darkTernary capitalize">
        {title}
      </h3>
      <span className="text-2xl font-spacemono-bold text-secondary dark:text-darkSecondary">
        {value}
      </span>
    </li>
  );
};

export default Statistic;
