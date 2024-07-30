// imported the necessary components and modules

import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, SearchBar } from '@rneui/themed';
import { useEffect, useState } from 'react';


// Inserted the navigation object in the parameter to ensure it has access to the specified screens
// This also provides access to the route, navigating between screens and passing the data
export default function FishLists({navigation}) {

  // Initializing state variables

  // This one is used to store the data fetched from the API
  // The Initial Value is an empty array because the data is an array of objects
  const [fishData, setFishData] = useState([]);

  // This is used to store the error message if the data is not fetched
  const [error, setError] = useState(null);

  // This one is used to store the loading state of the data
  const [loading, setLoading] = useState(false);

  // Used the 'useEffect' hook helps fetch the data from the API
  // and then sets the data, filtered data and loading state to true
  // Needed a key
  const key = 'ca581a10-25c4-4f5a-8160-58ca09092a2e';

  // Followed the documentation 'https://api.nookipedia.com/doc#/paths/~1nh~1fish/get' 
  // For the headers
  useEffect(() => {
    fetch('https://api.nookipedia.com/nh/fish', {
      method: 'GET',
      headers: {
        'X-API-KEY': key,
        'Accept-Version': '1.0.0', 
        'Content-Type': 'application/json',
        
      }
    })
    // Serialized the data to JSON
      .then(response => response.json())
      // Used the data to set the state of the data
      .then(data => {
        console.log(data);
        setFishData(data);
        // Stops the loading state once the data is fetched
        setLoading(false);
      },
      (error) => {
        // If error is found, setError is used to store the error message
        // and setLoading to true so that the error message is displayed
        // or can be false? and just need to display error so that it doesn't look like the 
        // server is still trying to fetch data
        setError(error);
        setLoading(true);
      })
  }, []);
  
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
  <View style={styles.container}>
    <Text
    style={styles.title}> Types of Fishes </Text>

    {/* Has a warning for the keyExtractor?, but it is working fine */}
    {/* How to fix, what is wrong? */}
    <FlatList
      data={fishData}
      numColumns={2}
      keyExtractor={fishItem => fishItem.id}
      renderItem={({item: fishItem}) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Fish Details', {fishItem: fishItem})}
        >
          <View style={styles.item}>
            <Image 
              style={styles.image}
              source={{uri: fishItem.image_url}}
            />
            <Text>{fishItem.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
  )
}

const styles= StyleSheet.create({
    container: {
      backgroundColor: '#f6f4ea',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      marginTop: 10,
      fontSize: 39,
      color: '#000',
      fontFamily: 'PortLligatSlab_400Regular'
    },

    item: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      margin: 8,
      padding: 40,
      borderRadius: 10,
      backgroundColor:'#fff',
      textAlign: 'center',
      aspectRatio: 1,
      width: 155,
      
    },

    list: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      padding: 10,
    },

    image: {
      width: 100,
      height: 100,
    },

    button: {
      height: 20,
    },
    h1: {
      fontSize: 50,
      fontFamily: 'SecularOne_400Regular'
    }
})

