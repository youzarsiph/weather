/**
 * Light Theme Implementation
 */

import { MD3LightTheme } from "react-native-paper";

const WeatherTheme = {
  ...MD3LightTheme,
  colors: {
    primary: "rgba(115, 49, 223, 0.75)",
    onPrimary: "rgba(255, 255, 255, 1)",
    primaryContainer: "rgba(235, 221, 255, 0.5)",
    onPrimaryContainer: "rgba(37, 0, 89, 1)",
    secondary: "rgba(99, 91, 112, 0.75)",
    onSecondary: "rgba(255, 255, 255, 1)",
    secondaryContainer: "rgba(233, 222, 248, 0.5)",
    onSecondaryContainer: "rgba(31, 24, 43, 1)",
    tertiary: "rgba(126, 82, 94, 0.75)",
    onTertiary: "rgba(255, 255, 255, 1)",
    tertiaryContainer: "rgba(255, 217, 225, 0.5)",
    onTertiaryContainer: "rgba(49, 16, 27, 1)",
    error: "rgba(186, 26, 26, 0.75)",
    onError: "rgba(255, 255, 255, 1)",
    errorContainer: "rgba(255, 218, 214, 0.5)",
    onErrorContainer: "rgba(65, 0, 2, 1)",
    background: "rgba(255, 251, 255, 0.5)",
    onBackground: "rgba(29, 27, 30, 1)",
    surface: "rgba(255, 251, 255, 0.5)",
    onSurface: "rgba(29, 27, 30, 1)",
    surfaceVariant: "rgba(231, 224, 235, 0.5)",
    onSurfaceVariant: "rgba(73, 69, 78, 1)",
    outline: "rgba(122, 117, 127, 0.5)",
    outlineVariant: "rgba(203, 196, 207, 0.5)",
    shadow: "rgba(0, 0, 0, 0.5)",
    scrim: "rgba(0, 0, 0, 0.5)",
    inverseSurface: "rgba(50, 48, 51, 0.5)",
    inverseOnSurface: "rgba(245, 239, 244, 0.5)",
    inversePrimary: "rgba(211, 187, 255, 0.5)",
    elevation: {
      level0: "transparent",
      level1: "rgba(248, 241, 253, 0.5)",
      level2: "rgba(244, 235, 252, 0.5)",
      level3: "rgba(240, 229, 252, 0.5)",
      level4: "rgba(238, 227, 251, 0.5)",
      level5: "rgba(235, 223, 251, 0.5)",
    },
    surfaceDisabled: "rgba(29, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
    backdrop: "rgba(50, 47, 55, 0.4)",
  },
};

export default WeatherTheme;
