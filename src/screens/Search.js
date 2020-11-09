import React, { Component } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Search extends Component {
  state = {
    value: "",
  };

  setValue = (value) => {
    this.setState({
      value,
    });
    console.log(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            shadowColor: "#470000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            elevation: 3,
            backgroundColor: "white",
          }}
        >
          <Ionicons name="md-arrow-back" size={32} />
          <TextInput
            style={{ width: "70%", backgroundColor: "#e6e6e6" }}
            value={value}
            onChangeText={this.setValue}
          />
          <Ionicons name="md-send" size={32} />
        </View>
      </SafeAreaView>
    );
  }
}
