import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { Image } from 'react-native'

export default function Home({navigation}) { 
  return (
    <View style={styles.container}>
      <Image source={require('./assets/zotconfessions-removebg-preview.png')} style={{width: 500, height: 300}} />
      <Text style={styles.text}>
        Share your anonymous confessions with UCI students 
      </Text>
        <Button title="Submit a Confession" onPress={() => navigation.navigate('Confessions')} color='#d1b79f'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    color: 'white',
    backgroundColor: '#f5edd0',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 2,
    color:'#000000',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',

  },
  button:{
    flex: 3,
    color: '#728f5d',
    alignSelf: 'center',
  }
});
