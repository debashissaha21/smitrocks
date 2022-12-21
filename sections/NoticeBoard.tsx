"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NoticeItem } from "../components";

const NoticeBoard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full py-10">
      <div className="flex text-center items-center justify-center flex-col">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Notice
          </span>
          Board
        </h1>
      </div>
      <div className="w-30 lg:mx-14 lg:px-14 py-5 mx-7">
        <Slider {...settings}>
          {[1, 3, 5, 7, 7, 8, 9].map((value: number, key: number) => {
            return <NoticeItem key={key} propsData={key} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NoticeBoard;
