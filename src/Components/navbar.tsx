import React from "react";
import { LuMailPlus, LuMenu } from "react-icons/lu";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function navbar() {
  const [currentSearch, setCurrentSearch] = useState("Home");
  const navArray = ["Home", "About", "Projects"];
  const projectsArray = ["Daily Sudoku", "Fretboard Quiz", "Blackjack"];

  const underlineMainRoute = (num: number) => {
    if (navArray[num] === currentSearch) {
      return "mr-4 border-b-2 border-[#FFA500]";
    }
    return "mr-4";
  };

  return (
    <header className="h-[4.7rem]">
      <div className="flex justify-between items-center mx-auto p-4 text-xl fixed w-full z-20 top-0 start-0 bg-white border-b border-[#000000] border-opacity-20 h-[4.7rem]">
        <nav className="hidden md:block items-center ml-4">
          <button className="mr-8 ml-12">Logo</button>
          <button className={underlineMainRoute(0)}>Home</button>
          <button className={underlineMainRoute(1)}>About</button>
          <Menu>
            <Menu.Button className={underlineMainRoute(2)}>
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
              <Menu.Items className="absolute top-[3.6rem] left-[18.2rem] w-[9rem] bg-white shadow focus:outline-none border border-[#313445] border-opacity-20">
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
            <Menu.Button className="flex ring-2 ring-[#000000] rounded h-[2.2rem] w-[2.2rem] justify-center items-center">
              <LuMenu />
            </Menu.Button>
            <Menu.Items className="absolute top-[3.6rem] w-[9rem] rounded-sm bg-white shadow focus:outline-none border border-[#313445] border-opacity-20">
              <Menu.Item as="div" key="Home">
                Home
              </Menu.Item>
              <Menu.Item as="div" key="About">
                About
              </Menu.Item>
              <Menu.Items as="div" key="Projects">
                <Menu>
                  <Menu.Button className="focus:outline-none">
                    Projects
                  </Menu.Button>
                  <Menu.Items className="">
                    {projectsArray.map((project) => (
                      <Menu.Item as="div" key={project}>
                        {project}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              </Menu.Items>
            </Menu.Items>
          </Menu>
        </div>
        <div className="md:hidden">
          <button>Logo</button>
        </div>
        <div className="items-center space-x-6 rtl:space-x-revers flex md:order-2">
          <div className="items-center space-x-1 rtl:space-x-reverse md:hidden mr-4">
            <button className="flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white rounded h-[2.2rem] w-[2.2rem]">
              <LuMailPlus />
            </button>
          </div>
          <div className="relative hidden md:block space-x-1 rtl:space-x-reverse">
            <button className="mr-12 flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white px-3 rounded h-[2.2rem] w-[11.5rem] text-[1.125rem]">
              <LuMailPlus className="mr-2" />
              Work with me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
