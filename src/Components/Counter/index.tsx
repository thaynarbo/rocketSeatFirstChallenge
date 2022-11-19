import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

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
    <View style={styles.container}>
      <Text style={[styles.container, { color: fontColor }]}>{text}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{number}</Text>
      </View>
    </View>
  );
}
