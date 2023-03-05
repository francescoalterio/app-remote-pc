import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSocket } from "./src/hooks/useSocket";
import { ArrowsGroup } from "./src/components/ArrowsGroup";
import { Connection } from "./src/components/Connection";
import Constants from "expo-constants";

export default function App() {
  const { socket, socketEmit } = useSocket();

  return (
    <View style={styles.container}>
      <Connection isConnected={socket && socket !== "disconnected"} />
      <ArrowsGroup socketEmit={socketEmit} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161525",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 10,
    gap: 20,
  },
});
