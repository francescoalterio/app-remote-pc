import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../config/colors";

interface Props {
  iconName: string;
  onPressIn: () => void;
  onPressOut: () => void;
}

export function PressableArrow({ iconName, onPressIn, onPressOut }: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePressIn = () => {
    onPressIn();
    setIsPressed(true);
  };

  const handlePressOut = () => {
    onPressOut();
    setIsPressed(false);
  };

  return (
    <Pressable
      style={{ opacity: isPressed ? 0.2 : 1 }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Icon name={iconName} size={50} color={COLORS.white} />
    </Pressable>
  );
}
