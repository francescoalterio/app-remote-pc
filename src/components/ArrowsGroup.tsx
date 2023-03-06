import { View, TouchableOpacity, StyleSheet } from "react-native";
import { PressableArrow } from "./PressableArrow";
import Icon from "react-native-vector-icons/Ionicons";
import { SocketEmits } from "../types";
import { COLORS } from "../../config/colors";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  socketEmit: (emit: SocketEmits) => void;
}

export function ArrowsGroup({ socketEmit }: Props) {
  return (
    <LinearGradient
      colors={[COLORS.bigButtonGradientDark, COLORS.bigButtonGradientLight]}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <PressableArrow
        iconName="caret-up"
        onPressIn={() => socketEmit("up")}
        onPressOut={() => socketEmit("cancelMove")}
      />
      <View style={styles.centerButtonsContainer}>
        <PressableArrow
          iconName="caret-back"
          onPressIn={() => socketEmit("left")}
          onPressOut={() => socketEmit("cancelMove")}
        />
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => socketEmit("click")}
        >
          <Icon name="disc" size={50} color={COLORS.white} />
        </TouchableOpacity>
        <PressableArrow
          iconName="caret-forward"
          onPressIn={() => socketEmit("right")}
          onPressOut={() => socketEmit("cancelMove")}
        />
      </View>
      <PressableArrow
        iconName="caret-down"
        onPressIn={() => socketEmit("down")}
        onPressOut={() => socketEmit("cancelMove")}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttonColor,
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
  centerButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  clickButton: {
    padding: 10,
    backgroundColor: COLORS.background,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
