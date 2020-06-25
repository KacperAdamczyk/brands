import React, { FC, useCallback } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import * as Yup from 'yup';

import { Values, LoginForm } from './LoginForm/LoginForm';
import { login } from 'slices/user';
import { useBrandContext } from 'hooks/brandContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Must contain at least 5 characters')
    .required('Required'),
});

const LoginFormContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const context = useBrandContext();

  const onSubmit = useCallback(
    async (values: Values, actions: FormikHelpers<Values>) => {
      dispatch(login({ history, context, ...values }));
    },
    [dispatch, history, context]
  );

  return (
    <LoginFormContainer>
      <Formik<Values>
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
        component={LoginForm}
      />
    </LoginFormContainer>
  );
};
