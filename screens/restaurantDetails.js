import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurentDetails/about.js'
import MenuItems from '../components/RestaurentDetails/menuItems.js'
import { Divider } from 'react-native-elements'

export default function resturantDetails() {
  return (
    <View>
        <About />
        <Divider width={1.8} />
        <MenuItems />
    </View>
    
  )
}