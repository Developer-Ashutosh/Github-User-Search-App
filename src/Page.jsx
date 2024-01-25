import React, { useState } from "react";
import Header from "./components/Header/header.jsx";
import SearchBar from "./components/SearchBar/searchBar.jsx";
import Main from "./main.jsx";

const App = () => {
  const [searchValue, setSearchValue] = useState("octocat");
  const getUserName = (data) => {
    setSearchValue(data);
  };

  return (
    <>
      <Header />
      <SearchBar sendUserName={getUserName} />
      <Main userName={searchValue} />
    </>
  );
};

export default App;
