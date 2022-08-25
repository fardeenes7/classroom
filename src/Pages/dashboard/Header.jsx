/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

//React Library
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { GiRuleBook } from "react-icons/gi";
import { IoLogOutOutline, IoClose } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsListNested, BsList } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { GrMenu } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";

//Headless UI
import { Menu, Dialog, Transition, Popover } from "@headlessui/react";
import PopupMenu from "./Menu/PopupMenu.jsx";

const headerMenu = [
  {
    title: "Home",
    icon: <GrMenu />,
    link: "/dash",
  },
  {
    title: "Classes",
    icon: <SiGoogleclassroom />,
    link: "/dash/classes",
  },
  {
    title: "Resources",
    icon: <GiRuleBook />,
    link: "/dash/resources",
  },
  {
    title: "Settings",
    icon: <IoMdSettings />,
    link: "/dash/settings",
  },
];

export default function Header({ page, logoutModal }) {
  function toLower() {
    if (page === undefined) {
      return "Home";
    } else {
      return page[0].toUpperCase() + page.slice(1);
    }
  }
  const navigate = useNavigate();

  //Mobile Main Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function openMobileMenu() {
    console.log("mobilemenuOpen");
    setIsMobileMenuOpen(true);
  }

  return (
    <div
      className={`fixed top-0 z-50 w-full items-center bg-white/50 p-4 shadow-xl backdrop-blur-sm`}
    >
      <div className="flex max-w-7xl items-center justify-between lg:mx-auto lg:justify-between">
        <div className="flex items-center">
          <button
            onClick={() => openMobileMenu()}
            className="mr-4 block h-8 w-8 lg:hidden"
          >
            <BsList className="h-full w-full" />
          </button>

          <button
            onClick={() => navigate("/dash")}
            className={`flex w-full flex-col-reverse
          items-center justify-center gap-4 text-lg font-bold text-gray-700 xl:text-xl`}
          >
            <div className={`flex items-center`}>
              <GiRuleBook className={`mr-3 h-8 w-8`} />
              <span className={`text-2xl font-bold`}>Classroom</span>
            </div>
          </button>
        </div>
        <div className={`hidden items-center justify-center lg:flex`}>
          {headerMenu.map((item) => (
            <div
              key={item.title}
              className={` mr-8 flex items-center`}
              onClick={(e) => navigate(item.link)}
            >
              <button
                href={item.link}
                className={`${
                  item.title === toLower() ? "text-black" : "text-gray-500"
                } font-bold `}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <Menu as="div" className="relative m-0 inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-primary hover:bg-opacity-70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img
                src="https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg?ver=6"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden lg:block">Fardeen Ehsan</span>
              <BsChevronDown
                className=" -mr-1 h-5 w-5 text-blue-200 hover:text-blue-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <SiGoogleclassroom
                        className={`${
                          active ? "text-white" : "text-blue-500"
                        } mr-2 h-5 w-5`}
                        aria-hidden="true"
                      />
                      My Classes
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <IoMdSettings
                        className={`${
                          active ? "text-white" : "text-blue-500"
                        } mr-2 h-5 w-5`}
                        aria-hidden="true"
                      />
                      Settings
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item onClick={(e) => logoutModal()}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <IoLogOutOutline
                        className={`${
                          active ? "text-white" : "text-blue-500"
                        } mr-2 h-5 w-5`}
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <PopupMenu
        headerMenu={headerMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        openMobileMenu={openMobileMenu}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}
