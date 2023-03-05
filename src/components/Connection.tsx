import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../config/colors";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  isConnected: boolean | undefined;
}

export function Connection({ isConnected }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Connection</Text>
      <Icon name={"cellular"} size={15} color={isConnected ? "green" : "red"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttonColor,
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
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  text: {
    color: COLORS.white,
  },
});
