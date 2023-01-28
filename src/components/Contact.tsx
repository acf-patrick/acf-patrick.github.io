import emailjs from "emailjs-com";
import React, { useRef } from "react";
import Section from "../styles/Section";
import { Container, CardStyled } from "../styles/Contact.styled";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Button from "../styles/Button";

interface ICardProps {
  icon: any;
  type: String;
  value: String;
  link: String;
}

function Card({ icon: Icon, type, value, link }: ICardProps) {
  return (
    <CardStyled>
      <Icon />
      <h4>{type}</h4>
      <h5>{value}</h5>
      <a href={`${link}`} target="_blank">
        Send a message
      </a>
    </CardStyled>
  );
}

function Contact() {
  const contacts: ICardProps[] = [
    {
      icon: MdOutlineEmail,
      type: "Email",
      value: "miharisoap@gmail.com",
      link: "mailto:miharisoap@gmail.com",
    },
    {
      icon: RiMessengerLine,
      type: "Messenger",
      value: "Patrick Miharisoa",
      link: "https://m.me/acf.patrick",
    },
    {
      icon: AiOutlineWhatsApp,
      type: "WhatsApp",
      value: "+261 32 86 319 60",
      link: "https://api.whatsapp.com/send?phone=261328631960",
    },
  ];

  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm("service_vtygqjr", "template_853xrjr", form.current, "sHC00pbDmBMGpZxco");
  };

  return (
    <Section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <Container>
        <div>
          {contacts.map((contact, index) => (
            <Card {...contact} key={index} />
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Your message"
            required
          ></textarea>
          <Button as="button" primary>
            Send Message
          </Button>
        </form>
      </Container>
    </Section>
  );
}

export default Contact;
