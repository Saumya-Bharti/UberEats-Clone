import React from 'react'
import {createStackNavigation} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

export default function navigation() {
  const stack = createStackNavigation();

  const screenOption = {headerShow : false};

  return(
    <NavigationContainer>
        <Stack.Navigator initialRo
    </NavigationContainer>
  )
}