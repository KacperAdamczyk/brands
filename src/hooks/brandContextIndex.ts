import { useMemo } from 'react';

import { useBrandContext } from './brandContext';
import { contexts } from 'constants/contexts';

export function useBrandContextIndex(): number {
  const brandContext = useBrandContext();

  return useMemo(
    () => contexts.findIndex(({ name }) => name === brandContext.name),
    [brandContext]
  );
}
