import React from "react";
import { Text, Image, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function MiniCard(props) {
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
      <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "45%",
            height: 100,
          }}
        />
        <View style={{ paddingLeft: 7 }}>
          <Text
            style={{
              fontSize: 17,
              color: textColor,
              width: Dimensions.get("screen").width / 2,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 5,
              color: textColor,
            }}
          >
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
