import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { Image } from 'react-native'

export default function Home({navigation}) { 
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
          <Image source={require('./assets/zotconfessions-removebg-preview.png')} style={{width: 500, height: 220}} />
      </View>
      <View style={styles.extraContainer}>
          <Text  style={styles.text}>Share your anonymous confessions{"\n"} with UCI students :) </Text>
      </View>
      <View style={styles.middleContainer}>
        <View>
          <Button style={styles.button} title="Submit a Confession" onPress={() => navigation.navigate('Confessions')} color='#d1b79f'/>
        </View>
      </View>
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
  topContainer: {
    flexDiretion: 'row',
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 80,
  },
  text: {
    color:'#000000',
    fontSize: 18,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    color: '#00000',
    backgroundColor: 'black',
    width: 120,
    alignItems: 'center',
    borderBlockColor: "brown",
    aspectRatio: 0.8, 
  },
  box: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
