"use client";

import React from "react";
import { LuMailPlus, LuMenu } from "react-icons/lu";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  currentSearch: string;
};

export default function navbar({ setIsOpen, currentSearch }: Props) {
  const projectLinks: {
    [key: string]: string;
    TSTetris: string;
    SQLStore: string;
    ShutTheBox: string;
    ReactJack: string;
    Rouletteo: string;
    DailySudoku: string;
    thisPortfolio: string;
  } = {
    TSTetris: "/bees-portfolio/projects/TSTetris",
    SQLStore: "/bees-portfolio/projects/SQLStore",
    ShutTheBox: "/bees-portfolio/projects/ShutTheBox",
    ReactJack: "/bees-portfolio/projects/ReactJack",
    Rouletteo: "/bees-portfolio/projects/Rouletteo",
    DailySudoku: "/bees-portfolio/projects/DailySudoku",
    thisPortfolio: "/bees-portfolio/projects/thisPortfolio",
  };

  const underlineMainRoute = (page: string) => {
    if (page === "home" && currentSearch === "home") {
      return "mr-4 underline decoration-[#E9999C] decoration-thickness-[0.2rem] decoration-skip-ink decoration-thickness-[0.4rem]";
    } else if (page === "projects" && currentSearch[0] === "/") {
      return "mr-4 underline decoration-[#E9999C] decoration-thickness-[0.2rem] decoration-skip-ink decoration-thickness-[0.4rem]";
    } else {
      return "mr-4";
    }
  };

  const makeCurrentSearchOrange = (page: string) => {
    const subSearch = currentSearch.slice(10);
    if (subSearch === "") {
      return "whitespace-nowrap";
    } else if (subSearch === page) {
      return "whitespace-nowrap italic";
    } else {
      return "whitespace-nowrap";
    }
  };

  return (
    <header className="h-[4.7rem]">
      <div className="flex justify-between items-center mx-auto p-4 text-xl fixed w-full z-20 top-0 start-0 bg-white border-b border-[#000000] border-opacity-20 h-[4.7rem]">
        <nav className="hidden md:block items-center ml-4">
          <button
            className="mr-8 ml-12 bg-MadeOfBees bg-cover bg-center h-10 w-10 text-opacity-0 rounded-full"
            onClick={() => {
              window.location.href = "/bees-portfolio";
            }}
          >
            ⠀
          </button>
          <a className={underlineMainRoute("home")} href="/bees-portfolio">
            Home
          </a>
          <Menu>
            <Menu.Button className={underlineMainRoute("projects")}>
              Projects
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-[3.6rem] left-[14rem] rounded-[.6rem] px-[1rem] py-[.6rem] space-y-[.6rem] shadow-md bg-[#EBEAED] opacity-90 overflow-auto max-h-[50vh]">
                {Object.keys(projectLinks).map((project) => (
                  <Menu.Item
                    as="div"
                    key={project}
                    className={makeCurrentSearchOrange(project)}
                  >
                    <a href={projectLinks[project]}>{project}</a>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
        <div className="md:hidden ml-4">
          <Menu>
            <Menu.Button className="flex ring-2 ring-[#313445] rounded h-[2.2rem] w-[2.2rem] justify-center items-center">
              <LuMenu />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-[3.8rem] rounded-[.6rem] px-[1rem] py-[.6rem] space-y-[.6rem] shadow-md bg-[#EBEAED] opacity-90">
                <Menu.Item as="div" key="Home">
                  Home
                </Menu.Item>
                <Menu.Items as="div" key="Projects">
                  <Menu>
                    <Menu.Button className="focus:outline-none flex items-center">
                      Projects
                      <IoIosArrowDown className="ml-[.5rem] mt-[.3rem]" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute overflow-auto rounded-[.6rem] px-[1rem] py-[.6rem] space-y-[.6rem] shadow-md bg-[#EBEAED] top-[2.5rem] left-[8.45rem] opacity-90} max-h-[50vh]">
                        {Object.keys(projectLinks).map((project) => (
                          <Menu.Item
                            as="div"
                            key={project}
                            className={makeCurrentSearchOrange(project)}
                          >
                            <a href={projectLinks[project]}>{project}</a>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </Menu.Items>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="md:hidden">
          <button>Logo</button>
        </div>
        <div className="items-center space-x-6 rtl:space-x-revers flex md:order-2">
          <div className="items-center space-x-1 rtl:space-x-reverse md:hidden mr-4">
            <button
              className="flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white rounded h-[2.2rem] w-[2.2rem]"
              onClick={() => setIsOpen(true)}
            >
              <LuMailPlus />
            </button>
          </div>
          <div className="relative hidden md:block space-x-1 rtl:space-x-reverse">
            <button
              className="mr-12 flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white px-3 rounded h-[2.2rem] w-[11.5rem] text-[1.125rem]"
              onClick={() => setIsOpen(true)}
            >
              <LuMailPlus className="mr-2" />
              Work with me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
