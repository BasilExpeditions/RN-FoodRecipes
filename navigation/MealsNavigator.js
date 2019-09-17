import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CatagoriesScreen from '../screens/CatagoriesScreen'
import CatagoryMealsScreen from '../screens/CatagoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';



const MealsNavigator = createStackNavigator({
    Catagories: CatagoriesScreen,
    CatagoryMeals: {
       screen: CatagoryMealsScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);