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
      className={`hidden lg:block ${colorTheme.card} ml-4 mt-24 flex w-[35rem] flex-col items-center p-2 pt-4 `}
    >
      <h2 className="mb-2 text-xl font-bold">Calender</h2>
      <div className="flex flex-col gap-2 overflow-hidden">
        {calender.map((item) => (
          <div className="cursor-pointer" onClick={() => navigate(item.path)}>
            <div
              className={`${colorTheme.calender} mb-0 grid w-full overflow-auto border-b p-2 shadow-lg hover:rounded-2xl`}
            >
              <p className="text-md ml-2 truncate font-bold">{item.task}</p>
              <span className="my-1 ml-2 flex items-center text-xs">
                <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                {item.code} || {item.title}
              </span>
              <span className="ml-2 text-xs font-bold ">
                Due on {item.time}, {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={(e) => navigate("/calendar")}
        className={`${colorTheme.button} mt-2 w-full rounded-lg py-2`}
      >
        View All
      </button>
    </div>
  );
}
