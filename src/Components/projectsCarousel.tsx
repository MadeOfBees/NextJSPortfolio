"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 9001, min: 1250 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1250, min: 980 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 980, min: 0 },
      items: 1,
    },
  };

  const arrayOfNames = ["one", "two", "three", "four", "five", "six", "seven"];

  const carouselDivMaker = (name: string) => {
    return (
      <div
        className="flex flex-col h-[17rem] items-center ml-1"
        key={name + "Div"}
      >
        <div
          className="h-[12rem] w-[22.1rem] bg-[#87A878] rounded-lg"
          key={name + "Img"}
        ></div>
        <div
          className="italic text-[1.125rem] mt-[2rem] ml-[-20rem] text-center"
          key={name + "Name"}
        >
          {name}
        </div>
      </div>
    );
  };

  const CustomRightArrow = ({ onClick: onclick, ...rest }: any) => {
        return (
        <button className="group absolute left-0 mb-[13rem] h-[20rem]" onClick={onclick}>
            <div className="hidden group-hover:block bg-gradient-to-l from-transparent to-black p-4 h-[20rem] opacity-30"></div>
            <div className="w-[3rem]"></div>
        </button>
        );
    };

    const CustomLeftArrow = ({ onClick: onclick, ...rest }: any) => {
        return (
        <button className="group absolute right-0 mb-[13rem] h-[20rem]" onClick={onclick}>
            <div className="hidden group-hover:block bg-gradient-to-r from-transparent to-black p-4 h-[20rem] opacity-30"></div>
            <div className="w-[3rem]"></div>
        </button>
        );
    };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      swipeable={true}
      draggable={true}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      transitionDuration={500}
      arrows={true}
      containerClass="container"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {(arrayOfNames).map((name) => carouselDivMaker(name))}
    </Carousel>
  );
}
