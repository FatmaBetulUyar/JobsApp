import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    margin: 10,
    flexDirection: "row",
    borderRadius: 8,
  },
  body_container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#EAEAEA",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
    marginBottom: 15,
  },
  company_name: {
    fontSize: 16,
    margin: 5,
    marginBottom: 10,
    marginLeft: 14,
  },
  place: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  company: { flexDirection: "row", padding: 1, justifyContent: "flex-start" },
  location: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 15,
    marginLeft: 5,

    paddingLeft: 15,
  },
  level: {
    textAlign: "right",
    fontSize: 16,
    color: "#CD1818",
    fontWeight: "bold",
    margin: 10,
  },
});
