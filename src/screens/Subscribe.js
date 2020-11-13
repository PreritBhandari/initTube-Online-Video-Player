import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Header from "../components/Header";
import { useTheme } from "@react-navigation/native";

export default function Subscribe() {
  const { colors } = useTheme();
  const textColor = colors.iconColor;
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <Text style={{ fontSize: 60, fontWeight: "bold", color: textColor }}>
          initTube
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "400",
            marginTop: 30,
            color: textColor,
          }}
        >
          Developed By:
        </Text>

        <Text style={{ marginTop: 20, fontSize: 20, color: textColor }}>
          Prerit Bhandari
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "400",
            marginTop: 40,
            color: textColor,
          }}
        >
          Made With:
        </Text>
        <Text style={{ marginTop: 20, fontSize: 20, color: textColor }}>
          React Native
        </Text>
      </View>
    </View>
  );
}
