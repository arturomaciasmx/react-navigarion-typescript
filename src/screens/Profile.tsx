import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../atoms/RestaurantCard";
import Menu from "../molecules/Menu";
import { DefaultStackParams } from "../navigators/DefaultStack";

type Props = NativeStackScreenProps<DefaultStackParams>;
const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Profile Screen</Text>
      <Text>Name: </Text>
      <Text style={styles.pageTitle}>Your Restaurants</Text>
      <RestaurantCard
        name="Restaurant 1"
        onPress={(name) =>
          navigation.navigate("RestaurantsStack", {
            screen: "Restaurant",
            params: { name },
          })
        }
      />
      <RestaurantCard
        name="Restaurant 2"
        onPress={(name) =>
          navigation.navigate("RestaurantsStack", {
            screen: "Restaurant",
            params: { name },
          })
        }
      />
      <RestaurantCard
        name="Restaurant 3"
        onPress={(name) =>
          navigation.navigate("RestaurantsStack", {
            screen: "Restaurant",
            params: { name },
          })
        }
      />
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
