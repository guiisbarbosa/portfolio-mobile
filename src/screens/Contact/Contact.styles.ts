import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.c950,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    justifyContent: "flex-start",
  },
  titles: {
    fontSize: 16,
    color: theme.colors.neutralLight,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  connectContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  connectButtonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
