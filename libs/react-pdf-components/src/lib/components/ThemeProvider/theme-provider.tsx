import React, { FunctionComponent } from 'react';
import ThemeContext, { Theme } from './theme-context';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ThemeProviderProps {
  themeConfig: Theme;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
  themeConfig,
}) => {
  console.log('PROVIDER I', { themeConfig });

  return (
    <ThemeContext.Provider value={{ ...themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
