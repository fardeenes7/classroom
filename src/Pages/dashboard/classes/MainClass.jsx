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
    cover:
      "https://media.istockphoto.com/vectors/laptop-with-code-on-screen-hanging-over-icons-programming-app-web-vector-id1205513619?k=20&m=1205513619&s=612x612&w=0&h=Lrc3Y64zEBalBFv-yHCZiYFoYv7hW_FD8bZ-5A1i558=",
  },
  {
    title: "Computer and Programming Concept Sessional",
    code: "CSI 116",
    slug: "abcdy-csi-115",
    cover:
      "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdz-csi-115",
    cover:
      "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcda-csi-115",
    cover:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdy-csi-115",
    cover:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcdz-csi-115",
    cover:
      "https://www.itprotoday.com/sites/itprotoday.com/files/programming.jpg",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    slug: "abcda-csi-115",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ComputerProgrammer.jpg/675px-ComputerProgrammer.jpg",
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
        <div className=" sticky top-24 grid grid-cols-1 gap-4 pl-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <h1 className="sticky col-span-1 pt-8 pb-4 text-4xl font-bold text-gray-700 dark:text-gray-200 md:col-span-2 lg:col-span-3 xl:col-span-4">
            My Classes
          </h1>
          {classList.map((menu, index) => (
            <div className="flex h-full">
              <button
                onClick={(e) => buttonClickHandler(menu, index)}
                className={`flex flex-col items-center justify-start overflow-hidden rounded-xl border border-gray-300 bg-white font-bold text-gray-600 transition-all duration-500
              hover:-translate-y-2 hover:bg-slate-100 dark:hover:text-black`}
              >
                <div className="max-h-36 overflow-hidden">
                  <img className="object-cover " src={menu.cover} alt="" />
                </div>
                <div className="m-4 text-left">
                  <span className="rounded-lg bg-blue-200 px-2 py-1 font-mono text-xs">
                    {menu.code}
                  </span>
                  <p className="mt-2 text-sm font-bold ">{menu.title}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
