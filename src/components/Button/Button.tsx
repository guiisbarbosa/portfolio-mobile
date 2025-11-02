import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "../../types/button.types";

import { styles } from "./Button.styles";

export const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          variant === "primary" ? styles.primary : styles.secondary, style
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonText,
            variant === "primary" ? styles.primaryText : styles.secondaryText,
          ]}
        >
          {label}
          
        </Text>
      </TouchableOpacity>
    </View>
  );
};
