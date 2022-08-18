import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GiRuleBook } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";


export default function DashTemplate() {
  return (
        <div
          id="sidebar"
          className={`${
            sideBarOpen ? "w-[20rem] py-4" : "w-20 px-2"
          } flex h-full flex-col items-center pt-10`}
        >
          <span className="flex items-center text-lg font-bold text-gray-700 xl:text-xl">
            <GiRuleBook
              className={`${sideBarOpen ? "mr-3 " : "mr-0"} h-8 w-8`}
            />
            {sideBarOpen && "Classroom"}
          </span>
          <div className="mt-8 flex w-4/5 flex-col items-center justify-center gap-3">
            {menuList.map((menu) => (
              <button
                className={`${sideBarOpen ? "text-sm" : ""}
                ${menu == currentButton ? "bg-white" : "text-gray-700"}
                 flex h-12 w-full items-center justify-start rounded-xl pl-4 font-bold text-gray-600 hover:bg-white hover:text-gray-700 active:bg-gray-100`}
                onClick={(e) => {
                  setCurrentButton(menu);
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
