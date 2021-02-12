import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import FeaturedProjects from '../components/featured-projects';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
// import { StyledSeparator } from '../components/_shared/styled-separator';

const StyledProjectsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const Projects = ({ data, location }) => {
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Légumes" />
      <StyledFullHeightSection>
        {/* <StyledProjectsH1> Nos légumes </StyledProjectsH1> <StyledSeparator /> */}
        <FeaturedProjects featured={data.featuredProjects.nodes} location={location} />
      </StyledFullHeightSection>{' '}
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    featuredProjects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          title
          repo_link
          demo_link
          techs
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`;
