import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import { DefaultStackParams } from "../navigators/DefaultStack";

type Props = NativeStackScreenProps<DefaultStackParams, "Restaurant">;

const Restaurant = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
      <Text style={styles.title}>Related Restaurants</Text>
      <RestaurantCard
        name="Related restaurant 1"
        onPress={(name) => navigation.push("Restaurant", { name })}
      />
      <RestaurantCard
        name="Related restaurant 2"
        onPress={(name) => navigation.push("Restaurant", { name })}
      />
      <RestaurantCard
        name="Related restaurant 3"
        onPress={(name) => navigation.push("Restaurant", { name })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Restaurant;
