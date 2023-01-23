import CV from "../assets/resume.pdf";
import photo from "../assets/images/photo-1.png";
import Button from "../styles/Button";
import styled from "styled-components";
import { Inner, Buttons, ScrollButton, Socials, Photo, Container } from "../styles/Header.styled";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDown } from "react-icons/gr";

function Header() {
  const LightTitle = styled.h5`
    color: ${({ theme }) => theme.colors.light};
  `;

  return (
    <Container>
      <Inner>
        <h5>Hello I'm</h5>
        <h1>Patrick Miharisoa</h1>
        <LightTitle>Fullstack Developer</LightTitle>
        <Buttons>
          <Button href={CV} download="MIHARISOA Tojoniaina Patrick.pdf">
            Download CV
          </Button>
          <Button href="#contact" primary>
            Get in Touch
          </Button>
        </Buttons>
        <Socials>
          <a
            href="https://www.linkedin.com/in/patrick-miharisoa-8b8633227/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/acf-patrick" target="_blank">
            <FaGithub />
          </a>
        </Socials>
        <Photo>
          <img src={photo} alt="photo" />
        </Photo>
        <ScrollButton href="#contact">
          <GrDown />
        </ScrollButton>
      </Inner>
    </Container>
  );
}

export default Header;
