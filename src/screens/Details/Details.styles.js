import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  html_container: {
    margin: 10,
    padding: 5,
  },
  title_container: {
    margin: 15,
    padding: 10,
    backgroundColor: "#EAEAEA",
  },
  data_name: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 12,
  },
  company_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    alignItems: "center",
  },
  location_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 8,
    alignItems: "center",
  },
  company_name: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  location_name: {
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
  },

  title_detail: {
    margin: 10,
    marginBottom: 3,
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#CD1818",
  },
  scrollView: {
    
  },
  button_container: {
    justifyContent: 'space-evenly',
    marginLeft:25,
    width:Dimensions.get('window').width * 0.9,
  },
});
