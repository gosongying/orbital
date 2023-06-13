import React, { useEffect } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudyDashboardTab from './Tabs/StudyDashboardTab';
import StudyCommunityTab from './Tabs/StudyCommunityTab';
import AchievementTab from './Tabs/AchievementTab';
import SettingTab from './Tabs/SettingTab';
import { update, ref, onDisconnect, serverTimestamp, goOnline } from 'firebase/database';
import { database, auth } from '../../../firebase';

const HomePage = () => {

  console.log("Home");

  /*useEffect(() => {
    const userIdRef = ref(database, 'userId/' + auth.currentUser.uid);
    onDisconnect(userIdRef).update({status: serverTimestamp()});
    update(userIdRef, {
      status: true
    });
  }, []);*/

  const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'StudyDashboardTab') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'StudyCommunityTab') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'AchievementsTab') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (route.name === 'SettingTab') {
              iconName = focused ? 'menu' : 'menu-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#710EF1',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
          tabBarLabelStyle: {
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#710ef1',
          },
        })}>
        <Tab.Screen name={'StudyDashboardTab'} component={StudyDashboardTab} options={{ tabBarLabel: 'Study', headerShown: false }} />
        <Tab.Screen name={'StudyCommunityTab'} component={StudyCommunityTab} options={{ tabBarLabel: 'Community', headerShown: false }} />
        <Tab.Screen name={'AchievementsTab'} component={AchievementTab} options={{ tabBarLabel: 'Achievement', headerShown: false }} />
        <Tab.Screen name={'SettingTab'} component={SettingTab} options={{ tabBarLabel: 'Setting' ,headerShown: false }} />
      </Tab.Navigator>
    );
  };
  

export default HomePage