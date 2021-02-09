import styled from '@emotion/styled';
import Img from 'gatsby-image';
import React from 'react';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { StyledSection } from './_shared/styled-section';
// import Maraichage from '../../content/sections/about/terrasse-1.jpg';

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
  font-size: 0.9rem;
  text-align: justify;
  p {
    margin-bottom: 0;
  }
  margin-bottom: 0;
`;

const About = ({ data }) => {
  const {
    frontmatter: { title, techs, aboutimage },
    html,
  } = data;

  // console.log(aboutimage);

  const image = aboutimage ? aboutimage.childImageSharp.fluid : null;

  return (
    <StyledSection id="a-propos">
      <StyledH1> Un peu d'histoire </StyledH1>{' '}
      <StyledAboutContainer>
        {' '}
        {image && (
          <StyledStaticImageContainer>
            <Img fluid={image} objectFit="contain" />
            {/* <img src={Maraichage} alt="maraichage" /> */}
            {/* {image !== null ? <Img fluid={image} objectFit="contain" /> : <img src={Maraichage} alt="maraichage" />} */}
          </StyledStaticImageContainer>
        )}{' '}
        <div>
          <StyledH2> {title} </StyledH2>{' '}
          <StyledTextSection
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />{' '}
          <TechList techs={techs} />{' '}
        </div>{' '}
      </StyledAboutContainer>{' '}
    </StyledSection>
  );
};

About.propTypes = {};

export default About;
