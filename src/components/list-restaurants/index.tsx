import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { RestaurantsProps } from '../restaurants';
import { RestaurantItem } from './item';

export  function ListRestaurants() {

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
   <View className='px-4 flex-1 w-full h-ful mb-11 gap-4'>
        {restaurants.map(item =>(
            <RestaurantItem
                item={item}
                key={item.id}
            />
        ))}
   </View>
  );
}