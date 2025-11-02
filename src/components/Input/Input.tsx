import React from "react";
import { View, TextInput, Text } from "react-native";

import { styles } from "./Input.style";
import { theme } from "../../theme";
import type { InputProps } from "../../types/input.types";

export const Input = ({label, style, ...props} : InputProps) => {
  return (
      <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          style={[styles.inputArea, style]}
          selectionColor={theme.colors.c400}
          {...props}
        />
      </View>
  );
};
