import { Context } from 'interfaces/context.interface';

export const contextA: Context = {
  name: 'Brand A',
  shortName: 'A',
  theme: {
    primaryColor: {
      main: '#7ebdb4',
    },
    secondaryColor: {
      main: '#f6d198',
    },
  },
};

export const contextB: Context = {
  name: 'Brand B',
  shortName: 'B',
  theme: {
    primaryColor: {
      main: '#726a95',
    },
    secondaryColor: {
      main: '#709fb0',
    },
  },
};

export const contexts = [contextA, contextB];
