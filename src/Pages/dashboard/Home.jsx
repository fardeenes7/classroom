import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { GiRuleBook } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import DashTemplate from "./DashTemplate.jsx";

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
    path: "/profile",
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

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentButton, setCurrentButton] = useState(menuList[0]);
  return (
    <div className="h-full min-h-screen  w-screen bg-gradient-to-tl from-blue-200 via-blue-100 to-fuchsia-200 font-poppins">
      <div className="relative flex h-full min-h-screen w-full ">
        <div
          id="body"
          className="max-h-screen w-full overflow-hidden pr-4 pb-12"
        >
          <div className="flex w-full items-center justify-start gap-4 px-4 py-8">
            <button
              onClick={(e) =>
                sideBarOpen ? setSideBarOpen(false) : setSideBarOpen(true)
              }
            >
              <GrMenu className="h-6 w-6 font-bold" />
            </button>
            <h1 className="text-3xl font-bold">{currentButton.title}</h1>
            <span className="absolute right-8">Logout</span>
          </div>
          <div className=" h-full w-full overflow-auto rounded-xl bg-white/50 p-6 shadow-xl backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  );
}
