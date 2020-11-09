import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Card extends Component {
  render() {
    return (
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
            uri:
              "https://png.pngtree.com/thumb_back/fh260/background/20200625/pngtree-video-playback-logo-decoration-background-image_340160.jpg",
          }}
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <View style={{ flexDirection: "row", margin: 8 }}>
          <MaterialIcons name="account-circle" size={32} color="#212121" />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 80,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              This is amazing
              Coursejdsfjksdffdnvdfndlnvdscgsdhcshcfdshgfdsghfsfgdhfdghfdgnsjdkfskjdkjffjk
            </Text>
            <Text>This is amazing Course</Text>
          </View>
        </View>
      </View>
    );
  }
}
