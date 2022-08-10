import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/Explore";
import Restaurant from "../screens/Restaurant";

export type ExploreScreenProps = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreScreenProps>();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Restaurant" component={Restaurant} />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
