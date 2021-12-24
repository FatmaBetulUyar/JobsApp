import React from "react";
import config from "../../../config";
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import RenderHtml from "react-native-render-html";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./Details.styles";
import { MaterialIcons } from "@expo/vector-icons";
function Details({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useFetch(`${config.API_DETAIL_URL}/${id}`);
  console.log(data, "burası");
  console.log(`${config.API_DETAIL_URL}/${id}`);

  const { width } = useWindowDimensions();

  const source = {
    html: `${data.contents}`,
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.data_name}>{data.name}</Text>
        <View style={styles.company_container}>
        <MaterialIcons name="home-repair-service" size={24} color="black" />
           <Text style={styles.text}>Company:</Text>
        <Text style={styles.company_name}>{data.company.name}</Text> 
        </View>
        <View style={styles.location_container}>
        <MaterialIcons name="place" size={20} color="#CD1818" />
            <Text style={styles.text}>Location:</Text>  
          { data ? <Text style={styles.location_name}>{data.locations[0].name}</Text> : ""}
        </View>

      </View>
      <Text style={styles.title_detail}>Job Detail</Text>
      <View style={styles.html_container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <RenderHtml contentWidth={width} source={source} />
        </ScrollView>
      </View>
    </View>
  );
}

export default Details;
