import React, { FC, useCallback } from 'react';
import { Button } from '@material-ui/core';
import styled from '@emotion/styled';

import { useBrandContext } from 'hooks/brandContext';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/state.interface';

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const OfferHeader = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
`;

const OfferHeaderText = styled.h1`
  flex-grow: 1;
`;

const OfferContent = styled.div`
  margin: 20px;
  color: gray;
`;

const UserName = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const Offer: FC = () => {
  const { name, shortName } = useBrandContext();
  const history = useHistory();
  const { data: user } = useSelector(({ user }: State) => user);

  const onLogin = useCallback(() => history.push(`/${shortName}/login`), [
    history,
    shortName,
  ]);

  return (
    <OfferContainer>
      <OfferHeader>
        <OfferHeaderText>{name}</OfferHeaderText>
        {user?.username ? (
          <UserName>Welcome, {user.username}!</UserName>
        ) : (
          <Button variant="outlined" color="primary" onClick={onLogin}>
            Log in
          </Button>
        )}
      </OfferHeader>
      <OfferContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat
        justo ex, et ullamcorper purus tincidunt et. Cras lacinia vestibulum
        tristique. Aenean ac mollis tellus. Nulla sed fermentum tellus. Nam
        vehicula, ex sed pulvinar pulvinar, ante mauris mattis magna, accumsan
        vulputate lacus risus sed quam. Pellentesque porta ligula sit amet
        varius egestas. Maecenas ultrices neque vel sem pharetra varius.
        Praesent sed magna vel leo consectetur consequat. Nam non accumsan nisi.
        Sed tincidunt sit amet lacus id imperdiet. Nulla ac nunc at dui
        malesuada dapibus. Nunc viverra dapibus tellus, id ornare velit commodo
        vel. Integer congue vulputate aliquet. Maecenas eget risus vel felis
        sodales consequat sit amet eget ante. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Nulla ac tortor orci. Praesent placerat
        dui non odio placerat tincidunt. Sed ut mauris nisi. Integer rutrum
        semper porta. Donec et neque vehicula, scelerisque nunc at, ornare
        magna. Donec mauris lacus, venenatis sed pulvinar in, vestibulum vel
        ligula. Curabitur sodales mauris venenatis urna ultricies, et fermentum
        ex convallis. Quisque lorem eros, lacinia sed tellus eu, maximus pretium
        eros. Nullam tincidunt quam felis, eu pulvinar arcu ullamcorper vitae.
        Morbi a faucibus nibh. Pellentesque eget consequat odio. Proin mattis
        dignissim interdum. Vivamus fringilla nibh vitae neque semper, sit amet
        congue nibh fringilla.
      </OfferContent>
    </OfferContainer>
  );
};
