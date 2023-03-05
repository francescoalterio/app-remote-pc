import { View, StyleSheet, Text } from "react-native";

interface Props {
  isConnected: boolean | undefined;
}

export function Connection({ isConnected }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Connection</Text>
      <View
        style={[
          styles.connection,
          { backgroundColor: isConnected ? "green" : "red" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#29283d",
    paddingHorizontal: 30,
    paddingVertical: 10,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
  },
  connection: {
    width: 10,
    height: 10,
    borderColor: "white",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  text: {
    color: "white",
  },
});
