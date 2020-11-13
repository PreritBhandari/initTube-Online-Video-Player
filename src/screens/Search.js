import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import { useSelector, useDispatch } from "react-redux";

export default function Search({ navigation }) {
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  const [value, setValue] = useState("");
  // const [miniCardData, setMiniCard] = useState([]);

  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });

  const [loading, setLoading] = useState(false);

  const searchResult = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${value}&type=video&key=AIzaSyAOq9z6qoAVnv3qLnsDbmPnGHFDfdpb5aM`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });

        // setMiniCard(data.items);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.headerColor }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          shadowColor: "#470000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          elevation: 3,
          backgroundColor: colors.headerColor,
        }}
      >
        <Ionicons
          name="md-arrow-back"
          color={textColor}
          size={32}
          onPress={() => navigation.navigate("rootHome")}
        />
        <TextInput
          style={{
            width: "70%",
            backgroundColor: "#e6e6e6",
            borderRadius: 7,
            padding: 10,
          }}
          value={value}
          onChangeText={setValue}
        />
        <Ionicons
          color={textColor}
          name="md-send"
          size={32}
          onPress={() => searchResult()}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 20,
          }}
          size="large"
          color="red"
        />
      ) : null}

      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </SafeAreaView>
  );
}
