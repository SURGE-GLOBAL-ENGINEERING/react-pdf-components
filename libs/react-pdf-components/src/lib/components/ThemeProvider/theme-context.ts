import { createContext } from 'react';
export interface Theme {
  fontFamily?: string;
}
const initialValues: Theme = {
  fontFamily: 'Open Sans',
};
const ThemeContext = createContext<Theme>(initialValues);
export default ThemeContext;
