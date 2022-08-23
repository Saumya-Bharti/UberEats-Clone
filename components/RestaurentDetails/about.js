import { View, Text , Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const image = 'https://cdn.vox-cdn.com/thumbor/Bgi0GW3WKn4Dnp6ZY99UgMPVjP0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/70264422/newnormaldiningrules2.0.jpg'
const title = 'The Thai Kitchen'
const describtion = 'Thai · Comfort Food · $60 · 4 ⭐ · (3917+)'

export default function about() {
  return (
    <View>
        <RestaurentImage image = {image}/>
        <RestaurentTitle title = {title}/>
        <RestaurentDescribtion describtion = {describtion} />
    </View>
  )
}

const RestaurentImage = (props) => (
    <Image source = {{uri : props.image}}
        style = {{width : '100%' , height : 180}}
    />
)
const RestaurentTitle = (props) => (
    <Text style = {{fontSize : 25 , fontWeight : 'bold' , marginLeft : 10}}>{props.title}</Text>
    
)
const RestaurentDescribtion = (props) => (
    <View styel = {{}}>
        <Text style = {{fontSize : 13 , margin : 10}}>{props.describtion}</Text>
    </View>
)