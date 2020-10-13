import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../utils/colors";
export default function AppButton({
  title,
  onPress,
  color = "primary",
  textColor = "white",
  borderColor = "primary",
  width= "100%",
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.touchableStyle,
        backgroundColor: color,
        borderColor: borderColor,
        width: width
      }}
      onPress={onPress}
    >
      <Text style={[styles.touchableTextStyle, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    borderWidth: 2,
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
  },
  touchableTextStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
