import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DefaultStackParams } from "../navigators/DefaultStack";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DefaultStackParams>>();

  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Explore");
        }}
      >
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Restaurants");
        }}
      >
        <Text>Restaurants</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#ccc",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItem: {
    marginBottom: 10,
  },
});

export default Menu;
