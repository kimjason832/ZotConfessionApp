import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

export default function Submission({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Thank You!
        </Text>
        <Text style={styles.text}>
            Your submission has been sucessfully submitted.
        </Text>
        <Button title="Submit another confession" onPress={() => navigation.navigate('Confessions')} color='#d1b79f'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    color: 'white',
    backgroundColor: '#f5edd0',
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
  title: {
    color:'#000000',
    fontSize: 50,
    textAlign: 'center',
  },
  text: {
    color:'#000000',
    fontSize: 15,
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
