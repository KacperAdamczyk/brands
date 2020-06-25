import React, { FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import styled from '@emotion/styled';

import { contexts } from 'constants/contexts';
import { Slide } from 'components/Slide/Slide';
import { Offer } from 'components/Offer/Offer';
import { Login } from 'components/Login/Login';

const TransitionGroupStyled = styled(TransitionGroup)`
  display: flex;
`;

export const Dashboard: FC = () => {
  const location = useLocation();
  const brandsShortNames = contexts.map(({ shortName }) => shortName);

  return (
    <TransitionGroupStyled>
      <Transition key={location.key} timeout={1000}>
        {(state) => (
          <Switch location={location}>
            <Route path={`/:brand(${brandsShortNames.join('|')})`}>
              <Slide state={state}>
                <Switch>
                  <Route path="/:brand" exact component={Offer} />
                  <Route path="/:brand/login" exact component={Login} />
                </Switch>
              </Slide>
            </Route>
          </Switch>
        )}
      </Transition>
    </TransitionGroupStyled>
  );
};
