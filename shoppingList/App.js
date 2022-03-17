import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const [listItem, setListItem] = useState("");
  const add = () => {
    const str = listItem;
    setData([...data, { key: str }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textboxContainer}>
        <TextInput
          style={styles.textbox}
          onChangeText={(listItem) => setListItem(listItem)}
          value={listItem}
        />
        <Button onPress={add} title="Add to list" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textbox: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  textboxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
