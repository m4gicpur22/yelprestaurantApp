import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelpKey from '../API/yelp';

const ResultDetails = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id'); //id parameter for yelp API

    const getResult = async (id) => {
        try { 
            const res = await yelpKey.get(`/${id}`);
            setResult(res.data);

        } catch (err) {
            console.log("Error with yelp API!");
        }
    };

    //component will mount
    useEffect( () => {
        getResult(id);
    }, []);

    //check if data hasnt been rendered yet
    if(!result)
        return null;

    return (
        <View>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        height: 200,
        width: 300
    },
    textStyle : {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ResultDetails;