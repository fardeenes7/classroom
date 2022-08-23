/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/
import { Menu, Dialog, Transition, Popover } from "@headlessui/react";

import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiTwotoneCalendar } from "react-icons/ai";

import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const menuList = [
  {
    title: "Dashboard",
    icon: <BiHomeAlt className="h-full w-full" />,
    path: "/dash",
    active: true,
  },
  {
    title: "Classes",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    path: "/dash/classes",
    active: false,
  },
  {
    title: "Calendar",
    icon: <AiTwotoneCalendar className="h-full w-full" />,
    path: "/dash/calendar",
    active: false,
  },

  {
    title: "Settings",
    icon: <IoSettingsSharp className="h-full w-full" />,
    path: "/dash/settings",
    active: false,
  },

  {
    title: "Logout",
    icon: <RiLogoutCircleRLine className="h-full w-full" />,
    path: "/logout",
    active: false,
  },
];

export default function BottomBar({ activeIndex }) {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(menuList[activeIndex]);

  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate(menu.path);
  };
  return (
    <div
      className={`shadow-t-lg fixed bottom-0 flex w-full justify-evenly rounded-t-3xl bg-gray-300 py-2 px-4 lg:hidden`}
    >
      {menuList.map((menu) => (
        <button
          key={menu.title}
          onClick={() => buttonClickHandler(menu)}
          className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg py-2 px-4`}
        >
          {menu.icon}
        </button>
      ))}

      <Menu as="div" className="relative inline-block text-left">
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuList.map((menu) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    key={menu.title}
                    onClick={() => buttonClickHandler(menu)}
                    className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg py-2 px-4`}
                  >
                    {menu.icon}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
