import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";

const Profile = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Profile Screen</Text>
      <Text>Name: </Text>
      <Text style={styles.pageTitle}>Your Restaurants</Text>
      <RestaurantCard name="Restaurant 1" />
      <RestaurantCard name="Restaurant 2" />
      <RestaurantCard name="Restaurant 3" />
      <Menu />
    </View>
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

export default Profile;
