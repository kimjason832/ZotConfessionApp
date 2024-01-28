import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

export default function Submission({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.topBox}>
            <Image source={require('./assets/checkmark-removebg-preview.png')} style={styles.shrinkedImage} />
            <Text style={styles.title}>
                Thank You!
            </Text>
            <Text style={styles.text}>
                Your submission has been sucessfully submitted.
            </Text>
        </View>
        <View style={styles.middleBox}>
            <Button title="Submit another confession" onPress={() => navigation.navigate('Confessions')} color='#d1b79f'/>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBox: {
    flex: 1/3,
    justifyContent: 'flex-start',
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
    justifyContent: 'flex-end',
  },
  button:{
  },
  shrinkedImage: {
    width: 250,
    height: 250,
    alignItems: 'center',
    alignContent: 'center',
  }

});
