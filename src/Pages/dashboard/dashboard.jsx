import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import { GiRuleBook } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import Classes from "./Classes.jsx";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Settings from "./Settings.jsx";

const menull = ["Dashboard", "Classes", "Settings", "Logout"];

export default function Dashboard() {
  const page = useParams().page;
  const PageTitle = page
    ? page[0].toUpperCase() + page.substring(1)
    : "Dashboard";
  console.log(menull.indexOf(PageTitle));
  return (
    <div className="h-full min-h-screen  w-screen bg-gradient-to-tl from-blue-200 via-blue-100 to-fuchsia-200 font-poppins">
      <div className="relative flex h-full min-h-screen w-full ">
        <Sidebar activeIndex={menull.indexOf(PageTitle)} />
        <div id="body" className="max-h-screen w-full overflow-hidden pb-12">
          <Header title={page ? PageTitle : "Dashboard"} />
          <div className="h-full w-full overflow-auto rounded-tl-2xl bg-white/50 p-6 shadow-xl backdrop-blur-sm">
            {page === "classes" && <Classes />}
            {page === "settings" && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
}
