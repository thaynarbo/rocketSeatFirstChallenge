import { View, Text } from "react-native";
import React from "react";

interface ICounterProps {
  text: string;
  number: number;
  fontColor?: string;
}
export default function Counter({
  text,
  number,
  fontColor = "#4EA8DE",
}: ICounterProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontWeight: "700", color: fontColor, marginRight: 8 }}>
        {text}
      </Text>
      <View
        style={{
          backgroundColor: "#333333",
          borderRadius: 10,
          paddingHorizontal: 8,
          paddingVertical: 2,
        }}
      >
        <Text
          style={{
            color: "#FAFAFA",
            fontWeight: "700",
          }}
        >
          {number}
        </Text>
      </View>
    </View>
  );
}
