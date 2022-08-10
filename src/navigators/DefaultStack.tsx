import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import Profile from "../screens/Profile";
import ExploreStackScreen, { ExploreScreenProps } from "./ExploreStack";
import RestaurantScreenStack, { RestaurantsStackParams } from "./RestaurantStack";

export type DefaultStackParams = {
  ExploreStack: NavigatorScreenParams<ExploreScreenProps>;
  Profile: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
};

const Stack = createBottomTabNavigator<DefaultStackParams>();

const DefaultStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ExploreStack" component={ExploreStackScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="RestaurantsStack"
        component={RestaurantScreenStack}
        options={{ tabBarLabel: "Restaurants" }}
      />
    </Stack.Navigator>
  );
};

export default DefaultStack;
