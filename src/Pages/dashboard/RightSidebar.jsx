/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";

const menuList = [
  {
    title: "Dashboard",
    icon: <BiHomeAlt className="h-full w-full" />,
    active: true,
    slug: "",
  },
  {
    title: "Classes",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    active: false,
    slug: "",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp className="h-full w-full" />,
    active: false,
    slug: "",
  },
  {
    title: "Logout",
    icon: <RiLogoutCircleRLine className="h-full w-full" />,
    active: false,
    slug: "",
  },
];

const calender = [
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    time: "11:59",
    date: "Dec 31st",
    task: "Assignment 1",
    path: "",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    time: "11:59",
    date: "Dec 31st",
    task: "Assignment 1",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    time: "11:59",
    date: "Dec 31st",
    task: "Assignment 1",
  },
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    time: "11:59",
    date: "Dec 31st",
    task: "Assignment 1",
  },
];

export default function RightSidebar({}) {
  const navigate = useNavigate();
  return (
    <div
      id="sidebar"
      className={`sticky top-24 mt-24 hidden w-full flex-col items-center p-2 pl-4 pt-4 lg:flex`}
    >
      <h2 className="mb-2 w-full pl-8 text-xl font-bold">Calender</h2>

      <div className="flex flex-col gap-2 overflow-visible">
        {calender.map((item) => (
          <div
            key={item.slug}
            className="mb-0 flex w-full cursor-pointer items-center justify-start overflow-hidden rounded-2xl border border-gray-300 bg-white py-2 px-2 transition-all duration-500 hover:translate-x-4 hover:bg-blue-100 dark:hover:bg-gray-800 xl:py-4"
            onClick={() => navigate("/dash/calendar/" + item.slug)}
          >
            <div className="mx-2 h-6 w-6 rounded-full border border-blue-500 xl:mx-4">
              <TiTickOutline className="h-full w-full text-blue-500" />
            </div>
            <div className=" pr-4">
              <p className="ml-2 text-sm font-bold">{item.task}</p>
              <span className="mt-1 ml-2 flex items-center overflow-hidden text-ellipsis text-xs text-gray-600">
                {item.code} || {item.title}
              </span>
              <span className="ml-2 text-xs font-bold text-gray-600">
                Due on {item.time}, {item.date}
              </span>
            </div>{" "}
          </div>
        ))}
      </div>
      <button
        onClick={(e) => navigate("/dash/calendar")}
        className={` mt-2 w-full rounded-lg bg-blue-500 py-2 text-center text-sm font-bold text-white hover:bg-blue-600`}
      >
        View All
      </button>
    </div>
  );
}
