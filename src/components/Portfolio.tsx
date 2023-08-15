import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/pagination";

import PortfolioStyled from "../styles/Portfolio.styled";
import Button from "../styles/Button";

interface ICardProps {
  image?: string;
  title: string;
  description: string;
  github: string;
  demoLink?: string;
  topics: string[];
}

function Portfolio() {
  const portfolios: ICardProps[] = [
    {
      title: "Mozika",
      description:
        "Music player for desktop, built for Windows only for the time being. This was my first project with Rust 🦀.",
      github: "https://github.com/acf-patrick/music-player",
      image: "/assets/images/portfolios/music-player.png",
      topics: ["Rust", "React", "Tauri", "Actix", "Styled Components"],
    },
    {
      title: "Spotifew",
      description:
        "Web Application built with Spotify API. This project really helped me to understand OAuth.",
      github: "https://github.com/acf-patrick/spotifew",
      demoLink: "https://spotifew.netlify.app",
      image: "/assets/images/portfolios/spotifew.png",
      topics: ["React", "ExpressJs", "OAuth", "API"],
    },
    {
      title: "Family Guy",
      description:
        "Fullstack application built with Next.js made for all Family guy fans.",
      github: "https://github.com/acf-patrick/family-guy",
      demoLink: "https://family-guy-app.vercel.app",
      image: "/assets/images/portfolios/family-guy.png",
      topics: ["Next.js", "Vercel"],
    },
    {
      title: "Chat application",
      description:
        "Small chat application ↔️ project written with React and Actix-web. The design is inspired by Socket.IO and uses Actix's actor pattern",
      github: "https://github.com/acf-patrick/rust_web_socket",
      image: "/assets/images/portfolios/chat-app.png",
      topics: ["Rust", "React", "Actix", "Web Socket"],
    },
    {
      title: "Morpion-web",
      description:
        "Common thing when starting with web-socket, building a Tic-tac-toe ⭕❌ game. Because why not ?",
      github: "https://github.com/acf-patrick/morpion-web",
      image: "/assets/images/portfolios/tic-tac-toe.png",
      demoLink: "https://morpion-web.netlify.app",
      topics: ["React", "ExpressJs", "Socket.io", "Styled Components"],
    },
    {
      title: "Haizara",
      description:
        "React integration of a E-learning website designed by © Educrat",
      image: "/assets/images/portfolios/haizara.jpg",
      github: "https://github.com/acf-patrick/haizara",
      demoLink: "https://acf-patrick.github.io/haizara/",
      topics: ["React", "SASS"],
    },
    {
      title: "Chip-8 Emulator",
      description:
        "Chip-8 emulator written in C++. Rendering is handled by SDL.",
      image: "/assets/images/portfolios/chip-8.png",
      github: "https://github.com/acf-patrick/chip-8-interpreter",
      topics: ["C++", "Emulator"],
    },
    {
      title: "Tiles Adventure",
      description: "2D platformer game written in C++",
      image: "/assets/images/portfolios/tiles-adventure.png",
      github: "https://github.com/acf-patrick/Tiles-Adventure",
      topics: ["C++", "Game"],
    },
    {
      title: "Flappy Bird",
      description: "C++ implementation of the popular mobile game",
      image: "/assets/images/portfolios/flappy-bird.png",
      github: "https://github.com/acf-patrick/flappy-bird-sdl",
      topics: ["C++", "Game"],
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <PortfolioStyled ref={ref} inView={inView}>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {portfolios.map(
          ({ image, title, description, github, demoLink, topics }, index) => (
            <SwiperSlide key={index} className="card">
              <div className="image">
                <img
                  src={`${image ? image : "/assets/images/default.png"}`}
                  alt="portfolio"
                />
              </div>
              <div className="content">
                <main>
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <div className="labels">
                    {topics.map((topic, i) => (
                      <span key={i}>{topic}</span>
                    ))}
                  </div>
                </main>
                <div className="buttons">
                  <Button href={`${github}`} target="_blank">
                    Github
                  </Button>
                  {demoLink && (
                    <Button primary href={`${demoLink}`} target="_blank">
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </PortfolioStyled>
  );
}

export default Portfolio;
