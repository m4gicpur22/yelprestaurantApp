import React, {useState} from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';
import Resultlist from '../Components/Resultlist';

const Screens = ({}) => {
    const [search, setSearch] = useState('');
    const [yelpApi, results, errormssg] = useResults();
    
    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return ( //flexbox attribute of flex : 1 takes advantage of allowing view container element to expand the full screen
        <>
            <SearchBar 
                search={search} 
                onSearchChange={setSearch}
                onSearchSubmit={() => yelpApi(search)}
            />
            {errormssg ? <Text>{errormssg}</Text> : null}
            <ScrollView>
                <Resultlist results={filterByPrice('$')}  title="Cost Effective" />
                <Resultlist results={filterByPrice('$$')} title="Bit Pricier" />
                <Resultlist results={filterByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
}

export default Screens;