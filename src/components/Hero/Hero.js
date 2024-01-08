import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am developing softwares that help clients increase sales and productivity in their business
      </SectionText>
      <Button onClick={() => window.location='/'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;