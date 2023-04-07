/**
 * Layout
 */

import React from "react";
import * as Constants from "expo-constants";
import { Provider } from "react-native-paper";
import { Stack, SplashScreen } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import Styles from "../styles";
import getTheme from "../theme";
import { Header } from "../components";
import { HeaderProps } from "../components/Header";

const Layout = () => {
  // Theme
  const theme = getTheme();

  const [themeLoaded, setThemeLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Display the splash screen while loading theme
    setTimeout(() => {
      setThemeLoaded(true);
    }, 1000);
  }, []);

  if (!themeLoaded) {
    return <SplashScreen />;
  }

  return (
    <Provider theme={theme}>
      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            header: (props: HeaderProps) => (
              <Header
                {...props}
                headerProps={{
                  children: undefined,
                  style: {
                    ...Styles.header,
                    top: Constants.default.statusBarHeight,
                    backgroundColor: theme.colors.elevation.level1,
                  },
                }}
              />
            ),
          }}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
