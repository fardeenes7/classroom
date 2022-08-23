/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const menuList = [
  {
    title: "General",
    icon: <BiHomeAlt className="h-full w-full" />,
    path: "#general",
    active: true,
  },
  {
    title: "Account",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    path: "#account",
    active: false,
  },

  {
    title: "Logout",
    icon: <RiLogoutCircleRLine className="h-full w-full" />,
    path: "#logout",
    active: false,
  },
];
export default function DashHome({ logoutModal }) {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(menuList[0]);
  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate(menu.path);
  };
  return (
    <div className=" grid w-full gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <div className="sticky top-24 hidden pl-4 lg:block">
          <h1 className="sticky pt-8 pb-4 text-4xl font-bold text-gray-700 dark:text-gray-200">
            Welcome,
            <span className="text-xl">
              {" "}
              <br />
              Fardeen Ehsan
            </span>
          </h1>
          {menuList.map((menu, index) => (
            <button
              key={index}
              onClick={(e) => buttonClickHandler(menu, index)}
              className={`${
                currentButton === menu
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              } flex h-10 w-full items-center justify-start rounded-lg p-2  pl-4 font-bold hover:bg-blue-100 dark:hover:text-black`}
            >
              <span className={`mr-2`}>{menu.icon}</span>{" "}
              <span className="text-md ml-2">{menu.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-2 mb-8 lg:col-span-3 lg:mb-0 lg:mt-12">
        <div
          id="general"
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
            Post to a class
          </h2>
          <form action="">
            <div>
              <textarea
                type="text"
                name="title"
                id="title"
                className="focus: h-32 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring"
                placeholder="What's the update?"
              />
            </div>
          </form>
        </div>
        <div
          id="general"
          className="mb-4 h-64 w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          General
        </div>
        <div
          id="general"
          className="mb-4 h-64 w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          General
        </div>
        <div
          id="general"
          className="mb-4 h-64 w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          General
        </div>
      </div>
    </div>
  );
}
