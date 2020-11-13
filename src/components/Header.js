import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });
  const { colors } = useTheme();
  const mycolor = colors.iconColor;
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.headerColor,
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
            fontWeight: "600",
            marginLeft: "2%",
            color: mycolor,
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
        <Entypo name="video-camera" size={30} color={mycolor} />
        <FontAwesome
          name="search"
          size={30}
          color={mycolor}
          onPress={() => navigation.navigate("Search")}
        />
        <FontAwesome
          name="exchange"
          size={30}
          color={mycolor}
          onPress={() =>
            dispatch({ type: "change_theme", payload: !currentTheme })
          }
        />
      </View>

      <View></View>
    </SafeAreaView>
  );
}
