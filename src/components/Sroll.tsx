import { View, StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";
import { SocketEmits } from "../types";
import { PressableArrow } from "./PressableArrow";

interface Props {
  socketEmit: (emit: SocketEmits) => void;
}

export function Scroll({ socketEmit }: Props) {
  return (
    <View style={styles.container}>
      <PressableArrow
        iconName="caret-up"
        onPressIn={() => socketEmit("scrollUp")}
        onPressOut={() => socketEmit("cancelScroll")}
      />
      <PressableArrow
        iconName="caret-down"
        onPressIn={() => socketEmit("scrollDown")}
        onPressOut={() => socketEmit("cancelScroll")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttonColor,
    borderRadius: 100,
    gap: 50,
    paddingHorizontal: 5,
  },
});
