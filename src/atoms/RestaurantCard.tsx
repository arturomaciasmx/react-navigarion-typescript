import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  name: string;
  onPress: (name: string) => void;
}

const RestaurantCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ccc",
    elevation: 4,
    padding: 10,
    marginBottom: 10,
  },
});

export default RestaurantCard;
