import React from 'react';

import {
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { RootStackParamList, RootTabParamList } from '../types'
import { Octicons, Ionicons, Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons' 
import {COLORS, FONTS, SIZES, icons} from '../constants';
import HomeScreen from '../src/screens/Home'
import ExpenseScreen from '../src/screens/Expenses'
import PortfolioScreen from '../src/screens/Portfolio'
import BankAccountScreen from '../src/screens/BankAccount'
import MoreScreen from '../src/screens/More'
import AllCategoryScreen from '../src/screens/AllCategoryScreen';
import { MaterialIcons } from '@expo/vector-icons'

export default function Navigation () {


  return (
    <NavigationContainer>

    <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = (() => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} options={({navigation}) => ({ headerShown: false })} />
     
      <Stack.Screen name="Category" component={AllCategoryScreen} 
      options={({ navigation, route }) => ({ 
        headerBackVisible: false,
        headerBackTitleVisible: false,
        headerTitle: (props) => <Text></Text>,
        // Add a placeholder button without the `onPress` to avoid flicker
        headerLeft: () => (
          <TouchableOpacity  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}
            onPress={() => navigation.goBack()}
          >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={COLORS.white} />
          <Text style={{...FONTS.h2, color: COLORS.white}}>Expenses</Text>
          </TouchableOpacity>
        ),
      // headerShown: true, 
      headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {color: COLORS.white},
      })}
      />
   
   </Stack.Navigator>
  )
})

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator () {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: true
      }}
    >

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTitleStyle: {color: COLORS.white},
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => <Octicons name="home" 
          color={focused ? COLORS.primary : COLORS.black} 
          size={25} />
        }}
      />
      <BottomTab.Screen
        name="Expenses"
        component={ExpenseScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTitleStyle: {color: COLORS.white},
          headerTitleAlign: 'center',
          title: 'Expenses',
          tabBarIcon: ({ focused }) => <Feather name="pie-chart" color={focused ? COLORS.primary : COLORS.black} size={25} />
          
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTitleStyle: {color: COLORS.white},
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => <Image source={icons.money_bag} style={{height: 25, width: 25, tintColor: focused ? COLORS.primary : COLORS.black  }}  />
        }}
      />
      <BottomTab.Screen
        name="BankAccounts"
        component={BankAccountScreen}
        options={{
          title: 'Bank Accounts',
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTitleStyle: {color: COLORS.white},
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => <FontAwesome5 name="list-alt" color={focused ? COLORS.primary : COLORS.black} size={25} />
        }}
      />
      <BottomTab.Screen
      name="More"
      component={MoreScreen}
      options={{
        title: 'More',
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTitleStyle: {color: COLORS.white},
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused }) => <Feather name="more-horizontal" color={focused ? COLORS.primary : COLORS.black} size={30} />
      }}
    />

    </BottomTab.Navigator>
  )
}
