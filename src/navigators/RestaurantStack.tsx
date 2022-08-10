import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurant from "../screens/Restaurant";
import Restaurants from "../screens/Restaurants";

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantsStack.Screen name="Restaurant" component={Restaurant} />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantScreenStack;
