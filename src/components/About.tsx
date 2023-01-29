import { ActiveLinkContext } from "../App";
import { useContext } from "react";
import { CardStyled, Container, Content, Photo } from "../styles/About.styled";
import Section from "../styles/Section";
import { FaAward } from "react-icons/fa";
import { GiFamilyTree } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import Image from "../assets/images/photo-2.jpeg";
import Button from "../styles/Button";

interface ICardProps {
  icon: any;
  title: String;
  description?: String;
}

function Card({ icon, title, description }: ICardProps) {
  return (
    <CardStyled>
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </CardStyled>
  );
}

function About() {
  const cards: ICardProps[] = [
    {
      icon: <FaAward />,
      title: "Experience",
      description: "1 Years Working",
    },
    {
      icon: <GrReactjs />,
      title: "Techno",
      description: "agnostic"
    },
    {
      icon: <GiFamilyTree />,
      title: "Algorithm",
      description: "optimizer"
    },
  ];

  // active link state
  const [activeLink, setActiveLink] = useContext(ActiveLinkContext);

  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <Container>
        <Photo>
          <div>
            <img src={Image} alt="photo" />
          </div>
        </Photo>

        <Content>
          <div>
            {cards.map((card, index) => (
              <Card {...card} key={index} />
            ))}
          </div>
          <p>
            Hi! My name is Patrick Miharisoa. I really like algorithmic
            challenges and problem solving, that's why I work as a C++ developer
            supporting Computer Aided Designers using AutoCAD and GstarCAD
            softwares, providing them the tools that will boost their
            productivity and spare their times. On the other hand, I am also
            working on Game, Web and Mobile development right now.
            <br />
            <Button
              primary
              href="#contact"
              onClick={() => {
                setActiveLink("contact");
              }}
            >
              Let's Talk
            </Button>
          </p>
        </Content>
      </Container>
    </Section>
  );
}

export default About;
