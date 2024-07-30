import {Text, Image, StyleSheet, TextInput, View} from 'react-native'
import { useState, useEffect } from 'react'

export default function Amiibo() {

  // used the useState hook to create a state variable for the search value, amiibo data, error, and loading
  // initial value is empty because we don't have any search value yet
  const [searchValue, setSearchValue] = useState('');
  const [amiiboData, setAmiiboData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Used conditional statement to check if searchValue is not empty
    if(!searchValue === '') {
      // then fetch data from the API with the parameter of the searchValue
      fetch(`https://www.amiiboapi.com/api/amiibo/?name=${searchValue}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      // convert the response to json
      .then(response => response.json())
      .then(data => {
        // set the amiibo data to the data from the API
        // Data is showing in console but not on the screen... WHY?
        console.log(data);
        setAmiiboData(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(true);
      })
    } else {
      // if searchValue is empty, empty data
      setAmiiboData([]); 
    }
    // added searchValue as a dependency to the useEffect hook so that it will run everytime the searchValue changes
  }, [searchValue]);

  // loading and error handling
  // if loading is visible, show loading text
  if (loading) {
    return <Text>Loading...</Text>;
  }

// if error is visible, show error message
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search ACNH Amiibos</Text>

      {/* // used the TextInput component */}
      {/* Will use this later to get value and search for amiibos */}
     <TextInput style={styles.searchBar}
      placeholder='Ex. Raymond' 
      onChangeText={text => setSearchValue(text)}
      value={searchValue}
      />
    {/* Why is it not showing up? */}
      <Text>{amiiboData.name}</Text>
      <Text>{amiiboData.character}</Text>
      <Image>{amiiboData.image}</Image>
      <Text>{amiiboData.amiiboSeries}</Text>
    
      
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
  searchBar: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 39,
    fontFamily: 'PortLligatSlab_400Regular',
    color: '#000',
    marginBottom: 20
  },
  Amiibo: {
    flex: 1,
    flexDirection: 'row',
  },
})
