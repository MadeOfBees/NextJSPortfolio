"use client";
import { useState } from "react";

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
        "Lorem ipsum dolor sit amet consectetur. Porta at lectus leo eget condimentum dui aliquam. Amet nulla.",
      images: ["img1", "img2", "img3", "img4", "img5"],
    },
    {
      name: "Back-end",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta at lectus leo eget condimentum dui aliquam. Amet nulla.",
      images: ["img6", "img7", "img8", "img9", "img10"],
    },
    {
      name: "Game Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta at lectus leo eget condimentum dui aliquam. Amet nulla.",
      images: ["img11", "img12", "img13", "img14", "img15"],
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
        className="flex justify-center gap-[8rem] mt-[6rem] max-md:flex-wrap"
        key="GridDivOfTechStack"
      >
        {currentStack.images.map((img) => (
          <div key={img}>{img}</div>
        ))}
      </div>
    </div>
  );
}
