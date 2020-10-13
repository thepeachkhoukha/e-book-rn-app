import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import AppTabView from '../components/AppTabView';
import AppText from '../components/AppText'

import BookItem from "../components/BookItem";
import { renderScene, renderTabBar } from '../navigation/HomeTabViewNavigation';
import colors from '../utils/colors';



const initialLayout = { width: Dimensions.get('window').width };
const routes= [
    { key: 'first', title: 'Explore' },
    { key: 'second', title: 'Bestsellers' },
];

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.interestActionContainer}>
                <AppText style={styles.interests}>Your Interest</AppText>
                <AppText style={styles.showAll}>Show All</AppText>
            </View>
            <View style={styles.bookItemsContainer}>
                <View style={styles.bookItem}>
                        <BookItem imageSource={require("../assets/bookCover.jpg")} backgroundColor={colors.pink} author="Marget Atwood" title="The testaments"/>
                </View>
                <View style={styles.bookItem}>
                        <BookItem imageSource={require("../assets/bookCover2.png")} backgroundColor={colors.lightBlue} author="Tayloy Jenkins Reid" title="Daisy Jones and the Six"/>
                </View>
            </View>
        
            <AppTabView renderTabBar={renderTabBar} routes_={routes} renderScene={renderScene} initialLayout={initialLayout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bookItem: {
        marginRight: 30,
    },
    bookItemsContainer: {
        display: "flex",
        flexDirection: "row"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 20,
    },
    scene: {
        flex: 1,
    },
    interests: {
        fontWeight: "800"
    },
    interestActionContainer: {
        marginBottom: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    showAll: {
        color: colors.primary,
        fontWeight: "800"
    }
})
