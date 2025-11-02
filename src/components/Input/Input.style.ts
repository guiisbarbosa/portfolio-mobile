import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  inputArea: {
    width: "100%",
    height: 50,
    backgroundColor: theme.colors.c800,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.c700,
    padding: 12,
    color: theme.colors.neutralLight,
    fontSize: 16,
    marginBottom: 20,
  },
  inputLabel: {
    color: theme.colors.neutral,
    fontSize: 16,
    marginBottom: 8,
  }
})