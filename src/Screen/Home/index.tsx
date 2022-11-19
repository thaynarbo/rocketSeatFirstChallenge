import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import "react-native-get-random-values";
import React, { useState } from "react";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";
import Counter from "../../Components/Counter";
import Cards from "../../Components/Cards";
import { v4 } from "uuid";

export interface ITask {
  id: string;
  texto: string;
  done: boolean;
}

export default function Home() {
  const [textoTask, setTextoTask] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleDone = (taskId: string) => {
    const taskAtualizada = tasks.map((t) => {
      if (t.id === taskId) {
        return { ...t, done: !t.done };
      }
      return { ...t };
    });
    setTasks(taskAtualizada);
  };

  const handleRemove = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const handleAddTask = () => {
    if (!textoTask) return;
    setTasks((prev) => [...prev, { id: v4(), texto: textoTask, done: false }]);
    setTextoTask("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./../../../assets/Logo.png")}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTextoTask}
          value={textoTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={20} color="#FAFAFA" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.statusContainer}>
          <Counter text="Criadas" number={tasks.length} />
          <Counter
            text="Concluidas"
            number={tasks.filter((t) => t.done).length}
            fontColor="#8284FA"
          />
        </View>
        <FlatList
          data={tasks}
          contentContainerStyle={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <Cards
              key={item.id}
              handleDone={(id) => handleDone(id)}
              handleRemove={(id) => handleRemove(id)}
              {...item}
            />
          )}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyContainer}>
                <Image source={require("./../../../assets/clipboard.png")} />
                <Text
                  style={{ color: "#808080", fontWeight: "700", marginTop: 16 }}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={{ color: "#808080" }}>
                  Crie tarefas e organize seus items a fazer
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
