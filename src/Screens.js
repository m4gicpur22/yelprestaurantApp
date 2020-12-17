import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar';

import yelpKey from './API/yelp';


const Screens = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [errormssg, setErrormssg] = useState('');

    const yelpApi = async (searchTerm) => {

        try {
            const res = await yelpKey.get('/search', {
                params: {
                    limit: 50,
                    search: searchTerm,
                    location: 'orlando'
                }
            });
            setResults(res.data.businesses);
        }
        catch(err){
            console.log("Error with api call of: " + err);
            setErrormssg('Error with yelp API call');
        };
    }

    return (
        <View>
            <SearchBar 
                search={search} 
                onSearchChange={setSearch}
                onSearchSubmit={() => yelpApi(search)}
            />
            {errormssg ? <Text>{errormssg}</Text>:null}
            <Text>Search Screen!</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default Screens;