import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View style={styles.containterStyle}>
            <Image style={styles.Imagestyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, #ofReviews: {result.review_count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containterStyle : {
        marginLeft: 15
    },
    Imagestyle : {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    nameStyle : {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;