import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import PortfolioStyled from "../styles/Portfolio.styled";
import defaultImage from "../assets/images/default.png";
import Button from "../styles/Button";

interface ICardProps {
  image?: String;
  title: String;
  github: String;
  demoLink?: String;
}

function Portfolio() {
  const portfolios: ICardProps[] = [
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
    },
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
    },
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
    },
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
    },
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
    },
    {
      title: "This is a portfolio",
      github: "#",
      demoLink: "#",
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
        {portfolios.map(({ image, title, github, demoLink }, index) => (
          <SwiperSlide key={index} className="card">
            <div>
              <img src={`${image ? image : defaultImage}`} alt="portfolio" />
            </div>
            <h3>{title}</h3>
            <div>
              <Button href={`${github}`}>Github</Button>
              {demoLink && (
                <Button primary href={`${demoLink}`}>
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
