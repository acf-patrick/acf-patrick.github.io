import Section from "../styles/Section";
import { Container, Content, Photo } from "../styles/About.styled";
import Image from "../assets/images/photo-2.jpeg";

function About() {
  return (
    <Section id="about">
      <h5>Get To Now</h5>
      <h2>About Me</h2>

      <Container>
        <Photo>
          <div>
            <img src={Image} alt="photo" />
          </div>
        </Photo>

         <Content>

         </Content>
      </Container>
    </Section>
  );
}

export default About;
