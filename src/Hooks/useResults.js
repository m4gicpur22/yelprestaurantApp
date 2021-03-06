import React, {useState, useEffect} from 'react';
import yelpKey from '../API/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errormssg, setErrormssg] = useState('');

    const yelpApi = async (searchTerm) => {

        try {
            const res = await yelpKey.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'orlando'
                }
            });
            setResults(res.data.businesses);
        }
        catch(err){
            console.log("Error with api call of: " + err);
            setErrormssg('Error with yelp API call');
        };
    };

    //initial state rendering
    useEffect(() => {
        yelpApi('pasta');
    }, []);

    return [yelpApi, results, errormssg];
};


