import { useState } from "react";
import { GiRuleBook } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
const menuList = [
  {
    title: "Dashboard",
    icon: <BiHomeAlt className="h-full w-full" />,
    path: "/dashboard",
    active: true,
  },
  {
    title: "Classes",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    path: "/dashboard/classes",
    active: false,
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp className="h-full w-full" />,
    path: "/dashboard/settings",
    active: false,
  },
  {
    title: "Logout",
    icon: <RiLogoutCircleRLine className="h-full w-full" />,
    path: "/dashbaord/logout",
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
      className={`${sideBarOpen ? "w-[25rem] py-4" : "w-20 px-2 py-2"}
      ${theme.text} mt-20 flex flex-col items-center pt-6 `}
    >
      <span
        className={`${
          sideBarOpen ? "flex" : "flex flex-col-reverse justify-center gap-4"
        } font-boldxl:text-xl w-full items-center justify-evenly text-lg font-bold`}
      >
        <div className="flex items-center">{sideBarOpen && "Classroom"}</div>
        <button
          onClick={(e) =>
            sideBarOpen ? setSideBarOpen(false) : setSideBarOpen(true)
          }
          className=""
        >
          <GrMenu className="h-6 w-6 font-bold" />
        </button>
      </span>
      <div
        className={`${
          sideBarOpen ? "w-4/5" : "w-full"
        } mt-8 flex flex-col items-center justify-center gap-3`}
      >
        {menuList.map((menu) => (
          <button
            className={`${
              sideBarOpen ? "justify-start pl-4 text-sm" : "justify-center"
            }
                ${menu == currentButton ? theme.currentButton : theme.button}
                
                 flex h-12 w-full items-center rounded-xl font-bold`}
            onClick={(e) => {
              buttonClickHandler(menu);
            }}
          >
            <span className={`${sideBarOpen ? "mr-4 h-6 w-6" : "h-4 w-4"}`}>
              {menu.icon}
            </span>
            {sideBarOpen && menu.title}
          </button>
        ))}
      </div>
    </div>
  );
}
