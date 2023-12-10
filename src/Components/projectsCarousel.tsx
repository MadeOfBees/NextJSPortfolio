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
      <div className="flex flex-col h-[17rem] justify-between">
        <div className="h-[12rem] w-[22.1rem] bg-[#87A878] rounded-lg"></div>
        <div className="italic text-[1.125rem] mt-[2rem]">{name}</div>
      </div>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      swipeable={true}
      draggable={true}
      arrows={false}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      transitionDuration={500}
    >
      {arrayOfNames.map((name) => (
        <div key={name}>{carouselDivMaker(name)}</div>
      ))}
    </Carousel>
  );
}
