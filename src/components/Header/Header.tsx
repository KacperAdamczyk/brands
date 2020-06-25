import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styled from '@emotion/styled';

import { contexts } from 'constants/contexts';
import { context } from 'slices/context';
import { useBrandContextIndex } from 'hooks/brandContextIndex';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const RightButton = styled(Button)`
  && {
    margin-left: auto;
  }
`;

export const Header: FC = () => {
  const contextIndex = useBrandContextIndex();
  const history = useHistory();
  const dispatch = useDispatch();

  const prevContextIndex = contextIndex - 1;
  const nextContextIndex = contextIndex + 1;
  const prevAvailable = prevContextIndex >= 0;
  const nextAvailable = nextContextIndex < contexts.length;

  const onPrevClick = useCallback(() => {
    const newContext = contexts[prevContextIndex];
    dispatch(context.actions.changeContext(newContext));
    history.push(`/${newContext.shortName}`);
  }, [dispatch, history, prevContextIndex]);
  const onNextClick = useCallback(() => {
    const newContext = contexts[nextContextIndex];
    dispatch(context.actions.changeContext(newContext));
    history.push(`/${newContext.shortName}`);
  }, [dispatch, history, nextContextIndex]);

  return (
    <HeaderContainer>
      {prevAvailable && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onPrevClick}
        >
          {contexts[prevContextIndex]?.name}
        </Button>
      )}
      {nextAvailable && (
        <RightButton
          variant="contained"
          color="primary"
          size="large"
          onClick={onNextClick}
        >
          {contexts[nextContextIndex]?.name}
        </RightButton>
      )}
    </HeaderContainer>
  );
};
