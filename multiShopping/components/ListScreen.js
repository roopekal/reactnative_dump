import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Item from "./ListItem";
export default function ListScreen() {
  const [item, setItem] = useState();
  const [amount, setAmount] = useState("");

  //KORVAA DATABASELLA
  const [itemArray, setItemArray] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("items/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        const prods = Object.values(data);
        setItemArray(prods);
      });
  }, []);
  //Adds item to array
  const handleAddItem = () => {
    Keyboard.dismiss();
    setItem(null);
    firebase.database().ref("items/").push({ item: item });
    console.log("item added");
  };
  //Deletes item from array
  const boughtItem = (index) => {
    let itemsCopy = [...itemArray];
    itemsCopy.splice(index, 1);
    setItemArray(itemsCopy);
    console.log("item deleted");
    handleRemove(index);
  };
  //  FIX THIS SHIT
  const handleRemove = (index) => {
    firebase.database().ref().child(index).remove();
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <Text style={styles.sectionTitle}>Shopping List</Text>
        <View style={styles.items}>
          {itemArray.map((item, index) => {
            return (
              <Item
                key={index}
                text={item.item}
                boughtItem={() => boughtItem(index)}
              />
            );
          })}
          {/*<Item text={"Item 1"} />
          <Item text={"Item 2"} />*/}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write item here"}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  itemWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
