import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
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

const calender = [
  {
    title: "Computer and Programming Concept",
    code: "CSI 115",
    time: "11:59",
    date: "Dec 31st",
    task: "Assignment 1",
    path: "/dashboard/classes",
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

export default function Sidebar({ colorTheme }) {
  const navigate = useNavigate();
  return (
    <div
      id="sidebar"
      className={`${colorTheme.card} mx-4 mt-24 flex w-[35rem] flex-col items-center p-4 `}
    >
      <h2 className="mb-2 text-xl font-bold">Calender</h2>
      <div className="flex flex-col gap-4 overflow-hidden">
        {calender.map((item) => (
          <div className="cursor-pointer" onClick={() => navigate(item.path)}>
            <div
              className={`${colorTheme.blurColor} mb-0 grid w-full overflow-auto rounded-2xl p-4 shadow-xl backdrop-blur-sm`}
            >
              <p className="ml-2 truncate text-lg font-bold">{item.task}</p>
              <span className="ml-2 text-sm">
                {item.code} || {item.title}
              </span>
              <span className="ml-2 text-sm font-bold">
                Due on {item.time}, {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
