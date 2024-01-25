import React, { useEffect, useState } from "react";
import Statistic from "./components/Statistic/statistic.jsx";
import Link from "./components/Link/link.jsx";

const Main = ({ userName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error(
          `Error fetching data:\n #${error.name}: ${error.message}`
        );
      }
    };

    fetchData();
  }, [userName]);

  return (
    <main className=" bg-secondary dark:bg-darkSecondary rounded-xl flex items-start justify-center gap-5 shadow-custom border-custom p-8 font-spacemono max-md:px-3 relative max-sm:w-full max-sm:px-2">
      <div className="h-[7rem] w-[7rem] overflow-hidden max-md:hidden">
        <img
          src={data.avatar_url}
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      <div className="w-4/5 flex flex-col gap-5 max-[900px]:w-[90%]">
        <div className="flex items-center justify-between gap-6 w-fit max-[550px]:w-full max-[550px]:justify-center max-[550px]:flex-col">
          <div className="h-[7rem] w-[7rem] overflow-hidden md:hidden">
            <img
              src={data.avatar_url}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="max-[550px]:text-center">
            <div>
              <h2 className="text-secondary dark:text-darkSecondary font-spacemono-bold text-3xl">
                {data.name}
              </h2>
              <a
                href={data.html_url}
                target="_blank"
                className="w-fit px-1 text-blue text-md outline-none outline-[1.5px] rounded-sm lg:focus:outline-blue"
              >
                @{data.login}
              </a>
            </div>
            <span className="text-joined dark:text-darkJoined text-md">
              Joined
              <span> {new Date(data.created_at).getDate()} </span>
              <span>
                {
                  [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ][new Date(data.created_at).getMonth()]
                }
              </span>
              <span> {new Date(data.created_at).getFullYear()}</span>.
            </span>
          </div>
        </div>

        <div>
          <p className="text-ternary dark:text-darkTernary text-[1.05rem] leading-sung tracking-tight max-[550px]:text-center">
            {data.bio || "This profile has no bio."}
          </p>
        </div>

        <ul className=" list-none bg-primary dark:bg-darkPrimary w-full rounded-lg shadow-custom flex items-center justify-between flex-wrap gap-4 py-4 px-8 max-[450px]:justify-center max-[450px]:gap-8">
          <Statistic title={"repos"} value={data.public_repos} />
          <Statistic title={"followers"} value={data.followers} />
          <Statistic title={"following"} value={data.following} />
        </ul>

        <ul className="flex flex-wrap gap-x-8 gap-y-2 overflow-scroll">
          <Link type={"location"} value={data.location} />
          <Link type={"twitter"} value={data.twitter_username} />
          <Link type={"website"} value={data.blog} link={true} />
          <Link type={"company"} value={data.company} />
        </ul>
      </div>
    </main>
  );
};

export default Main;
