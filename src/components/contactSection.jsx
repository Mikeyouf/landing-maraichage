import styled from '@emotion/styled';
import React from 'react';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
// import ButtonSubmit from './links/button-submit';
import NameForm from './form';
import { StyledH1 } from './_shared/styled-headings';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(40vh * var(--header-height));
  position: relative;
  text-align: center;
  margin-top: 60px;

  ${mq.gt.sm} {
    min-height: calc(40vh - var(--header-height));
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
  padding: 20px;

  ${mq.gt.xs} {
    font-size: 17px;
  }
`;

// const FormSubmit = styled.form`
//   display: flex;
//   margin-bottom: 2rem;
//   margin-top: 2rem;
//   width: 100%;
//   height: 50px;
//   justify-content: center;
//   flex-direction: column;

//   & > label {
//     text-align: center;
//   }

//   ${mq.gt.xs} {
//     flex-direction: row;
//     width: 80%;
//   }
// `;

// const InputEmail = styled.input`
//   min-width: 100%;
//   height: 40px;
//   background-color: rgba(255, 255, 255, 0.6);
//   margin-right: 1rem;
//   color: var(--title-color) !important;
//   font-size: 0.9rem;
//   font-weight: 500;
//   white-space: nowrap;
//   position: relative;
//   border: none;
//   padding: 0.4rem 0.8rem;

//   ${mq.gt.xs} {
//     min-width: 300px;
//   }

//   &:after {
//     content: '';
//     z-index: -1;
//     border: 1px solid var(--title-color);
//     position: absolute;
//     bottom: -3px;
//     right: -3px;
//     width: 100%;
//     height: 100%;
//     transition: all ease var(--transition-fast);
//   }
// `;

const ContactSection = () => {
  return (
    <StyledHeroSection>
      <StyledH1 style={{ textAlign: 'left' }}> Restons en contact </StyledH1>{' '}
      <StyledDescription>
        Nous ne partagerons pas vos informations avec d'autres personnes ou entreprises.
      </StyledDescription>
      <NameForm nameForm="contact-un" />
      {/* <FormSubmit name="contact-un" method="POST" data-netlify="true" action="/remerciement">
        <label>
          Votre e-mail: <InputEmail type="email" name="email" placeholder="votre e-mail ici" />
        </label>
        <input type="hidden" name="form-name" value="contact-un" />
        <ButtonSubmit type="submit" label="Envoyer" />
      </FormSubmit> */}
    </StyledHeroSection>
  );
};

export default ContactSection;
