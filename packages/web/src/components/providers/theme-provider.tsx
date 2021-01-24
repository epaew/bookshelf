import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createMuiTheme, CssBaseline, StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { FC } from 'react';

const theme = createMuiTheme();

export const ThemeProvider: FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
