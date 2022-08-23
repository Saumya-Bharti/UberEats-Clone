import { View, Text, ScrollView, FlatList,SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTab from '../components/Home/headerTab'
import SearchBar from '../components/Home/searchBar'
import Categories from '../components/Home/categories'
import RestaurantItem from '../components/Home/restaurantItem'
import BottomTab from "../components/Home/bottomTab.js"
import { Divider } from 'react-native-elements'


export default function home() {
  return (
    <SafeAreaView style = {{flex : 1 , backgroundColor : '#eee'}}>
        <View style = {{backgroundColor : 'white' , padding : 25}}>
            <HeaderTab />
            <SearchBar />
        </View> 
        <ScrollView showsVerticalScrollIndicator = {false}>
          <Categories />
          <RestaurantItem/>
        </ScrollView>
        <Divider width={1} />
        <BottomTab />        
    </SafeAreaView>
  )
}