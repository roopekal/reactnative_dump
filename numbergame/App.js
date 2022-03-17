import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {


const [count, setCount] = useState(0)
const [guess, setGuess] = useState(0)
const [text, setText] = useState("Guess a number between 1-100")
const [answer, setAnswer] = useState(0)

useEffect(() => {
  startGame();
}, [])

const startGame = () => {
setAnswer(Math.floor(Math.random()*100+1))
setCount(0)
setText("Guess a number between 1-100")
}

const makeGuess = () => {
if (guess == answer){
  Alert.alert("You guessed the number in "+count+" guesses")
  startGame();
  setCount(count+1)
}
else if(guess < answer){
setText("You guessed too LOW")
setCount(count+1)
}else if(guess > answer){
  setText("You guessed too HIGH")
  setCount(count+1)
  }

}


  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
      keyboardType='number-pad'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
        onChangeText={guess =>  setGuess(guess)}
        value={guess}
        
      />
      <Button
      onPress={makeGuess}
      title="Make a guess"
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
});
