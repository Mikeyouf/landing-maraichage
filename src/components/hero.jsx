import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh * var(--header-height));
  position: relative;
  text-align: center;

  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
  font-size: 15px;

  ${mq.gt.sm} {
    font-size: 17px;
  }
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 22px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 18px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 46px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 500px;
  font-size: 14px;

  ${mq.gt.xs} {
    font-size: 17px;
  }
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
      <StyledIntroduction> {introduction} </StyledIntroduction> <StyledAuthor> {author} </StyledAuthor>{' '}
      <StyledTagline> {tagline} </StyledTagline>{' '}
      <StyledDescription
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />{' '}
      <ButtonLink label={ctaLabel} link={ctaLink} />
      <ScrollIndicator />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
