import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";

const Restaurants = () => {
  return (
    <View>
      <Text>Restaurants Screen</Text>
      <RestaurantCard name="Restaurant 1" />
      <RestaurantCard name="Restaurant 2" />
      <RestaurantCard name="Restaurant 3" />
      <RestaurantCard name="Restaurant 4" />
      <RestaurantCard name="Restaurant 5" />
      <RestaurantCard name="Restaurant 6" />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Restaurants;
