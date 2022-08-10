import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { DefaultStackParams } from "../navigators/DefaultStack";

type Props = NativeStackScreenProps<DefaultStackParams, "Restaurant">;

const Restaurant = ({ route }: Props) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
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
