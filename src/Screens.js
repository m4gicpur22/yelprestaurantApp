import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar';
import useResults from './Hooks/useResults';
import Resultlist from './Components/Resultlist';

const Screens = () => {
    const [search, setSearch] = useState('');
    const [yelpApi, results, errormssg] = useResults();
    
    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

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

            <Resultlist results={filterByPrice('$')}  title="Cost Effective"/>
            <Resultlist results={filterByPrice('$$')} title="Bit Pricier" />
            <Resultlist results={filterByPrice('$$$')} title="Big Spender" />
        </View>
    );
}

const style = StyleSheet.create({

});

export default Screens;