import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSocket } from "./src/hooks/useSocket";
import { ArrowsGroup } from "./src/components/ArrowsGroup";
import { Connection } from "./src/components/Connection";
import Constants from "expo-constants";
import { COLORS } from "./config/colors";
import { Scroll } from "./src/components/Sroll";
import { Input } from "./src/components/Input";
import { BackgroundGradient } from "./src/components/BackgroudGradient";

export default function App() {
  const { socket, socketEmit } = useSocket();

  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <Connection isConnected={socket && socket !== "disconnected"} />
        <ArrowsGroup socketEmit={socketEmit} />
        <View>
          <Scroll socketEmit={socketEmit} />
        </View>
        <Input socketEmit={socketEmit} />
        <StatusBar style="light" />
      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 10,
    gap: 20,
    paddingHorizontal: 20,
  },
});
