"use client";
import { useState } from "react";

export default function techStack() {
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

  const stackBlock = () => {
    return techStacks.map((stack) => (
      <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0" key={stack.name + "MAINDIV"}>
        <div className="items-stretch flex flex-col pr-2 max-md:mt-10" key={stack.name + "FlexDIV"}>
          <div className="text-2xl font-bold leading-8" key={stack.name}>
            {stack.name}
          </div>
          <div className="leading-7 mt-5" key={stack.description}>
            {stack.description}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="mt-12 max-md:max-w-full max-md:mt-10" key="MainDivOfTechStack">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0" key="FlexDivOfTechStack">
          {stackBlock()}
        </div>
      </div>
      <div className="items-start flex max-w-full justify-between gap-5 mt-8 max-md:flex-wrap max-md:justify-center" key={currentStack.name + "Images"}>
        {currentStack.images.map((image) => (
          <div className="w-[20%] max-md:w-[40%] max-md:mt-10" key={image + "Image"}>
            {image}
          </div>
        ))}
      </div>
    </div>
  );
}
