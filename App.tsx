import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSocket } from "./src/hooks/useSocket";

import Icon from "react-native-vector-icons/Ionicons";
import { PressableArrow } from "./src/components/PressableArrow";

export default function App() {
  const { socketEmit } = useSocket();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <PressableArrow
          iconName="arrow-up-outline"
          onPressIn={() => socketEmit("up")}
          onPressOut={() => socketEmit("cancel")}
        />
        <View style={{ flexDirection: "row" }}>
          <PressableArrow
            iconName="arrow-back-outline"
            onPressIn={() => socketEmit("left")}
            onPressOut={() => socketEmit("cancel")}
          />
          <TouchableOpacity>
            <Icon name="radio-button-on-outline" size={50} />
          </TouchableOpacity>
          <PressableArrow
            iconName="arrow-forward-outline"
            onPressIn={() => socketEmit("right")}
            onPressOut={() => socketEmit("cancel")}
          />
        </View>
        <PressableArrow
          iconName="arrow-down-outline"
          onPressIn={() => socketEmit("down")}
          onPressOut={() => socketEmit("cancel")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
