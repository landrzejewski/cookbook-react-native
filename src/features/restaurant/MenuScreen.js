import { Button, Text, View } from "react-native";

const MenuScreen = ({ navigation }) => {
    return (
      <View>
        <Text>Home</Text>
        <Button title="Order" onPress={() => {
          navigation.navigate('OrderScreen')}
        }/>
      </View>
    );
}

export default MenuScreen;
