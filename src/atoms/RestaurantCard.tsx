import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
}

const RestaurantCard: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text>{ name }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ccc",
    elevation: 4,
    padding: 10,
    marginBottom: 10
  },
});

export default RestaurantCard;
