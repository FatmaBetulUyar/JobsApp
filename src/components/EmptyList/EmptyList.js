import React from "react";
import { Text, View } from "react-native";

function EmptyList() {
  return (
    <View>
      <Text style={{fontSize:18,margin:15}}>Henüz Favorilere ekleme yapmadınız.</Text>
    </View>
  );
}

export default EmptyList;
