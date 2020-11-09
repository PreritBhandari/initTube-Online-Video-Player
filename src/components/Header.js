import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

import Constant from "expo-constants";

export default class Header extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          height: 90,
          flexDirection: "row",
          justifyContent: "space-between",
          shadowColor: "#470000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          elevation: 4, //for android
        }}
      >
        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <MaterialCommunityIcons name="disc-player" size={45} color="red" />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: "2%",
            }}
          >
            initTube
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "5%",
            justifyContent: "space-around",
            width: 170,
          }}
        >
          <Entypo name="video-camera" size={30} color="#212121" />
          <FontAwesome name="search" size={30} color="#212121" />
          <FontAwesome name="exchange" size={30} color="#212121" />
        </View>

        <View></View>
      </SafeAreaView>
    );
  }
}
