import React, { FC, useMemo, useCallback } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { contexts } from 'constants/contexts';
import { useBrandContext } from 'hooks/brandContext';
import { Header } from 'components/Header/Header';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { State } from 'interfaces/state.interface';
import { snackbarSlice } from 'slices/snackbar';

export const App: FC = () => {
  const { theme } = useBrandContext();
  const snackbarMessage = useSelector(({ snackbar }: State) => snackbar);
  const dispatch = useDispatch();
  const onClose = useCallback(
    () => dispatch(snackbarSlice.actions.closeSnackbar(undefined)),
    [dispatch]
  );

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: theme.primaryColor,
          secondary: theme.secondaryColor,
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="*">
            <Redirect to={contexts[0]?.shortName} />
          </Route>
        </Switch>
      </Router>
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={5000}
        onClose={onClose}
      >
        <Alert severity="error">{snackbarMessage}</Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
