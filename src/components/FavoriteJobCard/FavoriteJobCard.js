import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import styles from "./FavoriteJobCard.styles";

const FavoriteJobCard = ({ job, onSelect }) => {
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: { id } });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.body_container}>
          <Text style={styles.title} numberOfLines={1}>
            {job.name}
          </Text>
          <View style={styles.company}>
            <MaterialIcons name="home-repair-service" size={24} color="black" />
            <Text style={styles.company_name}>{job.company.name}</Text>
          </View>
          <View style={styles.place}>
            <MaterialIcons name="place" size={20} color="#CD1818" />
            <Text style={styles.place}>
              {job.locations && job.locations.length > 0
                ? job.locations[0].name
                : "No information"}
            </Text>
          </View>
           <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => removeFavorite(job.id)}
        >
          <Text style={styles.text}>Remove</Text>
        </TouchableOpacity>
        </View>

       
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteJobCard;
