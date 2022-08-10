import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";
import { ExploreScreenProps } from "../navigators/ExploreStack";

type Props = NativeStackScreenProps<ExploreScreenProps, "Explore">;

const Explore = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Explore Screen</Text>
      <RestaurantCard
        name="Restaurant 1"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 2"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 3"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <Text style={styles.pageTitle}>Nearby Restaurants</Text>
      <RestaurantCard
        name="Restaurant 1"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 2"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 3"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <Text style={styles.pageTitle}>Saved Restaurants</Text>
      <RestaurantCard
        name="Restaurant 1"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 2"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 3"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
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
