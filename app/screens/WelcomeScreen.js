import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../utils/colors";
import WelcomeScreenBackground from "../assets/welcomeScreenBackground.svg"
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <WelcomeScreenBackground width="100%" height="50%" />
      <View style={[styles.container, styles.descriptionContainer]}>
        <AppText style={styles.title}>Start your journey</AppText>
        <AppText style={styles.description}>Access the 30+ millions books in various languages with an easy and simple monthly subscription and read anywhere, any device. First month is on us</AppText>
      </View>
      <AppButton
        title="Start free trial"
        color={colors.primary}
        textColor={colors.white}
        borderColor={colors.primary}
        width="90%"
        
      />
      <AppButton
        title="Later"
        color={colors.white}
        textColor={colors.primary}
        borderColor={colors.primary}
        width="90%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10
  },
  description: {
    color: colors.grey, 
    textAlign: "center"
  },
  descriptionContainer: {
    height: "30%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    paddingBottom: 20
  }
});
