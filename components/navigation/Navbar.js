import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { HomeIcon, XIcon } from "@heroicons/react/outline";
import { MdOutlineAccountBalance } from "react-icons/md";
import {
  FaHandHoldingUsd,
  FaDatabase,
  FaDollarSign,
  FaOpencart,
} from "react-icons/fa";
import {
  BsFillPersonPlusFill,
  BsFillPeopleFill,
  BsFolder,
  BsFolderPlus,
} from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { ImRocket } from "react-icons/im";
import { GoDesktopDownload } from "react-icons/go";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, current: true, href: "/" },
  {
    name: "Árajánlatok",
    icon: FaHandHoldingUsd,
    current: false,
    children: [
      { name: "Összes ajánlat", href: "#", icon: FaDatabase },
      { name: "ÚJ ÁRAJÁNLAT", href: "#", icon: ImRocket },
      { name: "Termékek", href: "#", icon: BsFolder },
      { name: "Új Termék", href: "#", icon: BsFolderPlus },
      { name: "Ügyfelek", href: "#", icon: BsFillPeopleFill },
      { name: "Új Ügyfel", href: "#", icon: BsFillPersonPlusFill },
    ],
  },
  {
    name: "Kalkulátor",
    icon: MdOutlineAccountBalance,
    current: false,
    children: [
      { name: "Termékek", href: "/dinamic", icon: FaOpencart },
      { name: "Valuták", href: "/dinamic/valutak", icon: FaDollarSign },
      { name: "Letöltés", href: "/downloads", icon: GoDesktopDownload },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function sideNavHandler() {
    setOpen(!open);
  }

  return (
    <>
      <div>
        <header className=" h-36 bg-blue-500">
          <div className="h-14 flex px-16 items-center">
            <button
              onClick={sideNavHandler}
              className="mr-auto text-white text-2xl"
            >
              <HiMenu />
            </button>
            <Link href="/">
              <a className="text-white">EXA SM Online Ajánlat Készítő</a>
            </Link>
            <p className="ml-auto text-white">Felhasználónév</p>
          </div>
          <div className="border-b border-blue-400 mx-5"></div>
        </header>
        <div>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 overflow-hidden"
              onClose={setOpen}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-y-0 left-0  max-w-full flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="-translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="-translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="w-screen max-w-md">
                      <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              <div className="flex items-center flex-shrink-0 px-4">
                                <img
                                  className="h-8 w-auto"
                                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                  alt="Workflow"
                                />
                              </div>
                            </Dialog.Title>
                            <div className="ml-3 h-7 flex items-center">
                              <button
                                type="button"
                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 "
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                          {/* Replace with your content */}

                          <div className="mt-5 flex-grow flex flex-col">
                            <nav
                              className="flex-1 px-2 space-y-1 bg-white"
                              aria-label="Sidebar"
                            >
                              {navigation.map((item) =>
                                !item.children ? (
                                  <div key={item.name}>
                                    <a
                                      href="#"
                                      className={classNames(
                                        item.current
                                          ? "bg-blue-500 text-white"
                                          : "bg-white text-gray-600 hover:bg-blue-200 hover:text-gray-900",
                                        "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          item.current
                                            ? "text-white"
                                            : "text-gray-400 group-hover:text-gray-900",
                                          "mr-3 flex-shrink-0 h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  </div>
                                ) : (
                                  <Disclosure
                                    as="div"
                                    key={item.name}
                                    className="space-y-1"
                                  >
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button
                                          className={classNames(
                                            item.current
                                              ? "bg-blue-500 text-white"
                                              : "bg-white text-gray-600 hover:bg-blue-200 hover:text-gray-900",
                                            "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          )}
                                        >
                                          <item.icon
                                            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-600 group-hover:text-gray-900"
                                            aria-hidden="true"
                                          />
                                          <span className="flex-1">
                                            {item.name}
                                          </span>
                                          <svg
                                            className={classNames(
                                              open
                                                ? "text-gray-400 rotate-90"
                                                : "text-gray-300",
                                              "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-900 transition-colors ease-in-out duration-150"
                                            )}
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M6 6L14 10L6 14V6Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="space-y-1">
                                          {item.children.map((subItem) => (
                                            <Disclosure.Button
                                              key={subItem.name}
                                              as="a"
                                              href={subItem.href}
                                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-blue-200"
                                            >
                                              <subItem.icon
                                                className={classNames(
                                                  item.current
                                                    ? "text-white"
                                                    : "text-gray-600 group-hover:text-gray-900",
                                                  "mr-3 flex-shrink-0  text-base"
                                                )}
                                                aria-hidden="true"
                                              />
                                              {subItem.name}
                                            </Disclosure.Button>
                                          ))}
                                        </Disclosure.Panel>
                                      </>
                                    )}
                                  </Disclosure>
                                )
                              )}
                            </nav>
                          </div>

                          {/* /End replace */}
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </>
  );
};

export default Navbar;
