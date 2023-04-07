/**
 * Air Quality
 */

import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { List, MD3Theme } from "react-native-paper";
import Styles from "../styles";
import { Alert, Router } from "../types";

const Alerts = (props: { theme: MD3Theme; router: Router; data?: Alert[] }) => {
  return (
    <List.Section
      title="Alerts"
      style={{
        ...Styles.card,
        paddingBottom: 16,
        backgroundColor: props.theme.colors.elevation.level1,
      }}
    >
      {props.data === undefined || props.data.length === 0 ? (
        <List.Item title={"No alerts"} />
      ) : (
        <View style={{ height: props.data.length * 70 }}>
          <FlashList
            data={props.data}
            estimatedItemSize={70}
            renderItem={({ item }) => (
              <List.Item
                title={item.event}
                description={item.severity}
                onPress={() =>
                  props.router.push({
                    pathname: "alert",
                    params: {
                      alert: JSON.stringify(item)
                        .replaceAll("\\n", " ")
                        .replaceAll("&&", "")
                        .replaceAll("...", "")
                        .replaceAll("* ", ""),
                    },
                  })
                }
                left={(leftProps) => (
                  <List.Icon
                    icon={"alert"}
                    style={{
                      ...Styles.icon,
                      ...leftProps.style,
                      backgroundColor: props.theme.colors.elevation.level1,
                    }}
                  />
                )}
                right={(rightProps) => (
                  <List.Icon
                    icon={"chevron-right"}
                    style={{
                      ...Styles.icon,
                      ...rightProps.style,
                      backgroundColor: props.theme.colors.elevation.level1,
                    }}
                  />
                )}
              />
            )}
          />
        </View>
      )}
    </List.Section>
  );
};

export default Alerts;
