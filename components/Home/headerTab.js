import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import React, { useState } from 'react';

export default function headerTab() {
  const [activeTab , setactiveTab] = useState('Delivery');
  return (
    <View style = {styles.header}>
      <HeaderButton title = 'Delivery'
      btnColor = 'black' 
      textColor = 'white' 
      activeTab = {activeTab} 
      setactiveTab = {setactiveTab} />
      <HeaderButton title = 'Pickup'
      btnColor = 'white' 
      textColor = 'black' 
      activeTab = {activeTab} 
      setactiveTab = {setactiveTab} />
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity style = {{
    paddingHorizontal : 16,
    paddingVertical : 6,   
    backgroundColor : props.activeTab == props.title ? 'black' : 'white' ,
    borderRadius : 30,
  }}
  onPress = {() => props.setactiveTab(props.title)}>
    
    <Text style = {{color : props.activeTab == props.title ? 'white' : 'black' , fontWeight : 'bold'}}>
      {props.title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  header : {
    flexDirection: 'row',
    alignSelf : 'center',
    borderRadius : 30,
  },
  headerButton: {
    
  }
});