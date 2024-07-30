import { StyleSheet, Image, View, Text} from 'react-native';
import { Button } from '@rneui/themed'

// Passed the navigation object in the HomeScreen parameter to help navigate to the specified page
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
       <Image style={styles.Image} source={require('../assets/fish2.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nook's Fishpedia</Text>
      </View>
      <Button
        title='Continue'
        onPress={() => navigation.navigate('Main Menu')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f6f4ea',
    },
    Image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
    titleContainer: {
      margin: 20
    },
    title: {
      fontSize: 40,
      fontFamily: 'PortLligatSlab_400Regular',
    },
})