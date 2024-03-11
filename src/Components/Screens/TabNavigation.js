import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoryScreen from './CategoryScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle: { backgroundColor: '#e5002b', alignItems: 'center', justifyContent: 'center' },
      }}
      >
        <Tab.Screen  
        options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={26}
                color={focused ? 'white' : '#b4b2b2'} 
              />
            ),
          }}
        name="Main" component={HomeScreen} 
        
        />
        <Tab.Screen 
        options={{
            tabBarShowLabel: false,
            headerShown: true,
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="category"
                size={26}
                color={focused ? 'white' : '#b4b2b2'} 
              />
            ),
          }}
        name="Category" component={CategoryScreen} />
        <Tab.Screen 
        options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={26}
                color={focused ? 'white' : '#b4b2b2'} 
              />
            ),
          }}
        name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})