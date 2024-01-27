import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default function Home({navigation}) { 
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          ZotConfessions
        </Text>
        <Button title="Submit a Confession" onPress={() => navigation.navigate('Confessions')} color='#d1b79f'/>
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
  text: {
    color:'#000000',
    fontSize: 40,
  },
  button:{

  }
});
