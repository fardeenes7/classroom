/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

const classList = [
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdx-csi-115",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdy-csi-115",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdz-csi-115",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcda-csi-115",
  },
];
export default function ChildClass({}) {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(classList[0]);
  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate("/dash/classes/" + menu.slug);
  };
  return (
    <div className=" grid w-full grid-cols-4 gap-4">
      <div>
        <div className="sticky top-24  pl-4">
          <h1 className="sticky pt-8 pb-4 text-4xl font-bold text-gray-700 dark:text-gray-200">
            ChildClass
          </h1>
          {classList.map((menu, index) => (
            <button
              onClick={(e) => buttonClickHandler(menu, index)}
              className={`${
                currentButton === menu
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              } flex h-10 w-full items-center  rounded-lg p-2  pl-4 font-bold hover:bg-blue-100 dark:hover:text-black`}
            >
              <span className=" truncate text-xs hover:text-ellipsis">
                {menu.code}: {menu.title}
              </span>
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
