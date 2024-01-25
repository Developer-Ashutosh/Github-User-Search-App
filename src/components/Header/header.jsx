import React, { useState } from "react";

const Header = () => {
  document.documentElement.className =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  const [theme, setTheme] = useState(document.documentElement.className);

  return (
    <header className="w-full flex justify-between">
      <h1 className="font-spacemono-bold text-primary dark:text-darkPrimary lowercase text-[1.625rem] tracking-wide">
        devfinder
      </h1>
      <button
        className="font-spacemono text-ternary dark:text-darkTernary text-md tracking-widest flex uppercase items-center justify-center gap-3 cursor-pointer px-2 outline-1 outline-blue/60 dark:outline-blue/10"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          document.documentElement.className = localStorage.theme =
            theme === "dark" ? "light" : "dark";
        }}
      >
        {theme}
        <img
          src={`./icons/icon-${theme === "dark" ? "sun" : "moon"}.svg`}
          alt={`${theme === "dark" ? "sun" : "moon"} icon`}
          className={`${theme === "light" && "scale-[.8]"}`}
        />
      </button>
    </header>
  );
};

export default Header;
