import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a front-end and back-end developer, I have experience working with a
      variety of technologies including:
      <br />
      <ul>
        <li>
          JavaScript: a programming language that allows me to create
          interactive and dynamic user interfaces.
        </li>
        <br />
        <li>
          React.js: a JavaScript library for building user interfaces, which I
          use to create reusable and modular components.
        </li>
        <br />
        <li>
          CSS and HTML: languages that I use to create visually appealing and
          responsive layouts and designs.
        </li>
        <br />
        <li>
          Node.js: a JavaScript runtime that allows me to write server-side
          scripts and build back-end applications.
        </li>
        <br />
        <li>
          Express.js: a Node.js framework that I use to build web applications
          and APIs. GitHub: a version control platform that I use to manage and
          collaborate on code projects.
        </li>
        <br />
        <li>
          Jenkins: a continuous integration tool that I use to automate the
          build and deployment process.
        </li>
        <br />
        <li>
          Google Ads and Analytics: platforms that I use to create and analyze
          ad campaigns and track website performance.
        </li>
        <br />
        <li>
          Google Tag Manager: a tool that I use to manage and implement tracking
          codes and tags on a website.
        </li>
      </ul>
      <br />I am skilled in using these technologies to develop and maintain web
      applications, track and analyze website performance, and create and manage
      ad campaigns. I am also familiar with best practices and industry
      standards for web development and have experience working with different
      development methodologies and workflows.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
            <br /> Javascript <br />
            Twig
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node <br /> Databases
            <br /> Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
            <br />
            Canva
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
