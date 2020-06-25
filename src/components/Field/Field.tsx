import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

interface Props {
  name: string;
}

export const Field: FC<TextFieldProps & Props> = (props) => {
  const [field, { touched, error }] = useField<string>(props.name);

  return (
    <TextField
      {...props}
      {...field}
      error={touched && !!error}
      helperText={error}
    />
  );
};
