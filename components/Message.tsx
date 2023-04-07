/**
 * Messages
 */

import React from "react";
import { MD3Theme, Snackbar, Text } from "react-native-paper";

const Message = (props: {
  theme: MD3Theme;
  visible?: boolean;
  message?: string;
  onDismiss: () => void;
}) => (
  <Snackbar
    style={{
      backgroundColor: props.theme.dark
        ? "rgb(38, 35, 41)"
        : "rgb(248, 241, 253)",
    }}
    elevation={0}
    visible={props.visible || false}
    onDismiss={() => props.onDismiss()}
    action={{
      label: "Close",
      icon: "window-close",
      onPress: () => props.onDismiss(),
    }}
  >
    <Text>{props.message}</Text>
  </Snackbar>
);

export default Message;
