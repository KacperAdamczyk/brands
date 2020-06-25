import React, { FC } from 'react';
import { Slide as UISlide } from '@material-ui/core';
import {
  TransitionStatus,
  ENTERING,
  ENTERED,
} from 'react-transition-group/Transition';

interface Props {
  state: TransitionStatus;
}

export const Slide: FC<Props> = ({ state, children }) => {
  return (
    <UISlide
      style={{
        width: '100%',
      }}
      direction={'left'}
      in={state === ENTERING || state === ENTERED}
      timeout={1000}
      mountOnEnter
      unmountOnExit
    >
      <div>{children}</div>
    </UISlide>
  );
};
