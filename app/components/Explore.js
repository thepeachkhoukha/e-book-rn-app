import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Modal, FlatList } from 'react-native';
import colors from '../utils/colors';
import BookItem from "./BookItem";

const BASE_URL = "https://api.itbook.store/1.0"
export default function Explore() {
    const [books, setBooks] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const endpoint = "/new";

    const load = async() => {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const result = await response.json();

        if(response.ok) {
            setBooks(result["books"]);
        }
        else{
            setErrorMessage(result.errorMessage);
        }
    }

    useEffect(() => {
        load()
    }, [])
    return (
        <View>
            <FlatList data={books}
                keyExtractor={(item,index)=>index}
                renderItem={({item}) => (
                    <View style={styles.bookItem}>
                        <BookItem imageUrl={item.image} backgroundColor={colors.lightGreen} isbn13={item.isbn13} title={item.title} onPress={() => {console.log("pressed")}}/>
                    </View>
                )}
                numColumns={2}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    bookItem: {
        marginRight: 30, 
        marginTop: 20
    },
})
