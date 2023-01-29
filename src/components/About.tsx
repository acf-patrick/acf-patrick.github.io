import { CardStyled, Container, Content, Photo } from "../styles/About.styled";
import Section from "../styles/Section";
import { FaAward } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Image from "../assets/images/photo-2.jpeg";
import Button from "../styles/Button";
import { ActiveLinkContext } from "../App";
import { useContext } from "react";

interface ICardProps {
  icon: any;
  title: String;
  description: String;
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
      description: "+3 Years Working",
    },
    {
      icon: <BsPeople />,
      title: "Clients",
      description: "+200 Worldwide",
    },
    {
      icon: <AiOutlineFundProjectionScreen />,
      title: "Projects",
      description: "+80 Completed",
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            voluptate distinctio sit doloribus sint repellat, optio repellendus
            vitae ex ad id consequatur nam reprehenderit officia asperiores
            dicta, aperiam ipsa eum? Ex, aliquid hic perspiciatis atque placeat,
            reiciendis eos excepturi facere doloremque recusandae, voluptatum
            iure incidunt porro sint id maiores ratione ea cum laborum
            praesentium ut in dolore veritatis! Labore, mollitia. Distinctio
            repellat aliquam delectus hic accusamus accusantium eligendi neque
            voluptas nemo laboriosam, autem similique in perspiciatis dolorum
            facere officia ipsam sit deleniti quod maiores corrupti laborum
            eius? Minus, nam voluptatum?
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
