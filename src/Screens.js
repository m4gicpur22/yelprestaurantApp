import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar';

const Screens = () => {
    const [Search, setSearch] = useState('');

    return (
        <View>
            <SearchBar 
            search={Search} 
            onSearchChange={newSearch => setSearch(newSearch)}
            onSearchSubmit={ () => console.log("Submitted!")}
            />
            <Text>Search Screen!</Text>
            <Text>{Search}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default Screens;