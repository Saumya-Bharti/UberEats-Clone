import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function bottomTab() {
  return (
    <View style = {{flexDirection : 'row' ,
    margin : 3  ,
    marginHorizontal : 10 , 
    justifyContent : 'space-between'}}>
        <Icons icon = 'home' text = 'Home'/>
        <Icons icon = 'search' text = 'Browser'/>
        <Icons icon = 'shopping-bag' text = 'Grocery'/>
        <Icons icon = 'receipt' text = 'Orders'/>
        <Icons icon = 'user' text = 'Account'/>
    </View>
  )
}
const Icons = (props) => (
    <TouchableOpacity>
        <View >    
            <FontAwesome5 name = {props.icon} size = {25}       
                style = {{
                    margin : 5,
                    marginBottom : 3,
                    alignSelf : 'center'
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);
