import React from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/scrollbar/scrollbar.scss";
import "../main.css";
import { Navigation, Scrollbar } from "swiper";


const Carousel = (props) => {

  const navigate = useNavigate();
  const navigateMovieDetail = (data) => {
    // console.log(data);
    navigate('/details', { state: data });
  }

  return (
    <div className='carousel'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={6}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        {
          props.movies.map((movie, index) => {

            const checkHistory = props.history.includes(movie.id)
            let watchedBtn;
            if (checkHistory) {
              watchedBtn =  <button className="eyeball_btn" onClick={() => props.updateHistory(props.userId, movie.id)}>👁️</button>
            } else {
              watchedBtn =  <button className="watch_btn" onClick={() => props.updateHistory(props.userId, movie.id)}>Watch</button>
            }

            return (
            <SwiperSlide key={index}  className='main-slide'>
              <div>
                <div>

                  <img
                    src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
                    alt = {movie.original_title}
                      onClick={() => { navigateMovieDetail(movie) }}
                  />

                </div>
                <div className="main-card-title">
                  {movie.original_title}
                </div>
                {watchedBtn}
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Carousel;