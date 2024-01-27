import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Confessions({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          Enter your Confessions Below
        </Text>
        <TextInput style={styles.input}>
            
        </TextInput>
        <Button title="Submit" onPress={() => navigation.navigate('Home')} color='#d1b79f'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    color: 'white',
    backgroundColor: '#098bde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  text: {
    color:'#000000',
    fontSize: 30,
    textAlign: 'center',
  },
  button:{

  }
});
