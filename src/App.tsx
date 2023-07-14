import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
function App() {
  const data = [
    {
      id: "1",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png",
    },
    {
      id: "2",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png",
    },
    {
      id: "3",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png",
    },
    {
      id: "4",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png",
    },
  ];
  return (
    <div className="container">
      <h1 className="title">Slider com React JS</h1>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider image" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Slider efeito Fade</h2>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider image" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="title">Slider efeito Flip</h2>
      <Swiper
        modules={[EffectFlip]}
        effect="flip"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider image" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Slider efeito Coverflow</h2>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider image" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Slider efeito Cards + Autoplay</h2>
      <Swiper
        modules={[EffectCards]}
        autoplay
        effect="cards"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        data-swiper-autoplay="2000"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider image" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
