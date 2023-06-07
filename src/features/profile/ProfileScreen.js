import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Avatar/>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
