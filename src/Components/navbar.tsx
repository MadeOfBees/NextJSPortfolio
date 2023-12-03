"use client";
import React from "react";
import { LuMailPlus } from "react-icons/lu";
import { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function NavBar() {
  const [currentSearch, setCurrentSearch] = useState("Home");
  const navArray = ["Home", "About", "Projects"];
  const projectsArray = ["Daily Sudoku", "Fretboard Quiz", "Blackjack"];
  
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const navClasser = (num: number) => {
    if (navArray[num] === currentSearch) {
      return "mr-4 border-b-2 border-[#FFA500]";
    }
    return "mr-4";
  };

  const checkMobile = () => {
    if (innerWidth > 525) {
      return (
        <div className="items-center space-x-6 rtl:space-x-reverse">
          <button className="flex items-center justify-center text-normal bg-[#313445] hover:bg-[#42465d] text-white px-3 rounded h-[2.2rem] w-[11.5rem]">
            <LuMailPlus className="mr-2" />
            Work with me
          </button>
        </div>
      );
    }
    return (
      <div className="absolute right-[1rem]">
        <button className="flex items-center justify-center text-white bg-[#313445] hover:bg-[#42465d] rounded h-[2.2rem] w-[2.2rem]">
          <LuMailPlus />
        </button>
      </div>
    );
  };

  return (
    <header className="flex justify-between items-center mx-auto p-4 ml-4 mr-12 bg-white h-[4.7rem]">
      <nav className="flex items-center text-xl">
        <button className="mr-8">Logo</button>
        <button className={navClasser(0)}>Home</button>
        <button className={navClasser(1)}>About</button>
        <Menu>
          <Menu.Button className={navClasser(2)}>Projects</Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-[15.4rem] top-[3.6rem] w-[9rem] bg-white shadow focus:outline-none border border-[#313445] border-opacity-20">
              {projectsArray.map((project) => (
                <Menu.Item as="div" key={project}>
                  {project}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
      {checkMobile()}
    </header>
  );
}
