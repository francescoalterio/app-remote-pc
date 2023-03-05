import { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";

export function Input() {
  const [text, setText] = useState<string>("");
  return (
    <TextInput
      style={styles.input}
      cursorColor="red"
      selectionColor={"red"}
      value={text}
      onChangeText={(x) => setText(x)}
      onBlur={() => setText("")}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.buttonColor,
    color: COLORS.white,
    width: "100%",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
