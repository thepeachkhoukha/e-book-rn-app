import React from 'react'
import { Image, StyleSheet, View, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from '../components/AppText';
import colors from '../utils/colors';
import BookLoverGirl from '../assets/bookLoverGirl.svg';
import AppProgressBar from '../components/AppProgressBar';

export default function ProfileScreen() {
    return (
        <View style={styles.flexColumnContainer, styles.flex}>
            <View style={[styles.flexRowContainer, {justifyContent: "space-between", padding: 20}]}>
                <View style={styles.flexColumnContainer}>
                    <AppText style={styles.number}>188</AppText>
                    <AppText style={styles.label}>Follower</AppText>
                </View>
                <View style={styles.onlineContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../assets/picture.png")} style={styles.profileImage}/>
                    </View>
                </View>
                <View style={styles.flexColumnContainer}>
                    <AppText style={styles.number}>29</AppText>
                    <AppText style={styles.label}>Reading</AppText>
                </View>
            </View>
            <View style={[styles.flexRowContainer, {marginTop: 20}]}>
                <View style={styles.flexColumnContainer}>
                    <AppText style={styles.name}>Khouloud Khezami</AppText>
                    <View style={styles.flexRowContainer}>
                        <MaterialCommunityIcons name="map-marker"
                                    size={30}
                                    color={colors.grey}
                                />
                        <View style={styles.locationContainer}>
                            <AppText style={styles.location}>Bari, Italy</AppText>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bannerContainer}>    
                <View style={[styles.containerWithShadow, styles.flexRowContainer]}>
                    <View style={styles.bannerTextContainer}>
                        <AppText style={styles.bannerText}>Booking Prime</AppText>
                    </View>
                    <View style={styles.bannerBackgroundContainer}>
                        <View style={styles.bannerBackground}>
                            <BookLoverGirl width= "150%" height= "170%"/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.flexRowContainer, styles.actionsContainer]}>
                <View>
                    <AppText style={{fontWeight: "800", fontSize: 24}}>Continue Reading</AppText>
                </View>
                <View>
                    <AppText style={{color: colors.primary}}>View all</AppText>
                </View>
            </View>
            <View style={[styles.flexRowContainer, { height: "20%", marginTop: 10}]}>
                <View style={{ position: "absolute", zIndex: 1}}>
                    <View style={styles.currentBookImageContainer}>
                        <Image source={require("../assets/childrenbook.jpg")} style={styles.currentBookImage}/> 
                    </View>
                </View>
                <View style={[styles.flexColumnContainer, styles.currentBookDetails, {height: "120%"}]}>
                    <View style={{marginLeft: 40}}>
                        <AppText style={styles.currentBookTitle}>Amara The Brave</AppText>
                        <AppText style={styles.currentBookAuthor}>Matt Zhang</AppText>
                        <AppText style={styles.currentBookLastRead}>Last read 2020.10.10</AppText>
                        <View>
                            <AppProgressBar progress={0.8} />
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        justifyContent: "space-between",
        marginTop: 10,
        padding: 20,
    },
    bannerContainer: {
        alignItems: "center", 
        height: "20%", 
        justifyContent: "center",
        marginTop: 40,
    },
    bannerText: {
        color: colors.white,
        fontWeight: "800",
        fontSize: 28,
        textAlign: "center",
    },
    bannerTextContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%"
    },
    bannerBackground: {
        height: "100%", 
        marginTop: "-40%",
        marginLeft: "-25%",
        width: "100%", 
    },
    bannerBackgroundContainer: {
        height: "100%",
        width: "50%", 
    },
    containerWithShadow: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.45,
        shadowRadius: 6,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        height: "100%",
        width: "90%",
    },
    currentBookAuthor: {
        color: colors.grey,
        fontSize: 16,
        marginBottom: 5,
    },
    currentBookDetails: {
        backgroundColor: colors.creamWhite,
        borderRadius: 10,
        marginLeft: 80, 
        marginTop: 10,
        width: "75%",
        zIndex: -1, 
    },
    currentBookLastRead: {
        color: colors.primary,
        marginBottom: 10
    },
    currentBookImage: {
        borderRadius: 10,
        height: 200,
        width: 120,
    },
    currentBookImageContainer: {
        marginTop: -20, 
        marginLeft: -170, 
        shadowColor: "#000",
        shadowOpacity: 0.45,
        shadowRadius: 10,
        shadowOffset: {
            height: 2,
            width: 0,
        },
    },
    currentBookTitle: {
        fontWeight: "800",
        marginBottom: 5
    },
    flex: {
        flex: 1,
    },
    flexColumnContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    flexRowContainer: {
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    label: {
        color: colors.grey,
    },
    location: {
        textAlign: "center",
    },
    locationContainer: {
        alignItems: "center", 
        justifyContent: "flex-end",
        marginLeft: 10,
    },
    name: {
        fontWeight: "800",
        fontSize: 22,
    },
    number: {
        fontWeight: "600",
    },
    profileImage: {
        height: 100,
        width: 100,
    },
    profileImageContainer: {
        borderRadius: 50,
        height: 100,
        overflow: "hidden",
        width: 100,
    },
    onlineContainer: {
        alignItems: "center",
        borderRadius: 60,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: colors.green,
        borderRightColor: colors.white,
        height: 120,
        justifyContent: "center",
        width: 120,
    }
})
