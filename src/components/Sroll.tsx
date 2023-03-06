import { View, StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";
import { SocketEmits } from "../types";
import { PressableArrow } from "./PressableArrow";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  socketEmit: (emit: SocketEmits) => void;
}

export function Scroll({ socketEmit }: Props) {
  return (
    <LinearGradient
      colors={[
        COLORS.bigButtonGradientDark,

        COLORS.bigButtonGradientLight,
        COLORS.bigButtonGradientDark,
      ]}
      style={styles.container}
    >
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
    </LinearGradient>
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
