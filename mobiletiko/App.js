import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const buttonPressed = () => {
    Alert.alert('Alert','You typed:'+ text)
  }

  return (
    <View style={styles.container}>
      <Image
      style={{Width:250, height:100}}
      source={require('./img/Gringotts_Head_Goblin.jpg')}
      />
      <Text style={styles.altertext} >Red text</Text>
      <Button onPress={buttonPressed} title="Press Me" />
      <TextInput
      style={{width: 200, borderColor: 'red', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  altertext: {
    fontSize: 18,
    color: 'red'
  },
});
