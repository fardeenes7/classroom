import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";

import Classes from "./classes/Classes.jsx";
import Sidebar from "./Sidebar.jsx";
import RightSidebar from "./RightSidebar.jsx";
import BottomBar from "./BottomBar.jsx";

import Header from "./Header.jsx";
import Settings from "./Settings.jsx";
import DashHome from "./DashHome.jsx";

const menull = ["Dashboard", "Classes", "Settings", "Logout"];

const topMenu = [
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Settings",
    path: "/settings",
  },
  {
    title: "Logout",
    path: "/logout",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const page = useParams().page;
  const subpage = useParams().subpage;
  const PageTitle = page
    ? page[0].toUpperCase() + page.substring(1)
    : "Dashboard";
  const topMenuHandler = (link) => {
    navigate(link);
    setTopMenuOpen(!topMenuOpen);
  };
  return (
    <div
      className={`${
        darkMode ? "dark bg-slate-800" : "bg-[#F7F7F7]"
      } min-h-screen w-screen `}
    >
      <Header
        darkMode={darkMode}
        setTopMenuOpen={setTopMenuOpen}
        topMenuOpen={topMenuOpen}
      />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-7 ">
        <div
          id="body"
          className={`
          ${
            page === "classes" ? "col-span-7" : "col-span-5"
          } bg-bl mt-24 w-full px-4 pb-12 lg:mx-0`}
        >
          {page === "home" && <DashHome darkMode={darkMode} />}
          {page === "classes" && <Classes darkMode={darkMode} />}
          {page === "settings" && <Settings darkMode={darkMode} />}
        </div>
        <div
          id="dropdown"
          class={`${
            topMenuOpen ? "block" : "hidden"
          } w-50 absolute top-[4.5em] right-4 z-50 w-44 divide-y divide-gray-100 rounded-xl bg-white shadow dark:bg-gray-700`}
        >
          <div className="sticky">
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              {topMenu.map((menu) => (
                <li>
                  <div
                    onClick={() => topMenuHandler(menu.path)}
                    class="block cursor-pointer rounded-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {menu.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {page !== "classes" && (
          <div className="col-span-2">
            <RightSidebar darkMode={darkMode} />
          </div>
        )}
      </div>
      <BottomBar activeIndex={menull.indexOf(PageTitle)} darkMode={darkMode} />
    </div>
  );
}
