import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({search, onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search" 
                value={search}
                onChangeText={newSearch => onSearchChange(newSearch)}
                onEndEditing={ () => onSearchSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1
    },
    iconStyle : {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;