import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../utils/colors';
import AppText from './AppText';

export default function AppProgressBar({progress}) {
    return (
        <View style={styles.flexRowContainer}>
            <View style={styles.progressBarContainer}>
                <Progress.Bar progress={progress} width={150} />
            </View>
            <View style={styles.percentageContainer}>
                <AppText style={styles.percentage}>{progress*100}%</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexRowContainer: {
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    percentage: {
        color: colors.primary,
    },
    percentageContainer: {
        marginLeft: 10,
    },
    progressBarContainer: {
        marginTop: 7,
    }
})
