/**
 * Settings Screen
 */

import React from "react";
import * as SecureStore from "expo-secure-store";
import { Button, List, RadioButton, useTheme } from "react-native-paper";
import { ImageBackground, ScrollView, View } from "react-native";
import Styles from "../styles";
import { State } from "../types";
import { Screen } from "../components";

interface SettingsState extends State {
  speed: string;
  theme: string;
  temperature: string;
  pressure: string;
}

const Settings = () => {
  // Theme
  const theme = useTheme();

  const card = {
    ...Styles.card,
    paddingBottom: 16,
    backgroundColor: theme.colors.elevation.level1,
  };

  // State
  const [state, setState] = React.useState<SettingsState>({
    loading: true,
    speed: "k",
    theme: "light",
    temperature: "c",
    pressure: "m",
  });

  // Message
  const [message, setMessage] = React.useState<string>("");
  const [displayMessage, setDisplayMessage] = React.useState<boolean>(false);

  // Load settings
  React.useEffect(() => {
    (async () => {
      const theme = await SecureStore.getItemAsync("theme");
      const speed = await SecureStore.getItemAsync("speed");
      const temperature = await SecureStore.getItemAsync("temperature");
      const pressure = await SecureStore.getItemAsync("pressure");

      setState({
        loading: false,
        speed: speed || "k",
        theme: theme || "light",
        temperature: temperature || "c",
        pressure: pressure || "m",
      });
    })();
  }, []);

  // Apply settings
  const applySettings = () => {
    (async () => {
      await SecureStore.setItemAsync("theme", state.theme);
      await SecureStore.setItemAsync("speed", state.speed);
      await SecureStore.setItemAsync("pressure", state.pressure);
      await SecureStore.setItemAsync("temperature", state.temperature);

      // Display success message
      setMessage("Settings applied, restart the app to reflect the changes");
      setDisplayMessage(true);
    })();
  };

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={Styles.bg}
      source={require("../assets/bgs/sunny.jpeg")}
    >
      <Screen
        options={{ title: "Settings" }}
        loading={state.loading}
        message={message}
        displayMessage={displayMessage}
        onDismissMessage={() => setDisplayMessage(false)}
      >
        <ScrollView>
          <List.Section title="Theme" style={card}>
            <RadioButton.Group
              value={state.theme}
              onValueChange={(value) => setState({ ...state, theme: value })}
            >
              <RadioButton.Item value="light" label="Light" />
              <RadioButton.Item value="dark" label="Dark" />
            </RadioButton.Group>
          </List.Section>

          <List.Section title="Speed" style={card}>
            <RadioButton.Group
              value={state.speed}
              onValueChange={(value) => setState({ ...state, speed: value })}
            >
              <RadioButton.Item value="k" label="Kilometer per hour" />
              <RadioButton.Item value="m" label="Mile per hour" />
            </RadioButton.Group>
          </List.Section>

          <List.Section title="Temperature" style={card}>
            <RadioButton.Group
              value={state.temperature}
              onValueChange={(value) =>
                setState({ ...state, temperature: value })
              }
            >
              <RadioButton.Item value="c" label="Celsius" />
              <RadioButton.Item value="f" label="Fahrenheit" />
            </RadioButton.Group>
          </List.Section>

          <List.Section title="Pressure" style={card}>
            <RadioButton.Group
              value={state.pressure}
              onValueChange={(value) =>
                setState({ ...state, pressure: value })
              }
            >
              <RadioButton.Item value="m" label="Millie" />
              <RadioButton.Item value="i" label="Inch" />
            </RadioButton.Group>
          </List.Section>

          <View style={{ ...card, ...Styles.btnContainer }}>
            <Button mode="contained" onPress={applySettings}>
              Apply Settings
            </Button>
          </View>
        </ScrollView>
      </Screen>
    </ImageBackground>
  );
};

export default Settings;
