import { View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';

export default function MainMenu({navigation}) {
  return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/MainMenu.png')}
        >
        <Text style={styles.title}>Welcome to Fishpedia</Text>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
                <Text 
                style={styles.header}
                >
                    Browse Fishes
                </Text>
                <Image 
                    source={require('../assets/Marine.jpeg')} 
                    alt='Marine Background' 
                    style={styles.marine}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Amiibo')}>
                <Text 
                style={styles.header}
                >
                    Search Amiibos
                </Text>
                <Image 
                    source={require('../assets/amiibo.png')} 
                    alt='Marine Background' 
                    style={styles.amiibo}
                />
            </TouchableOpacity>
        </View>
        
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 60,
        fontFamily: 'PortLligatSlab_400Regular',
        color: '#000',
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        marginTop: 100,
        paddingRight: 70,
        textAlign: 'left',        
    },
    header: {
        fontSize: 25,
        fontFamily: 'PortLligatSlab_400Regular',
        color: '#000',
        marginHorizontal: 10,
        marginBottom: 5,


    },
    container: {
        height: '60%',
        width: '100%',

    },
    marine: {
        width: '95%',
        height: 150,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 30,
    },
    amiibo: {
        width: '95%',
        height: 150,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#f6f4ea',
    }
});
