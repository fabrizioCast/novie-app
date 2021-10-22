//React.JS
import { useEffect, useState } from "react";

//Swiper.JS
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const MoviesSlider = ({ data }) => {
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (data) {
      setResponse(true);
    }
  }, [data]);

  return (
    <Swiper
      loop={true}
      freeMode={true}
      slidesPerView="auto"
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 200,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 130,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 130,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 130,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 70,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 70,
        },
        1281: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
    >
      {response &&
        data.map((el, index) => (
          <SwiperSlide key={index}>
            <MovieCard
              id={el.id}
              title={el.title}
              img={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
              year={el.release_date.slice(0, -6)}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MoviesSlider;
