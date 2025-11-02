import type { StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  label: string | React.ReactNode;
  variant: "primary" | "secondary";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};