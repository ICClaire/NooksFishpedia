import { color } from '@rneui/base';
import { createTheme } from '@rneui/themed';

// used the createTheme function to help style components more easier
export const nookTheme = createTheme({
    components: {
        Button: {
            buttonStyle: {
                backgroundColor: '#f9ca46',
                borderRadius: 10,
            },
            titleStyle: {
                fontFamily: 'ComicNeue_400Regular',
                color: '#000',
            }
        },
        Text: {
            h1Style: {
                fontSize: 20,
                fontFamily: 'PortLligatSlab_400Regular',
            },
            style: {
                fontFamily: 'ComicNeue_400Regular',
                fontSize: 18
            }
        },
        // SearchBar: {
        //     inputStyle: {
        //         fontFamily: 'ComicNeue_400Regular',
        //         fontSize: 18,
        //         color: '#000',

        //     },
        //     containerStyle: {
        //         backgroundColor: '#f6f4ea',
        //         borderWidth: 1,
        //         borderRadius: 10,
        //     },
        //     placeholder: {
        //         color: '#777',
        //     }
        // },
        
    }
});