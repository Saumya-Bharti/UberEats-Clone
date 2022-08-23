import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';

const menu = [
    {name : 'Butter Chiken',
    price : '₹370', 
    des : 'Amazing Indian Dish with Freaking taste 🔥',
    image : 'https://thumbs.dreamstime.com/b/butter-chicken-curry-coriander-naan-bread-89411506.jpg',
},
    {name : 'Biryani',
    price : '₹400', 
    des : 'Amazing Indian Dish with Freaking taste 🔥',
    image : 'https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
},
    {name : 'Tandoori Chiken',
    price : '₹370', 
    des : 'Amazing Indian Dish with Freaking taste 🔥',
    image : 'https://static.onecms.io/wp-content/uploads/sites/9/2021/10/21/grilled-tandoori-chicken-FT-RECIPE1021.jpg',
},
    {name : 'Naan Roti',
    price : '₹45', 
    des : 'Amazing Indian Dish with Freaking taste 🔥',
    image : 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Naan_shiva.jpg',
}
];

export default function menuItems() {
  return (
    <View>
        <FlatList
        data = {menu}
        renderItem = {({item}) => (
            <>
                <FoodInfo item = {item} />
                <Divider width = {1} orientation = 'vertical' style = {{marginHorizontal : 20}}/>
            </>
        )}
    />
    </View>
    
  )
}

const FoodInfo = ({item}) => (
    <View style = {{flexDirection : 'row' , justifyContent : 'space-evenly' , margin : 10 ,backgroundColor : 'white' , borderRadius : 20}}>
        <View style = {{width : 240 ,height : 80 , borderRadius : 30 , margin : 5}}>
            <Text style = {{fontSize : 20 , fontWeight : 'bold' ,}}>{item.name}</Text>
            <Text style = {{fontSize : 13 ,}}>{item.des}</Text>
            <Text style = {{fontSize : 13 ,}}>{item.price}</Text>
        </View> 
        <Image source = {{uri : item.image}}
           style = {{width : 100 , height : 100 , borderRadius : 8}}
        />
    </View>  
)