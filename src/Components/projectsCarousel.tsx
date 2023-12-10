"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 9001, min: 1250 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1250, min: 980 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 980, min: 0 },
      items: 2,
    },
  };

  const arrayOfNames = ["one", "two", "three", "four", "five", "six", "seven"];

  const carouselDivMaker = (name: string) => {
    return (
      <div className="flex flex-col h-[17rem] justify-between ml-1">
        <div className="h-[12rem] w-[22.1rem] bg-[#87A878] rounded-lg"></div>
        <div className="italic text-[1.125rem] mt-[2rem] ml-[0.2rem]">
          {name}
        </div>
      </div>
    );
  };

  const displayArray = (array: string[]) => {
    array.unshift(array.pop()!);
    return array;
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
      partialVisible={true}
      className="ml-[-23.1rem] "
    >
      {displayArray(arrayOfNames).map((name) => carouselDivMaker(name))}
    </Carousel>
  );
}
