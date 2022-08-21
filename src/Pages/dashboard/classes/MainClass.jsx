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
    title: "Computer and Programming Concept Sessional",
    code: "CSI 116",
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
export default function MainClass({}) {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(classList[0]);
  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate("/dash/classes/" + menu.slug);
  };
  return (
    <div className="w-full">
      <div>
        <div className=" sticky top-24 grid w-full grid-cols-1 gap-4 pl-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <h1 className="sticky col-span-1 pt-8 pb-4 text-4xl font-bold text-gray-700 dark:text-gray-200 md:col-span-2 lg:col-span-3 xl:col-span-4">
            Classes
          </h1>
          {classList.map((menu, index) => (
            <button
              onClick={(e) => buttonClickHandler(menu, index)}
              className={`flex w-full flex-col items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-8 font-bold text-gray-600 hover:bg-slate-100 dark:hover:text-black`}
            >
              <div className="mb-8 h-20 w-20">
                <img
                  src="https://i.pinimg.com/564x/1c/22/43/1c22433b8d3aec799fd8187ca3030193.jpg"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-md mb-2 hover:text-ellipsis">{menu.code}</p>
                <p className="text-sm">{menu.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
