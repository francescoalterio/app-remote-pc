import { View, TouchableOpacity, StyleSheet } from "react-native";
import { PressableArrow } from "./PressableArrow";
import Icon from "react-native-vector-icons/Ionicons";
import { SocketEmits } from "../types";

interface Props {
  socketEmit: (emit: SocketEmits) => void;
}

export function ArrowsGroup({ socketEmit }: Props) {
  return (
    <View style={styles.container}>
      <PressableArrow
        iconName="arrow-up-outline"
        onPressIn={() => socketEmit("up")}
        onPressOut={() => socketEmit("cancel")}
      />
      <View style={styles.centerButtonsContainer}>
        <PressableArrow
          iconName="arrow-back-outline"
          onPressIn={() => socketEmit("left")}
          onPressOut={() => socketEmit("cancel")}
        />
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => socketEmit("click")}
        >
          <Icon name="radio-button-on-outline" size={50} color="white" />
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#29283d",
    alignItems: "center",
    padding: 10,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  centerButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  clickButton: {
    margin: 10,
  },
});
