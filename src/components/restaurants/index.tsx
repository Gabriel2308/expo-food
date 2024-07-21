import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Horizontal } from './horizontal';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}

export default function Restaurants() {

const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

useEffect(() =>{
    async function getFood() {
        const response = await fetch('http://192.168.0.19:3000/restaurants')
        const data = await response.json()
        setRestaurants(data)
    }

    getFood()
    }, [])

 return (
   <View>
        <FlatList
            horizontal={true}
            data={restaurants}
            renderItem={({item}) => <Horizontal item={item}/>}
            contentContainerStyle={{gap: 14, paddingHorizontal: 16}}
            showsHorizontalScrollIndicator={false}
        />
   </View>
  );
}