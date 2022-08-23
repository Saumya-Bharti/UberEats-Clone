import { View, Text , Image, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import MaterailCommunityIcons from 'react-native-vector-icons/Ionicons'
import About from '../RestaurentDetails/about';

const localRestaurants = [
  {name : 'The Theque' , image : require('../../assets/images/res1.jpg') , rating : 4.5 , price : 12 , categories : ['Cafe' , 'Bar']},
  {name : 'Sharma Cafe' ,image : require('../../assets/images/res2.jpg') , rating : 4.7 , price : 123 , categories : ['Cafe' , 'Bar']},
  {name : 'Z - Cafe' ,image : require('../../assets/images/res3.jpeg') , rating : 4.2 , price : 123 , categories : ['Cafe' , 'Bar']},
  {name : 'Sharma Corner' ,image : require('../../assets/images/res4.jpeg') , rating : 4.1 , price : 123 , categories : ['Cafe' , 'Bar']},
];

export default function restaurantItem() {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      {localRestaurants.map((restaurant , index) =>
      <View key = {index} style = {{marginTop : 10, padding : 15 , backgroundColor : 'white' , borderRadius : 29}}>
        <RestaurantImage image = {restaurant.image}/>
        <ResturantInfo name = {restaurant.name} rating = {restaurant.rating} price = {restaurant.price} />
      </View>
      )}      
  </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
  <>
    <Image
        source = {props.image}
        style = {{width : '100%' , height : 160}}
    />
    <TouchableOpacity style = {{position : 'absolute' , right : 20 , top : 20}}>
      <MaterailCommunityIcons name = 'heart-outline' size = {25} color = 'pink' />
    </TouchableOpacity>
  </>
);

const ResturantInfo = (props) => (
  <View style = {{flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
    <View>
      <Text style = {{fontWeight : 'bold'}}>{props.name}</Text>
      <Text style = {{fontSize : 12 , color : 'gray'}}>35 - 40 min</Text>
    </View>
    <View  style = {{backgroundColor : '#eee' , height : 25 , width : 25 , borderRadius : 20 , justifyContent : 'center' , alignItems : 'center'}}>
      <Text>{props.rating}</Text>    
    </View>
  </View>  
)