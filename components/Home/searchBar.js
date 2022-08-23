import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function searchBar() {
  return (
    <View style = {{marginTop : 15 , flexDirection : 'row'}}>
      <GooglePlacesAutocomplete placeholder = 'Search'
      //query={{key : 'AIzaSyBKkPb9GvEsXzSZh8By6tucb-RNisKixZs'}}
      styles={{
        textInput:{
            backgroundColor : '#eee',
            borderRadius : 20,
            fontWeight : "700",
            justifyContent : 'center',
            marginTop : 7,
        },
        textInputContainer : {
            backgroundColor : '#eee',
            flexDirection : 'row',
            //alignItems : 'centre',
            marginRight : 25,
            borderRadius : 50,
        },
      }}
      renderLeftButton = {() => 
        <View style = {{justifyContent: 'center', flexDirection : 'row'}}>
            <Ionicons name = 'location-sharp' size={24}  style = {{marginLeft : 5 , marginTop : 15}}/>
        </View>
      }
      renderRightButton = {() => 
        <View style = {{
            flexDirection : 'row',
            //padding : 4,
            marginRight : 8,
            borderRadius : 30,
            backgroundColor : 'white',
            alignItems : 'center',
            margin : 8,
        }}>
            <AntDesign name = 'clockcircle' size={11} style = {{margin : 5}}/>
            <Text style = {{marginRight : 7 , fontSize : 15}}>Search</Text>
        </View>
    }
      />
    </View>
    
  )
}