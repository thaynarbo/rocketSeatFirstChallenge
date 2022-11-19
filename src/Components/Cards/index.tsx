import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { ITask } from "../../Screen/Home";
import { styles } from "./style";
import { Feather, MaterialIcons } from "@expo/vector-icons";
interface ICardsProps extends ITask {
  handleDone: (taskId: string) => void;
  handleRemove: (taskId: string) => void;
}

export default function Cards({
  done,
  texto,
  id,
  handleDone,
  handleRemove,
}: ICardsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleDone(id)}>
        {done ? (
          <MaterialIcons name="check-circle" size={24} color="#5E60CE" />
        ) : (
          <MaterialIcons
            name="radio-button-unchecked"
            size={24}
            color="#4EA8DE"
          />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.cardText,
          {
            color: done ? "#808080" : "#FAFAFA",
            textDecorationLine: done ? "line-through" : "none",
          },
        ]}
      >
        {texto}
      </Text>
      <Pressable onPress={() => handleRemove(id)}>
        {({ pressed }) => (
          <Feather
            name="trash-2"
            size={24}
            color={pressed ? "red" : "#808080"}
          />
        )}
      </Pressable>
    </View>
  );
}
