import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CardHorizontalFood from './food';

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurandId: string;
}


export function Trending() {

 const [foods, setFoods] = useState<FoodProps[]>([])

 useEffect(() =>{
    async function getFood() {
        const response = await fetch('http://192.168.0.19:3000/foods')
        const data = await response.json()
        setFoods(data)
    }

    getFood()
 }, [])

 return (
    <FlatList
        horizontal={true}
        data={foods}
        renderItem={({item}) => <CardHorizontalFood food={item}/>}
        contentContainerStyle={{gap: 14, paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}
    />
  );
}