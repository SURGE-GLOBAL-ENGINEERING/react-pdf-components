import { createContext } from 'react';
export interface Theme {
  fontFamily?: string;
}

const initialValues: Theme = {
  fontFamily: 'Open Sans',
};

export const ThemeContext = createContext<Theme>(initialValues);
