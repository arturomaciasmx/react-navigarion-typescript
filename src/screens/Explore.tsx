import { ScrollView, StyleSheet, Text } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";

const Explore = () => {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Explore Screen</Text>
      <RestaurantCard name="Restaurant 1" />
      <RestaurantCard name="Restaurant 2" />
      <RestaurantCard name="Restaurant 3" />
      <Text style={styles.pageTitle}>Nearby Restaurants</Text>
      <RestaurantCard name="Restaurant 1" />
      <RestaurantCard name="Restaurant 2" />
      <RestaurantCard name="Restaurant 3" />
      <Text style={styles.pageTitle}>Saved Restaurants</Text>
      <RestaurantCard name="Restaurant 1" />
      <RestaurantCard name="Restaurant 2" />
      <RestaurantCard name="Restaurant 3" />
      <Menu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Explore;
