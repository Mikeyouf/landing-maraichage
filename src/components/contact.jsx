import styled from '@emotion/styled';
import React from 'react';
import Icon from './icon';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';
import ButtonSubmit from './links/button-submit';
import NameForm from './form';

const StyledContactSection = styled(StyledSection)`
  margin-bottom: 70px;
`;
const StyledContainer = styled.section`
  display: flex;
  align-items: flex-start;
  width: 320px;
  justify-self: center;

  & > svg {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  & > span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
  width: 100%;
  max-width: 500px;
  margin-left: 3px;
  text-align: center;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 50%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-top: 2rem;
  align-items: start;
  /* justify-items: center; */

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
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
//     margin-top: 0;
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

const Contact = ({ data }) => {
  const {
    frontmatter: { phone, email, address, horaire },
    html,
  } = data;

  return (
    <React.Fragment>
      <StyledContactSection id="contact">
        <StyledH1>Restons en contact</StyledH1>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
        <NameForm nameForm="contact" />
        {/* <FormSubmit name="contact" method="POST" data-netlify="true" action="/remerciement">
          <label>
            Votre e-mail: <InputEmail type="email" name="email" placeholder="votre e-mail ici" />
          </label>
          <input type="hidden" name="form-name" value="contact" />
          <ButtonSubmit type="submit" label="Envoyer" />
        </FormSubmit> */}
        <StyledSeparator />
        <StyledContacts>
          {address && (
            <StyledContainer>
              <Icon icon="building" />
              <StyledFormContainer>
                <StyledForm>Adresse</StyledForm>
                <a
                  href="https://goo.gl/maps/Gi2vN6qLPYZiQdnV6"
                  style={{ color: '#ced8de', fontSize: '0.75rem', fontWeight: '500' }}
                >
                  <span>{address}</span>
                </a>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {email && (
            <StyledContainer>
              <Icon icon="paper-plane" />
              <StyledFormContainer>
                <StyledForm>E-mail</StyledForm>
                <a
                  href="mailto:fermedugapeau.maraichage@avath.fr"
                  style={{ color: '#ced8de', fontSize: '0.75rem', fontWeight: '500' }}
                >
                  <span>{email}</span>
                </a>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {phone && (
            <StyledContainer>
              <Icon icon="mobile-alt" />
              <StyledFormContainer>
                <StyledForm>Téléphone</StyledForm>
                <a href="tel:+33648588276" style={{ color: '#ced8de', fontSize: '0.75rem', fontWeight: '500' }}>
                  <span>{phone}</span>
                </a>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {horaire && (
            <StyledContainer>
              <Icon icon="clock" />
              <StyledFormContainer>
                <StyledForm>Horaire</StyledForm>
                <span>{horaire}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledContactSection>
    </React.Fragment>
  );
};

export default Contact;
