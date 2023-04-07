/**
 * Global styles
 */

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    borderRadius: 16,
    marginHorizontal: 8,
  },
  fullScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 3,
    borderRadius: 16,
  },
  bg: {
    flex: 1,
    paddingTop: 64,
  },
  view: {
    flex: 1,
    paddingBottom: 16,
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  btnContainer: {
    padding: 16,
    marginVertical: 16
  },
});

export default Styles;
