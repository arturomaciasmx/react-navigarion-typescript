import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";
import Restaurants from "../screens/Restaurants";

export type DefaultStackParams = {
  Explore: undefined;
  Profile: undefined;
  Restaurants: undefined;
};

const Stack = createNativeStackNavigator<DefaultStackParams>();

const DefaultStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
  );
};

export default DefaultStack;
