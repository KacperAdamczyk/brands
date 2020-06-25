import React, { FC } from 'react';
import { FormikProps, Form } from 'formik';
import { Button } from '@material-ui/core';
import styled from '@emotion/styled';

import { Field } from 'components/Field/Field';

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 320px;

  && > * {
    margin-bottom: 25px;
  }
`;

export interface Values {
  email: string;
  password: string;
}

export const LoginForm: FC<FormikProps<Values>> = ({
  isSubmitting,
  isValid,
  dirty,
}) => (
  <FormStyled>
    <Field name="email" label="Email" />
    <Field name="password" label="Password" type="password" />
    <Button
      type="submit"
      variant="contained"
      color="primary"
      disabled={isSubmitting || !isValid || !dirty}
    >
      Submit
    </Button>
  </FormStyled>
);
