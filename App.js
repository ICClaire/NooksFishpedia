// Importing different libraries and components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native'

import { ThemeProvider } from '@rneui/themed';
import { nookTheme } from './themes/nookTheme';

import { useFonts } from 'expo-font';
import { ComicNeue_400Regular } from '@expo-google-fonts/comic-neue'
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab'

import MainMenu from './screens/MainMenu';
import Amiibo from './screens/Amiibo';
import HomeScreen from './screens/HomeScreen';
import FishLists from './screens/FishLists';
import FishDeets from './screens/FishDeets';

const Stack = createNativeStackNavigator();

export default function App() {

  // Used the useFont hook to load the Comic Neue and PortLligat fonts
  // Ensures that the fonts are loaded before it renders the rest of the page components
  let [fontsLoaded] = useFonts({
    ComicNeue_400Regular,
    PortLligatSlab_400Regular
  });
  // The condition states that if its not loaded, it will return a Text message component to indicate to the user that they have to wait
  if (!fontsLoaded) {
    return <Text>Loading..</Text>;
  }

  // This helps navigate through three different screen
  // The navigation is contained inside the theme prodivder to ensure that the theme specified is applied to the screen components
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={nookTheme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerTitleStyle:{
              fontWeight: 'bold',
            }}}
          >
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ 
              headerShown: false,
             }}
            />
            <Stack.Screen
            name="Amiibo"
            component={Amiibo}
            options={{
               headerShown: true, 
               headerStyle: {
                backgroundColor: '#f9ca46',
               }
              }}
            />
            <Stack.Screen
            name="Main Menu"
            component={MainMenu}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Lists"
            component={FishLists}
            options={{ 
              headerShown: true,
              headerStyle: {
                backgroundColor: '#f9ca46',
              }
            }}
            />
            <Stack.Screen 
            name="Fish Details"
            component={FishDeets}
            options={{
              headerStyle: {
                backgroundColor: '#f9ca46',
              }

            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


