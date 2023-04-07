/**
 * Themes
 */

import React from "react";
import * as SecureStore from "expo-secure-store";
import { adaptNavigationTheme } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import WeatherTheme from "./light";
import WeatherDarkTheme from "./dark";

// Adapt themes
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export default function getTheme() {
  const [theme, setTheme] = React.useState<string>("");

  // Load settings
  React.useEffect(() => {
    (async () => {
      const theme = await SecureStore.getItemAsync("theme");
      setTheme(theme || "light");
    })();
  }, []);

  if (theme === "light") {
    return {
      ...LightTheme,
      ...WeatherTheme,
      colors: {
        ...LightTheme.colors,
        ...WeatherTheme.colors,
      },
    };
  }

  return {
    ...DarkTheme,
    ...WeatherDarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...WeatherDarkTheme.colors,
    },
  };
}
