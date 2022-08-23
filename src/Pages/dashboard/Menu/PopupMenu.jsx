import { Fragment, useEffect, useRef, useState } from "react";

import { Menu, Dialog, Transition, Popover } from "@headlessui/react";

import { IoLogOutOutline, IoClose } from "react-icons/io5";

export default function PopupMenu({
  headerMenu,
  isMobileMenuOpen,
  openMobileMenu,
  setIsMobileMenuOpen,
}) {
  //Mobile Main Menu

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }
  return (
    <Transition appear show={isMobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed top-0 left-0 z-50 m-0 h-screen w-screen font-poppins"
        onClose={closeMobileMenu}
      >
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

        <div className="fixed inset-0 overflow-hidden">
          <div className="min-w-screen flex min-h-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 -translate-x-16"
              enterTo="opacity-100 scale-100 teanslate-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-0"
              leaveTo="opacity-0 scale-95 -translate-x-16"
            >
              <Dialog.Panel className="h-[85vh] w-[85vw] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-start text-lg font-medium leading-6 text-gray-900"
                >
                  <button
                    className="rounded-lg bg-blue-200 p-4 text-right hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => closeMobileMenu()}
                  >
                    <IoClose />
                  </button>
                  <span className="ml-8 text-2xl font-bold">Classroom</span>
                </Dialog.Title>
                <div className="mt-12">
                  <div className="mx-6 flex flex-col items-start justify-between gap-4">
                    {headerMenu.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-start "
                      >
                        <button
                          className="rounded-md p-2 text-right text-blue-500 focus:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 active:bg-blue-200"
                          onClick={() => closeMobileMenu()}
                        >
                          {item.icon}
                        </button>
                        <span className="ml-4 text-xl font-bold text-gray-600">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
