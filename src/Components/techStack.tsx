"use client";
import { useState } from "react";

import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaLinux } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";

export default function TechStack() {
  type techStack = {
    name: string;
    description?: string;
    images: string[];
  };

  const techStacks: techStack[] = [
    {
      name: "Front-end",
      description:
        "With a focus on designing fast and responsive web apps, I use React, Next.js, Tailwind CSS, and TypeScript and more to create elegant and efficient user experiences that are both beautiful and functional.",
      images: ["NextJS", "React", "TailwindCSS", "Typescript", "Vite"],
    },
    {
      name: "Back-end",
      description:
        "Using tools like Node.js, MongoDB, and MySQL, I build robust back-end systems that power my full-stack web apps that focus on speed, scalability and efficiency to ensure a smooth user experience.",
      images: ["NodeJs", "MongoDB", "MySQL", "Linux", "Github"],
    },
    {
      name: "Game Development",
      description:
        "With engines ranging from ZDoom to Unreal Engine 3/4 and even some Unity, I've created and released several games on PC and Android with a focus on 3D graphics and gameplay.",
      images: ["Unreal", "Adobe", "Blender", "Unity", "Android"],
    },
  ];

  const [currentStack, setCurrentStack] = useState<techStack>(techStacks[0]);

  const stackUnderline = (stack: techStack) => {
    if (stack.name === currentStack.name) {
      return <div className="w-full h-[0.2rem] bg-white mt-2"></div>;
    }
    return <div className="w-full h-[0.2rem] mt-2"></div>;
  };

  const stackItalicizer = (stack: techStack) => {
    if (stack.name === currentStack.name) {
      return "text-2xl font-bold leading-8 italic";
    }
    return "text-2xl font-bold leading-8";
  };

  const makeIconComponent = (img: string) => {
    return {
      NextJS: SiNextdotjs,
      React: FaReact,
      TailwindCSS: SiTailwindcss,
      Typescript: SiTypescript,
      Vite: SiVite,
      NodeJs: FaNodeJs,
      MongoDB: SiMongodb,
      MySQL: GrMysql,
      Linux: FaLinux,
      Github: FaGithub,
      Unreal: SiUnrealengine,
      Adobe: SiAdobe,
      Blender: SiBlender,
      Unity: SiUnity,
      Android: FaAndroid,
    }[img];
  };

  const stackBlock = () => {
    return techStacks.map((stack) => (
      <div
        className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0"
        key={stack.name + "MainDiv"}
        onClick={() => setCurrentStack(stack)}
      >
        <div
          className="items-stretch flex flex-col pr-2 max-md:mt-10"
          key={stack.name + "FlexDiv"}
        >
          <div className={stackItalicizer(stack)} key={stack.name}>
            {stack.name}
          </div>
          {stackUnderline(stack)}
          <div className="leading-7 mt-5" key={stack.name + "Description"}>
            {stack.description}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div
        className="mt-12 max-md:max-w-full max-md:mt-10"
        key="MainDivOfTechStack"
      >
        <div
          className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
          key="FlexDivOfTechStack"
        >
          {stackBlock()}
        </div>
      </div>
      <div
        className="flex justify-center gap-[8rem] mt-[6rem] max-md:flex-wrap text-6xl"
        key="GridDivOfTechStack"
      >
        {currentStack.images.map((img) => {
          const IconComponent = makeIconComponent(img);
          return IconComponent ? <IconComponent key={img} title={img} /> : null;
        })}
      </div>
    </div>
  );
}
