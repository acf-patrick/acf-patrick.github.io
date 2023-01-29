import Section from "../styles/Section";
import { BsCheck2Circle } from "react-icons/bs";
import { Container, CardStyled } from "../styles/Experience.styled";

interface ICardProps {
  title: String;
  skills: String[][];
}

function Card({ title, skills }: ICardProps) {
  return (
    <CardStyled>
      <h3>{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <article key={index}>
            <BsCheck2Circle />
            <div>
              <h4>{skill[0]}</h4>
              <small>{skill[1]}</small>
            </div>
          </article>
        ))}
      </div>
    </CardStyled>
  );
}

function Experience() {
  const skills: ICardProps[] = [
    {
      title: "frontend development",
      skills: [
        [ "Angular", "intermediate" ],
        [ "React", "experienced" ],
        [ "Styled-components", "intermediate" ]
      ]
    },
    {
      title: "backend development",
      skills: [
        [ "Node JS", "intermediate" ],
        [ "MongoDB", "intermediate" ],
        [ "MySQL", "intermediate" ],
        [ "NestJS", "intermediate" ]
      ]
    },
    {
      title: "computer aided design",
      skills: [
        [ "C++ ObjectArx", "experienced" ],
        [ "AutoCAD", "experienced" ],
        [ "QGIS", "experienced" ]
      ]
    }
  ];

  return (
    <Section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <Container>
        {skills.map((skill, index) => (
          <Card {...skill} key={index} />
        ))}
      </Container>
    </Section>
  );
}

export default Experience;
