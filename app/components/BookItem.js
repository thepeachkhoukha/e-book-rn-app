import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utils/colors';
import exploreColors from '../utils/exploreColors';
import AppText from './AppText';
import BookDetails from './BookDetails';
import Screen from './Screen';

export default function BookItem({imageUrl, title, isbn13 ,onPress}) {
    const [modalVisible, setModalVisible] = useState(false);

    function getRndInteger(min, max) {
        return  Math.floor(Math.random() * (max - min) ) + min;
    }

    const randomNumber = getRndInteger(0, 14)

    return (
        <>
            <TouchableWithoutFeedback onPress={(()=> {setModalVisible(true); onPress();})}>
                <View style={styles.bookItemContainer}>
                    <View style={[styles.bookCoverBackground, {backgroundColor: exploreColors[randomNumber]}]}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: imageUrl }} style={styles.image}></Image>
                        </View>
                    </View>
                    <View style={styles.bookDetailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen style={{backgroundColor: exploreColors[randomNumber]}}>
                    <View style={{justifyContent: "flex-end", alignItems: "flex-end", paddingRight: 20}}>
                        <TouchableWithoutFeedback onPress={() => {
                            setModalVisible(false);
                        }}>
                            <MaterialCommunityIcons name="close"
                                size={30}
                                color={colors.white}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <BookDetails isbn13={isbn13} backgroundColor={exploreColors[randomNumber]}/>
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    bookCoverBackground: {
        alignItems: "center",
        backgroundColor: colors.pink,
        borderRadius: 10,
        display: "flex",
        height: 150,
        width: 160
    },
    bookDetailsContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    bookItemContainer: {
        width: 160,
    },
    image: {
        borderRadius: 10,
        height: 150,
        width: 100,
        marginTop: -20,
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    title: {
        fontWeight: "800"
    }
})
