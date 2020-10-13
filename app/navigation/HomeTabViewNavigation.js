
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SceneMap, TabBar } from 'react-native-tab-view';

import Explore from "../components/Explore";
import colors from '../utils/colors';

const FirstRoute = () => (
    <Explore/>
);
   
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}> 
        <Text>boo</Text> 
    </View>
);

export const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.primary, color: colors.black }}
      style={{ backgroundColor: colors.white, width: "auto" }}
      renderLabel={({ route, }) => (
        <Text style={{ color: "black", marginBottom: -15, fontSize: 22, fontWeight: "800" }}>
          {route.title}
        </Text>
      )}
    />
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
})