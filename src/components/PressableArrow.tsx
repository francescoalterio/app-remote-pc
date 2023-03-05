import { useState } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  iconName: string;
  onPressIn: () => void;
  onPressOut: () => void;
}

export function PressableArrow({ iconName, onPressIn, onPressOut }: Props) {
  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Icon name={iconName} size={50} color="white" />
    </Pressable>
  );
}
