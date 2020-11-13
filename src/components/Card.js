import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function Card(props) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("VideoPlayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View
        style={{
          marginBottom: 5,
          borderBottomWidth: 2,
          borderBottomColor: "silver",
          shadowColor: "#470000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
        }}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <View style={{ flexDirection: "row", margin: 8 }}>
          <MaterialIcons name="account-circle" size={32} color={textColor} />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: textColor,
                width: Dimensions.get("screen").width - 80,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {props.title}
            </Text>
            <Text style={{ color: textColor }}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
