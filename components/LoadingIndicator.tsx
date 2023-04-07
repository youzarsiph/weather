/**
 * Loading indicator
 */

import React from "react";
import Styles from "../styles";
import { View } from "react-native";
import { ActivityIndicator, MD3Theme } from "react-native-paper";

const LoadingIndicator = (props: { theme: MD3Theme }) => {
  return (
    <View style={Styles.fullScreen}>
      <View
        style={{
          ...Styles.card,
          padding: 26,
          backgroundColor: props.theme.colors.elevation.level1,
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    </View>
  );
};

export default LoadingIndicator;
