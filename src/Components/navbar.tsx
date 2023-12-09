"use client";

import React from "react";
import { LuMailPlus, LuMenu } from "react-icons/lu";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function navbar({ setIsOpen }: Props) {
  const [currentSearch, setCurrentSearch] = useState("home");
  const projectsArray = ["Daily Sudoku", "Fretboard Quiz", "Blackjack"];

  const homeUnderlined = (page: string) => {
    if (page === currentSearch) {
      return "mr-4 border-b-2 border-[#FFA500]";
    }
    return "mr-4";
  };

  return (
    <header className="h-[4.7rem]">
      <div className="flex justify-between items-center mx-auto p-4 text-xl fixed w-full z-20 top-0 start-0 bg-white border-b border-[#000000] border-opacity-20 h-[4.7rem]">
        <nav className="hidden md:block items-center ml-4">
          <button className="mr-8 ml-12">Logo</button>
          <button className={homeUnderlined("home")}>Home</button>
          <Menu>
            <Menu.Button className={homeUnderlined("projects")}>
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
              <Menu.Items className="absolute top-[3.6rem] left-[14rem] rounded-[.6rem] px-[2rem] py-[.6rem] space-y-[.6rem] shadow-md bg-[#EBEAED] opacity-90">
                {projectsArray.map((project) => (
                  <Menu.Item as="div" key={project}>
                    {project}
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
                      <Menu.Items className="absolute rounded-[.6rem] px-[1rem] py-[.6rem] space-y-[.6rem] shadow-md bg-[#EBEAED] sm:top-[2.5rem] sm:left-[8.45rem] left-0 top-[5.6rem] opacity-90">
                        {projectsArray.map((project) => (
                          <Menu.Item
                            as="div"
                            key={project}
                            className="whitespace-nowrap"
                          >
                            {project}
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
            <button className="flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white rounded h-[2.2rem] w-[2.2rem]" onClick={() => setIsOpen(true)}>
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
