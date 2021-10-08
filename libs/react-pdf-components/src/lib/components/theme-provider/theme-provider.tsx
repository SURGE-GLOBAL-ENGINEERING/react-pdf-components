import React, { FunctionComponent } from 'react';
import { Theme, ThemeContext } from './theme-context';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ThemeProviderProps {
  themeConfig: Theme;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
  themeConfig,
}) => {
  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};
