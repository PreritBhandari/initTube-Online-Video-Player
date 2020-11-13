import React, { Component } from "react";
import { Text, View, SafeAreaView, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

export default function VideoPlayer({ route }) {
  const { videoId, title } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${videoId}`,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
    </SafeAreaView>
  );
}
