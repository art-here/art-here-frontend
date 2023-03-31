import styled from "@emotion/styled";
import React from "react";

type TInputFieldProps = {
  label: string;
  name: string;

  validationError?: string;
};

const InputField = ({
  label,
  name,

  validationError
}: TInputFieldProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input name={name} type="text" />
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
    </Container>
  );
};

export default InputField;

export const Container = styled.div`
  max-width: 50%;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  padding: 0;
  color: red;
  margin-top: 0.5rem;
`;
