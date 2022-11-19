import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  image: {
    alignSelf: "center",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    height: 54,
    color: "#FAFAFA",
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  form: {
    flexDirection: "row",
  },
  emptyContainer: {
    width: "100%",
    alignItems: "center",
    borderTopColor: "#333333",
    borderTopWidth: 1,
    borderStyle: "solid",
    marginTop: 20,
    paddingTop: 48,
  },
  infoContainer: {
    flex: 1,
    marginTop: 25,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    marginTop: 20,
  },
});
