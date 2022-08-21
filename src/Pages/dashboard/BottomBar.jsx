import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiTwotoneCalendar } from "react-icons/ai";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuList = [
  {
    title: "Dashboard",
    icon: <BiHomeAlt className="h-full w-full" />,
    path: "/home",
    active: true,
  },
  {
    title: "Classes",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    path: "/classes",
    active: false,
  },
  {
    title: "Calendar",
    icon: <AiTwotoneCalendar className="h-full w-full" />,
    path: "/calendar",
    active: false,
  },

  {
    title: "Settings",
    icon: <IoSettingsSharp className="h-full w-full" />,
    path: "/settings",
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
    <div className={`fixed bottom-0 flex justify-evenly p-4 lg:hidden`}>
      {menuList.map((menu) => (
        <button
          onClick={() => buttonClickHandler(menu)}
          className={` h-14 w-14 rounded-lg py-2 px-4`}
        >
          {menu.icon}
        </button>
      ))}
    </div>
  );
}
