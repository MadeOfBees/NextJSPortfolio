"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  currentSearch?: string;
};

export default function ProjectsCarousel({ currentSearch }: Props) {
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

  const projectLinks: {
    [key: string]: string;
    TSTetris: string;
    SQLStore: string;
    shutTheBox: string;
    ReactJack: string;
    Rouletteo: string;
    Sudoku: string;
    thisPortfolio: string;
  } = {
    TSTetris: "/projects/TSTetris",
    SQLStore: "/projects/SQLStore",
    shutTheBox: "/projects/shutTheBox",
    ReactJack: "/projects/ReactJack",
    Rouletteo: "/projects/Rouletteo",
    Sudoku: "/projects/dailySudoku",
    thisPortfolio: "/projects/thisPortfolio",
  };

  const projectLinksWithoutCurrent = Object.keys(projectLinks).reduce(
    (acc: any, key) => {
      if (key !== currentSearch) {
        acc[key] = projectLinks[key];
      }
      return acc;
    },
    {}
  );

  const carouselDivMaker = (name: string) => {
    return (
      <a
        className="flex flex-col h-[17rem] items-center"
        key={name + "Div"}
        href={projectLinks[name]}
      >
        <div
          className="h-[12rem] w-[22.1rem] bg-[#87A878] rounded-lg "
          key={name + "Img"}
        ></div>
        <div className="w-[22.1rem]">
          <div className="text-xl font-bold mt-4 text-left" key={name + "Text"}>
            {name}
          </div>
        </div>
      </a>
    );
  };

  const CustomLeftArrow = ({ onClick: onclick, ...rest }: any) => {
    return (
      <button
        className="group absolute left-0 mb-[13rem] h-[20rem]"
        onClick={onclick}
      >
        <div className="hidden group-hover:block bg-gradient-to-l from-transparent to-black p-4 h-[20rem] opacity-30"></div>
        <div className="w-[3rem]"></div>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick: onclick, ...rest }: any) => {
    return (
      <button
        className="group absolute right-0 mb-[13rem] h-[20rem]"
        onClick={onclick}
      >
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
      draggable={false}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={500}
      arrows={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {Object.keys(projectLinksWithoutCurrent).map((project) =>
        carouselDivMaker(project)
      )}
    </Carousel>
  );
}
