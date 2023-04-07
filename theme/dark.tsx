/**
 * Dark Theme Implementation
 */

import { MD3DarkTheme } from "react-native-paper";

const WeatherDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: "rgba(211, 187, 255, 0.75)",
    onPrimary: "rgba(63, 0, 141, 1)",
    primaryContainer: "rgba(91, 0, 197, 0.5)",
    onPrimaryContainer: "rgba(235, 221, 255, 1)",
    secondary: "rgba(205, 194, 219, 0.75)",
    onSecondary: "rgba(52, 45, 64, 1)",
    secondaryContainer: "rgba(75, 67, 88, 0.5)",
    onSecondaryContainer: "rgba(233, 222, 248, 1)",
    tertiary: "rgba(240, 183, 197, 0.75)",
    onTertiary: "rgba(74, 37, 48, 1)",
    tertiaryContainer: "rgba(100, 59, 70, 0.5)",
    onTertiaryContainer: "rgba(255, 217, 225, 1)",
    error: "rgba(255, 180, 171, 0.75)",
    onError: "rgba(105, 0, 5, 1)",
    errorContainer: "rgba(147, 0, 10, 0.5)",
    onErrorContainer: "rgba(255, 180, 171, 1)",
    background: "rgba(29, 27, 30, 0.5)",
    onBackground: "rgba(230, 225, 230, 1)",
    surface: "rgba(29, 27, 30, 0.5)",
    onSurface: "rgba(230, 225, 230, 1)",
    surfaceVariant: "rgba(73, 69, 78, 0.5)",
    onSurfaceVariant: "rgba(203, 196, 207, 1)",
    outline: "rgba(148, 143, 153, 0.5)",
    outlineVariant: "rgba(73, 69, 78, 0.5)",
    shadow: "rgba(0, 0, 0, 0.5)",
    scrim: "rgba(0, 0, 0, 0.5)",
    inverseSurface: "rgba(230, 225, 230, 0.5)",
    inverseOnSurface: "rgba(50, 48, 51, 0.5)",
    inversePrimary: "rgba(115, 49, 223, 0.5)",
    elevation: {
      level0: "transparent",
      level1: "rgba(38, 35, 41, 0.5)",
      level2: "rgba(44, 40, 48, 0.5)",
      level3: "rgba(49, 45, 55, 0.5)",
      level4: "rgba(51, 46, 57, 0.5)",
      level5: "rgba(55, 49, 62, 0.5)",
    },
    surfaceDisabled: "rgba(230, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(230, 225, 230, 0.38)",
    backdrop: "rgba(50, 47, 55, 0.4)",
  },
};

export default WeatherDarkTheme;
