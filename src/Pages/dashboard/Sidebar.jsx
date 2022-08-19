import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiTwotoneCalendar } from "react-icons/ai";
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
export default function Sidebar({ activeIndex, theme }) {
  const navigate = useNavigate();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentButton, setCurrentButton] = useState(menuList[activeIndex]);
  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate(menu.path);
  };
  return (
    <div
      id="sidebar"
      className={`hidden w-[30rem] py-4 lg:block
      ${theme.text} mt-16 flex flex-col items-center `}
    >
      <div
        className={`mt-4 flex w-4/5 flex-col items-center justify-center gap-3`}
      >
        {menuList.map((menu) => (
          <button
            className={`${
              sideBarOpen ? "justify-start pl-4 text-sm" : "justify-center"
            }
                ${menu === currentButton ? theme.currentButton : theme.button}
                
                 flex h-12 w-full items-center rounded-xl font-bold`}
            onClick={(e) => {
              buttonClickHandler(menu);
            }}
          >
            <span className={`mr-4 h-6 w-6`}>{menu.icon}</span>
            {sideBarOpen && menu.title}
          </button>
        ))}
      </div>
    </div>
  );
}
