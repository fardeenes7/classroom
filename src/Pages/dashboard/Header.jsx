import { GiRuleBook } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const headerMenu = [
  {
    title: "Home",
    link: "/dash",
  },
  {
    title: "Classes",
    link: "/dash/classes",
  },
  {
    title: "Resources",
    link: "/dash/resources",
  },
  {
    title: "Settings",
    link: "/dash/settings",
  },
];

export default function Header({ topMenuOpen, setTopMenuOpen }) {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 z-50 w-full items-center bg-white/50 px-16 py-4 shadow-xl backdrop-blur-sm`}
    >
      <div className="flex max-w-7xl items-center justify-between lg:mx-auto lg:justify-between">
        <div className="flex items-center">
          <span
            className={`flex w-full flex-col-reverse
          items-center justify-center gap-4 text-lg font-bold text-gray-700 xl:text-xl`}
          >
            <div className={`flex items-center`}>
              <GiRuleBook className={`mr-3 h-8 w-8`} />
              <span className={`text-2xl font-bold`}>Classroom</span>
            </div>
          </span>
        </div>
        <div>
          <div className={`flex items-center justify-center`}>
            {headerMenu.map((item, index) => (
              <div
                className={`mr-8 flex items-center`}
                onClick={(e) => navigate(item.link)}
              >
                <button href={item.link} className={`text-gray-700`}>
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          type="button"
          className={`w-50 flex items-center gap-2 rounded-xl py-2 px-4 text-sm font-bold`}
          onClick={(e) => {
            setTopMenuOpen(!topMenuOpen);
          }}
        >
          <img
            src="https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg?ver=6"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="hidden lg:block">Fardeen Ehsan</span>
          <IoIosArrowDown className="hidden h-6 w-6 font-bold lg:block" />
        </button>
      </div>
    </div>
  );
}
