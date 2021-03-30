import React from 'react';
import styled from '@emotion/styled';
import TextLink from '../components/links/text-link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { indexMenuLinks } from '../components/_config/menu-links';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { contentBox, flexCenter } from '../components/_shared/styled-mixins';

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;

const message = `Merci de vous êtes inscrit à notre liste d'email!`;

const ThankYouPage = () => (
  <Layout menuLinks={indexMenuLinks}>
    <SEO title="Page de remerciement" />
    <StyledFullHeightSection>
      <StyledDescription dangerouslySetInnerHTML={{ __html: message }} />
      <StyledArchiveContainer>
        <TextLink label="Retourner sur la page d'accueil" link="/" />
      </StyledArchiveContainer>
    </StyledFullHeightSection>
  </Layout>
);

export default ThankYouPage;
