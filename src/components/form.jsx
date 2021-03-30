import { navigate } from 'gatsby';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { mq } from './_shared/media';
import ButtonSubmit from './links/button-submit';

const FormSubmit = styled.form`
  display: flex;
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
  height: 50px;
  justify-content: center;
  flex-direction: column;

  & > label {
    text-align: center;
  }

  ${mq.gt.xs} {
    flex-direction: row;
    width: 80%;
    margin-top: 0;
  }
`;

const InputEmail = styled.input`
  min-width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-right: 1rem;
  color: var(--title-color) !important;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;

  ${mq.gt.xs} {
    min-width: 300px;
  }

  &:after {
    content: '';
    z-index: -1;
    border: 1px solid var(--title-color);
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 100%;
    height: 100%;
    transition: all ease var(--transition-fast);
  }
`;

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const NameForm = ({ nameForm }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // console.log(nameForm, email);
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': nameForm,
        ...email,
      }),
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate('/remerciement'))
      // On error, show the error in an alert
      .catch((error) => alert(error));
  };

  return (
    <FormSubmit data-netlify="true" action="/" name={nameForm} method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={nameForm} />
      <label>
        Votre e-mail:
        <InputEmail name="email" placeholder="votre e-mail ici" type="text" onChange={handleChange} />
      </label>
      <ButtonSubmit type="submit" label="Envoyer" />
    </FormSubmit>
  );
};

export default NameForm;
