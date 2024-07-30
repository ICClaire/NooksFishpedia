import { View, Image, StyleSheet, Linking } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';


// Used the navigation route parameter to access the passed data on another screen
export default function FishDeets({route}) {

  // destructuring the fish object data using route.params
  // need the .params to take out the data needed
  // used fishItem to access the fish object from FishLists.js
  const {fishItem} = route.params

  // declare a fishLink variable to access the link property in the fish object
  const fishLink = fishItem.url
  
  // Just changed the fish to fishItem
  return (
    <View style={styles.container}>
      
      {/* used a Card to display the data */}
      <Card
        containerStyle={styles.card}
      >

      {/* Displays the name, image, and other properties from the fish object */}
      <Card.Title 
       h1 style ={styles.title}
       >{fishItem.name}</Card.Title>
      <Card.Divider />
      <Image 
        source={{ uri: fishItem.image_url }}
        style={styles.image}
      />
      <Text
        style={styles.bells}
        >
          <Image 
          source={require('../assets/bells.png')}
          style={styles.bell}
          />{fishItem.sell_nook}</Text>
      <View
        style={styles.info}>
        <Text>Location: {fishItem.location}</Text>
        <Text>Rarity: {fishItem.rarity}</Text>
        <Text>Shadow: {fishItem.shadow_size}</Text>
      </View>
      
      {/* This function helps open the link property that was declared earlier when the button is pressed */}
      {/* Used the Linking.openURL method to open the link */}
      <Button
        onPress={ () => Linking.openURL(fishLink) }
        title='More info' />
    </Card>
    <Text 
      style={styles.reference}
      > Data from Nookipedia </Text>
    </View>
  )
}

// used to style components
const styles = StyleSheet.create ({
    container:{
      backgroundColor: '#f6f4ea',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,
    },
    reference: {
      marginTop: 20,
      fontSize: 15
    },
    image: {
      width: 300,
      height: 300
    },
  
    bells: {
      alignSelf: 'center',
      margin: 20,
      paddingBottom: 60,
      height: 100
    },

    bell: {
      width: 25,
      height: 25,
      paddingBottom: 50
    },
    bells: {
      alignSelf: 'center',
      margin: 10
    },
    card: {
     borderRadius: 25
    },
    info: {
      paddingTop: 15,
      paddingBottom: 15,
      gap: 5
    },
    title: {
      color: '#382409', 
    }

})
