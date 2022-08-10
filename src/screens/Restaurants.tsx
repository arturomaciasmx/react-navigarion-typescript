import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";
import { DefaultStackParams } from "../navigators/DefaultStack";

type Props = NativeStackScreenProps<DefaultStackParams, "Restaurants">;

const Restaurants = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Restaurants Screen</Text>
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
      <RestaurantCard
        name="Restaurant 4"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 5"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
      <RestaurantCard
        name="Restaurant 6"
        onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }}
      />
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
