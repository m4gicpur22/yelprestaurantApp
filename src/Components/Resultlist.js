import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const Resultlist = ({title, results, navigation}) => {
    //if one of the sections doesnt render any data, return null/take out the title
    if(!results.length){
        return null;
    }

    return <View style={styles.containterStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal={true}
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                );
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containterStyle : {
        marginBottom: 10
    }
});

export default withNavigation(Resultlist);