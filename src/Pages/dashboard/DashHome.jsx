/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import { useState, Fragment } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector, HiCheck } from "react-icons/hi";

import Calendar from "./Widgets/Calendar";

const menuList = [
  {
    title: "General",
    icon: <BiHomeAlt className="h-full w-full" />,
    path: "#general",
    active: true,
  },
  {
    title: "Account",
    icon: <SiGoogleclassroom className="h-full w-full" />,
    path: "#account",
    active: false,
  },

  {
    title: "Logout",
    icon: <RiLogoutCircleRLine className="h-full w-full" />,
    path: "#logout",
    active: false,
  },
];

const classes = [
  { code: "", name: "Select a class..." },
  { code: "CSI 115", name: "Computer and Programming Concept" },
  { code: "CSI 115", name: "Computer and Programming Concept Sessional" },
  { code: "CSI 115", name: "Discrete Mathematics" },
  { code: "CSI 115", name: "Structured Programming Language" },
  { code: "CSI 115", name: "Structured Programming Language Sessional" },
  { code: "CSI 115", name: "Computer and Programming Concept" },
];
export default function DashHome() {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState(menuList[0]);
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  const buttonClickHandler = (menu) => {
    setCurrentButton(menu);
    navigate(menu.path);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7">
      <div className="col-span-5 grid w-full gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <div className="sticky top-24 hidden pl-4 md:block">
            <h1 className="sticky pt-8 pb-4 text-3xl font-bold text-gray-700 dark:text-gray-200">
              Dashboard
            </h1>
            {menuList.map((menu, index) => (
              <button
                key={index}
                onClick={(e) => buttonClickHandler(menu, index)}
                className={`${
                  currentButton === menu
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                } flex h-10 w-full items-center justify-start rounded-lg p-2  pl-4 font-bold hover:bg-blue-100 dark:hover:text-black`}
              >
                <span className={`mr-2`}>{menu.icon}</span>{" "}
                <span className="text-md ml-2">{menu.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2 mb-8 lg:col-span-3 lg:mb-0 lg:mt-12">
          <div
            id="general"
            className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-4"
          >
            <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
              Post to a class
            </h2>
            <form action="">
              <div>
                <textarea
                  type="text"
                  name="title"
                  id="title"
                  className="h-32 w-full rounded-lg border border-gray-300 p-2 font-mono text-sm focus:outline-none focus:ring"
                  placeholder="What's the update?"
                />
              </div>
              <Listbox value={selectedClass} onChange={setSelectedClass}>
                <div className="relative my-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md outline outline-gray-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                    <span className="block truncate">{selectedClass.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiSelector
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {classes.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-blue-100 text-slate-900"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.code + " - " + person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <div className="flex items-center justify-end">
                <button className="m-2 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600">
                  Post
                </button>
              </div>
            </form>
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
      <div className="col-span-2">
        <Calendar />
      </div>
    </div>
  );
}
