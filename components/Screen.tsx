/**
 * Screen
 */

import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "react-native-paper";
import Styles from "../styles";
import Message from "./Message";
import { ScreenProps } from "../types";
import LoadingIndicator from "./LoadingIndicator";

export default function Screen(props: ScreenProps) {
  // Theme
  const theme = useTheme();

  return (
    <View style={Styles.screen}>
      <Stack.Screen
        options={{
          ...props.options,
          animation: "slide_from_right",
        }}
      />
      <StatusBar
        animated
        style={theme.dark ? "light" : "dark"}
        backgroundColor={theme.colors.elevation.level1}
      />
      {props.loading ? <LoadingIndicator theme={theme} /> : props.children}

      <Message
        theme={theme}
        message={props.message}
        visible={props.displayMessage}
        onDismiss={() =>
          props.onDismissMessage ? props.onDismissMessage() : {}
        }
      />
    </View>
  );
}
