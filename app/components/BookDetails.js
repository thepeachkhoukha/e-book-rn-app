import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../utils/colors';
import AppStar from './AppStar';
import AppText from './AppText';

const BASE_URL = "https://api.itbook.store/1.0";
const endpoint = "/books";

export default function BookDetails({isbn13, backgroundColor}) {
    const [bookDetails, setBookDetails] = useState(null);
    const loadBookDetails = async () => {
        const response = await fetch(`${BASE_URL}${endpoint}/${isbn13}`);
        const result = await response.json();
        console.log(result);
        if(response.ok){
            setBookDetails(result);
            console.log(bookDetails["image"]);
        }
    }
    useEffect(() => {
        loadBookDetails();
    }, [])
    return (
        <View style={ [styles.container, styles.flexColumn] }>
            {bookDetails && <View style={[styles.generalDetailsContainer, {backgroundColor: backgroundColor}]}>
                    <View style={[styles.flexColumn]}>
                        <View style={styles.generalDetailsImageContainer}>
                            <Image source={{uri: bookDetails["image"]}} style={styles.generalDetailsImage}/>
                        </View>
                        <View style={styles.flexColumn}>
                            <AppText style={styles.title}>{bookDetails["title"]}</AppText>
                            <AppText style={styles.authors}>{bookDetails["authors"]}</AppText>
                            <AppText style={styles.authors}>{bookDetails["pages"]} pages</AppText>
                        </View>
                        <AppStar initialStarRating={bookDetails["rating"]}/>
                    </View>
                </View>
            }
            {bookDetails && <View style={[styles.flex, styles.detailsContainer]}>
                    <AppText style={styles.description}>{bookDetails["desc"]}</AppText>

                    <View style={styles.actions}>
                        <View style={[styles.priceContainer, {borderColor: backgroundColor}]}>
                            <AppText style={styles.price}>{bookDetails["price"]}</AppText>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={[styles.previewContainer, {backgroundColor: backgroundColor}]}>
                                <AppText style={styles.preview}>Free Preview</AppText>
                            </View>
                        </TouchableWithoutFeedback>
                     </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    actions: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40
    },
    authors: {
        fontSize: 20,
        textAlign: "center",
    },
    container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
    },
    detailsContainer: {
        padding: 20,
        width: "100%"
    },
    description: {
        textAlign: "justify",
    },
    flex: {
        flex: 1
    },
    flexColumn: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    generalDetailsContainer: {
        borderBottomRightRadius: 75, 
        borderBottomLeftRadius: 75, 
        height: "50%", 
        width: "100%", 
    },
    generalDetailsImage: {
        height: 200,
        width: 200,
    },
    generalDetailsImageContainer: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        borderRadius: 10,
    },
    price: {

    },
    priceContainer: {
        alignItems: "center",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 2,
        height: 60,
        justifyContent: "center",
        width: 120,
    },
    preview: {
        color: colors.white,
        fontWeight: "600"
    },
    previewContainer: {
        alignItems: "center",
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        height: 60,
        justifyContent: "center",
        width: 120,
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        textAlign: "center",
    },
})
