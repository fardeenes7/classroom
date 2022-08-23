/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

//React LIbraries
import React from "react";
import { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Headless UI
import { Dialog, Transition } from "@headlessui/react";

//JSX Files
import Classes from "./classes/Classes.jsx";
import RightSidebar from "./RightSidebar.jsx";
import BottomBar from "./BottomBar.jsx";
import Header from "./Header.jsx";
import Settings from "./Settings.jsx";
import DashHome from "./DashHome.jsx";

const menull = ["Dashboard", "Classes", "Settings", "Logout"];

export default function Dashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const page = useParams().page;
  const PageTitle = page
    ? page[0].toUpperCase() + page.substring(1)
    : "Dashboard";

  //Logout related functions
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  function closeLogoutModal() {
    setIsLogoutOpen(false);
  }

  function openLogoutModal() {
    setIsLogoutOpen(true);
  }
  function logout() {
    setIsLogoutOpen(false);
  }
  return (
    <div
      className={`${
        darkMode ? "dark bg-slate-800" : "bg-[#F7F7F7]"
      } max-w-screen min-h-screen font-poppins`}
    >
      <Header darkMode={darkMode} page={page} logoutModal={openLogoutModal} />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-5 lg:grid-cols-7 ">
        <div
          id="body"
          className={`
          ${
            page === "classes" ? "col-span-7" : "col-span-5"
          } bg-bl mt-24 w-full px-4 pb-12 lg:mx-0`}
        >
          {page === undefined && (
            <DashHome darkMode={darkMode} logoutModal={openLogoutModal} />
          )}
          {page === "classes" && <Classes darkMode={darkMode} />}
          {page === "settings" && <Settings darkMode={darkMode} />}
        </div>

        {page !== "classes" && (
          <div className="col-span-2">
            <RightSidebar darkMode={darkMode} />
          </div>
        )}
      </div>
      <BottomBar activeIndex={menull.indexOf(PageTitle)} darkMode={darkMode} />
      <Transition appear show={isLogoutOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLogoutModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mb-4 text-lg font-medium leading-6 text-gray-900"
                  >
                    Logging you out...
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to logout?
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeLogoutModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
