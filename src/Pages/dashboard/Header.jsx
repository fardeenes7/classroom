import { GiRuleBook } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

export default function Header({ theme, topMenuOpen, setTopMenuOpen }) {
  return (
    <div
      className={`${theme.blurColor} fixed top-0 z-50 w-full items-center px-16 py-4 shadow-xl backdrop-blur-sm`}
    >
      <div className="flex max-w-7xl justify-between lg:mx-auto lg:justify-between">
        <div className="flex items-center">
          <span
            className={`flex w-full flex-col-reverse
          items-center justify-center gap-4 text-lg font-bold text-gray-700 xl:text-xl`}
          >
            <div className={`${theme.text} flex items-center`}>
              <GiRuleBook className={`mr-3 h-8 w-8`} />
              <span className={`text-2xl font-bold`}>Classroom</span>
            </div>
          </span>
        </div>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          type="button"
          className={`${theme.button} w-50 flex items-center gap-2 rounded-xl py-2 px-4 text-sm font-bold`}
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
