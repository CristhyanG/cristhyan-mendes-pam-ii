
import {useState} from 'react';
import { StyleSheet, TextInput, View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar () { 
//da para adicionar um onPress
    const [text, setText] = useState(null);

    return (
        <View style={styles.container} >

                <Pressable style={styles.iconContainer}>
                    <Icon 
                        name='search' 
                        style={styles.iconButton}
                        size={20}
                    />
                </Pressable>

                <TextInput 
                    style={styles.input}
                    placeholder="Pesquisar"
                    onChangeText={newText => setText(newText)}
                    value={text || ''}
                />


        </View>
    );
};

const styles = StyleSheet.create ({ 
    container: {
        flexDirection:'row',
    },

    input:{
        height: 40,
        backgroundColor: '#c5c5c5',
        padding: 5,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        width: 400,
    },

    iconContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#c5c5c5',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        alignItems: 'center'
        },
    iconButton:{
        padding: 10,
        color: '#3f3f3f',
    },
});