import { useState, useEffect } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { COLORS } from "../../config/colors";
import { SocketEmits } from "../types";

interface Props {
  socketEmit: (emit: SocketEmits, msg: string) => void;
}

export function Input({ socketEmit }: Props) {
  const [text, setText] = useState<string>("");
  const [prevText, setPrevText] = useState<string>("");

  useEffect(() => {
    if (!text) setText(" ");
    if (text || prevText) {
      if (text.length > prevText.length) {
        socketEmit("write", text[text.length - 1]);
      } else {
        socketEmit("write", "backspace ");
      }
    }
  }, [text]);

  const handleChangeText = (x: string) => {
    setPrevText(text);
    setText(x);
  };

  const handleBlur = () => {
    setText("");
    setPrevText("");
  };

  return (
    <TextInput
      style={styles.input}
      cursorColor="red"
      selectionColor={"red"}
      value={text}
      onChangeText={(x) => handleChangeText(x)}
      onBlur={handleBlur}
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
