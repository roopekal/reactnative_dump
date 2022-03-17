import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Calculator({ navigation }) {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(0);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const subtract = () => {
    setResult(first - second);
    const str =
      first + "+" + second + "=" + (parseInt(first) - parseInt(second));
    setData([...data, { key: str }]);
  };
  const add = () => {
    setResult(parseInt(first) + parseInt(second));
    const str =
      first + "+" + second + "=" + (parseInt(first) + parseInt(second));
    setData([...data, { key: str }]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.numberContainer}>
        <Text>Result:{result}</Text>
        <TextInput
          keyboardType="number-pad"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(first) => setFirst(first)}
          value={first}
        />
        <TextInput
          keyboardType="number-pad"
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(second) => setSecond(second)}
          value={second}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={add} title="+" />
        <Button onPress={subtract} title="-" />
        <Button
          onPress={() => navigation.navigate("History", { data })}
          title="History"
        />
      </View>
    </View>
  );
}

export function History({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.historyContainer}>
      <Text>HISTORY</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  numberContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  historyContainer: {
    flex: 10,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
