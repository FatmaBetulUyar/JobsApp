import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation, setAuth } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Jobs");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="FAVORİTES"
          source={require("../../../assets/icons/favorite.png")}
          onPress={() => {
            navigation.navigate("Favorites");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="LOGOUT"
          source={require("../../../assets/icons/logout.png")}
          onPress={() => setAuth(false)}
        />
      </View>
    </View> 
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
