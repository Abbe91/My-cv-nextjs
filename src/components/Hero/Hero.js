import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import HandleEmailClick from "./HeroFunction";
import { LeftSection } from "./HeroStyles";

const Hero = props => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello and Welcome <br />
          To My Personal Portfolio
        </SectionTitle>
        <SectionText>
          {" "}
          I have a long and good experience in Html. CSS, Twig, JavaScript,
          Reactjs, Marketo, Rest API, customer Satisfaction, Jira, Agile,
          Wordpress, Elementor, google analytics, google ads, SEO, and teamwork.
        </SectionText>
        <Button onClick={HandleEmailClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
