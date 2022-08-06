import { NavigationContainer } from "@react-navigation/native";
import DefaultStack from "./src/navigators/DefaultStack";

export default function App() {
  return (
    <NavigationContainer>
      <DefaultStack />
    </NavigationContainer>
  );
}
