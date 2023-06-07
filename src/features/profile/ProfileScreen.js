import { NativeModules, StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";


const { TrainingModule } = NativeModules;

const ProfileScreen = (props) => {

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(TrainingModule.getDate('dd-MM-yyy'));
  }, []);

  return (
    <View style={styles.container}>
      <Avatar/>
      <Text>Date: {date}</Text>
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
