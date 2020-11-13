import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Explore() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=20&type=video&key=AIzaSyAOq9z6qoAVnv3qLnsDbmPnGHFDfdpb5aM`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setPopular(data.items);
      });
  }, [popular.items]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          backgroundColor: "red",
          width: "97%",
          height: 50,
          borderRadius: 15,
          margin: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 25,
            marginTop: 10,
          }}
        >
          Most Popular
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.videoId}
        data={popular}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
}
