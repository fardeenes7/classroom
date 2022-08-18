import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

import Classes from "./Classes.jsx";
import Sidebar from "./Sidebar.jsx";
import RightSidebar from "./RightSidebar.jsx";

import Header from "./Header.jsx";
import Settings from "./Settings.jsx";

const menull = ["Dashboard", "Classes", "Settings", "Logout"];

const topMenu = [
  {
    title: "Profile",
    path: "/dashboard/profile",
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
  },
  {
    title: "Logout",
    path: "/dashboard/logout",
  },
];

const theme = [
  {
    name: "Light",
    bgcolor: "bg-slate-200",
    text: "text-black",
    button:
      "hover:bg-slate-600 hover:text-white active:bg-slate-700 text-black",
    currentButton:
      "bg-slate-600 hover:bg-slate-600 active:bg-slate-700 text-white",
    font: "font-poppins",
    blurColor: "bg-white/50",
    card: "bg-white/50 w-full overflow-auto rounded-2xl p-6 shadow-xl backdrop-blur-sm mb-4",
  },
  {
    name: "Dark",
    bgcolor: "bg-gray-700",
    text: "text-white",
    button: "hover:bg-slate-600 active:bg-[#F76C6C] text-white",
    currentButton:
      "bg-[#F76C6C] hover:bg-[#F76C6C] active:bg-[#F76C6C] text-white",

    font: "font-poppins",
    blurColor: "bg-slate-400/30",
    card: "bg-slate-400/30 w-full overflow-auto rounded-2xl p-6 shadow-xl backdrop-blur-sm mb-4",
  },
];

export default function Dashboard() {
  const [topMenuOpen, setTopMenuOpen] = useState(false);

  const [colorTheme, setColorTheme] = useState(theme[1]);
  const page = useParams().page;
  const PageTitle = page
    ? page[0].toUpperCase() + page.substring(1)
    : "Dashboard";
  console.log(menull.indexOf(PageTitle));
  return (
    <div
      className={`${colorTheme.bgcolor} ${colorTheme.font} ${colorTheme.text}  min-h-screen w-screen`}
    >
      <Header
        theme={colorTheme}
        setTopMenuOpen={setTopMenuOpen}
        topMenuOpen={topMenuOpen}
      />
      <div className="relative mx-auto flex w-full max-w-7xl overflow-auto">
        <Sidebar activeIndex={menull.indexOf(PageTitle)} theme={colorTheme} />
        <div id="body" className="mt-24 w-full overflow-hidden pb-12">
          {page === "classes" && <Classes theme={colorTheme} />}
          {page === "settings" && (
            <Settings
              themes={theme}
              colorTheme={colorTheme}
              setTheme={setColorTheme}
            />
          )}
        </div>
        <div
          id="dropdown"
          class={`${
            topMenuOpen ? "block" : "hidden"
          } w-50 absolute top-[4.5em] right-0 z-50 w-44 divide-y divide-gray-100 rounded-xl bg-white shadow dark:bg-gray-700`}
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            {topMenu.map((menu) => (
              <li>
                <a
                  href={menu.path}
                  class="block rounded-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <RightSidebar colorTheme={colorTheme} />
      </div>
    </div>
  );
}
