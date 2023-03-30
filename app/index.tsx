/**
 * Home Screen
 */

import React from "react";
import { Link } from "expo-router";
import { Screen } from "../components";
import { Text } from "react-native-paper";

const Home = () => {
  return (
    <Screen>
      <Text variant="displayMedium">Home Page</Text>
      <Link href={"/about"}>Go to About page</Link>
    </Screen>
  );
};

export default Home;
