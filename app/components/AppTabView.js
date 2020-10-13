import React, { useState } from 'react';
import { TabView } from 'react-native-tab-view';


export default function AppTabView({renderTabBar, routes_, renderScene, initialLayout}) {

    const [index, setIndex] = useState(0);
    const [routes] = useState(routes_);

    return (
        <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
        />
    )
}

