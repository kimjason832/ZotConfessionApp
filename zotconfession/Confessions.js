import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, {useState} from 'react';

export default function Confessions({navigation}) {
  function submit (){
    fetch("https://4364-169-234-101-254.ngrok-free.app", {
      method: "POST",
      headers: {
        'ngrok-skip-browser-warning': 1,
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        "name": inputText
      })
    }).then(res => res.json()).then(response  => {console.log("Hello", response)})
    navigation.navigate('Submission');

    setInputText('');
  }

  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image source={require('./assets/confessyoursins-removebg-preview.png')} style={styles.shrinkedImage} />
      </View>
      <View style={styles.middleBox}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter text here"
          onChangeText = {inputText => setInputText(inputText)}
          value = {inputText}
        />
      </View>
      <View style={styles.bottomBox}>
        <Button title="Submit" onPress={submit} color='#d1b79f'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5edd0',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 0,
  },
  middleBox: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 2,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: '80%',
    height: 350,
  },
  text: {
    color:'#000000',
    fontSize: 30,
    textAlign: 'center',
  },
  button:{

  },
  shrinkedImage: {
    width: 30,
    height: 30,
    aspectRatio: 10,
  }

});
