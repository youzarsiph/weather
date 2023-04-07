/**
 * Alert Details
 */

import React from "react";
import { List, Text, useTheme } from "react-native-paper";
import { useSearchParams } from "expo-router";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import Styles from "../styles";
import { sources } from "../constants";
import { Screen } from "../components";
import { Alert as AlertType, Params } from "../types";
import { MasonryFlashList } from "@shopify/flash-list";

const Alert = () => {
  // Theme
  const theme = useTheme();

  // Alert
  const { alert } = useSearchParams<Params>();

  const data: AlertType = JSON.parse(alert || "{}");
  const effective = new Date(data.effective);
  const expires = new Date(data.expires);

  const dataList = [
    {
      title: "Type",
      description: data.msgtype,
    },
    {
      title: "Severity",
      description: data.severity,
    },
    {
      title: "Urgency",
      description: data.urgency,
    },
    {
      title: "Category",
      description: data.category,
    },
    {
      title: "Event",
      description: data.event,
    },
    {
      title: "Certainty",
      description: data.certainty,
    },
    {
      title: "Effective",
      description: effective.toLocaleString(),
    },
    {
      title: "Expires",
      description: expires.toLocaleString(),
    },
  ];

  const card = {
    ...Styles.card,
    paddingBottom: 16,
  };

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={Styles.bg}
      source={sources.sunny}
    >
      <Screen
        loading={false}
        message={""}
        displayMessage={false}
        onDismissMessage={() => {}}
        options={{ title: data.event }}
      >
        <ScrollView>
          <View style={Styles.view}>
            <View
              style={{
                ...Styles.card,
                padding: 16,
                marginTop: 8,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <Text variant="titleMedium">{data.headline}</Text>
            </View>
            <List.Section
              title={"Details"}
              style={{
                ...card,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <View style={{ height: 6 * 70 }}>
                <MasonryFlashList
                  numColumns={2}
                  data={dataList}
                  estimatedItemSize={70}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.title}
                      description={item.description}
                    />
                  )}
                />
                <List.Item title={"Areas"} description={data.areas} />
                <List.Item title={"Note"} description={data.note} />
              </View>
            </List.Section>

            <List.Section
              title={"Description"}
              style={{
                ...Styles.card,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <Text style={{ paddingHorizontal: 16 }}>{data.desc}</Text>
            </List.Section>

            <List.Section
              title={"Instructions"}
              style={{
                ...Styles.card,
                paddingBottom: 16,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <Text style={{ paddingHorizontal: 16 }}>{data.instruction}</Text>
            </List.Section>
          </View>
        </ScrollView>
      </Screen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    margin: 16,
    borderRadius: 16,
    paddingVertical: 64,
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

export default Alert;
