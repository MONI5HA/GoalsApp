import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
export default function App() {
  const [enteredText, setenterText] = useState("");
  const [goals, setgoals] = useState([]);
  function addGoalHandler() {
    setgoals((currentGoals) => [...currentGoals, enteredText]);
  }
  function inputHandler(enteredText) {
    setenterText(enteredText);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Add Your Todays Goals"
          onChangeText={inputHandler}
        ></TextInput>
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View
              key={itemData.index}
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <Text>{itemData.item}</Text>
            </View>
          )}
          style={styles.goalContainer}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 80,
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    width: "70%",
    height: 40,
    borderColor: "Black",
    borderWidth: 1,
    padding: 20,
    marginRight: 10,
    color: "black",
  },
  goalContainer: {
    flex: 7,
    padding: 20,
    width: "100%",
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
