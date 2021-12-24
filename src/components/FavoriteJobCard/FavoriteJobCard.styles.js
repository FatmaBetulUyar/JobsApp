import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#EAEAEA",
    margin: 10,
    borderWidth: 1,
    borderColor:'#EAEAEa',
    alignItems:'center'
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
    marginBottom: 15,
  },
  company: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  place: { flexDirection: "row", justifyContent: "flex-start" },
  company_name: {
    fontSize: 16,
    margin: 5,
    marginBottom: 10,
    marginLeft: 14,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 15,
    marginLeft: 5,
    paddingLeft: 25,
  },

  buttonContainer: {
    backgroundColor: "#CD1818",
    width: 250,
    height: 30,
    borderRadius: 5,
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
    margin:20,
    marginBottom: 10,
    marginHorizontal: 5,
    alignSelf: "center",
  },
  text: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    alignItems: "center",
    paddingRight: 5,
  },
});
