import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import tilesAdventure from "../assets/images/portfolios/tiles-adventure.png";
import flappyBird from "../assets/images/portfolios/flappy-bird.png";
import haizara from "../assets/images/portfolios/haizara.jpg";
import chip8 from "../assets/images/portfolios/chip-8.png";

import PortfolioStyled from "../styles/Portfolio.styled";
import defaultImage from "../assets/images/default.png";
import Button from "../styles/Button";

interface ICardProps {
  image?: String;
  title: String;
  description?: String;
  github: String;
  demoLink?: String;
}

function Portfolio() {
  const portfolios: ICardProps[] = [
    {
      title: "Tiles Adventure",
      description: "2D platformer game written in C++",
      image: tilesAdventure,
      github: "https://github.com/acf-patrick/Tiles-Adventure",
    },
    {
      title: "Flappy Bird",
      description: "C++ implementation of the popular mobile game",
      image: flappyBird,
      github: "https://github.com/acf-patrick/flappy-bird-sdl",
    },
    {
      title: "Chip-8 Emulator",
      image: chip8,
      github: "https://github.com/acf-patrick/chip-8-interpreter",
    },
    {
      title: "Haizara",
      description: "React integration of a E-learning website designed by © Educrat",
      image: haizara,
      github: "https://github.com/acf-patrick/haizara",
      demoLink: "https://acf-patrick.github.io/haizara/",
    },
  ];

  return (
    <PortfolioStyled>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {portfolios.map(({ image, title, description, github, demoLink }, index) => (
          <SwiperSlide key={index} className="card">
            <div>
              <img src={`${image ? image : defaultImage}`} alt="portfolio" />
            </div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <div>
              <Button href={`${github}`} target="_blank">
                Github
              </Button>
              {demoLink && (
                <Button primary href={`${demoLink}`} target="_blank">
                  Demo
                </Button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </PortfolioStyled>
  );
}

export default Portfolio;
