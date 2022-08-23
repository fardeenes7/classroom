/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiTwotoneCalendar } from "react-icons/ai";
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
export default function Settings({ darkMode }) {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(menuList[0]);
  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate(menu.path);
  };
  return (
    <div className=" grid w-full grid-cols-4 gap-4">
      <div>
        <div className="sticky top-24  pl-4">
          <h1 className="sticky pt-8 pb-4 text-4xl font-bold text-gray-700 dark:text-gray-200">
            Settings
          </h1>
          {menuList.map((menu, index) => (
            <button
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
      <div className="col-span-3 mt-12">
        <div
          id="general"
          className="mb-4 h-64 w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          <h2 className="text-2xl font-bold">Personal</h2>
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
