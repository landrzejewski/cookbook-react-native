import { Button, NativeModules, StyleSheet, Text, TextInput, View } from "react-native";
import Avatar from "./Avatar";
import { useEffect, useRef, useState } from "react";
import uuid from 'react-native-uuid';


const { TrainingModule } = NativeModules;

const ProfileScreen = (props) => {

  const ws = useRef(new WebSocket('wss://food-sockets.loca.lt/')).current;

  ws.onopen = () => console.log('Connected')
  ws.onclose = () => console.log('Disconnected');
  ws.onerror = (error) => console.log(error);
  ws.onmessage = (body) => {
    const message = JSON.parse(body.data).message;
    setMessages([...messages, message]);
  }

  [message, setMessage] = useState('');
  [messages, setMessages] = useState([]);


  const [date, setDate] = useState('');

  const sendMessage = () => {
    const body = JSON.stringify({message});
    console.log("Sending: " + body);
    console.log("State: " + ws.readyState);
    if (ws.readyState !== 1) {
      ws.send(body);
    }
  }

  useEffect(() => {
    setDate(TrainingModule.getDate('dd-MM-yyy'));
  }, []);

  return (
    <View style={styles.container}>
     {/* <Avatar/>
      <Text>Date: {date}</Text>*/}
        <TextInput placeholder="Enter message" onChangeText={setMessage}/>
        <Button title="Send" onPress={sendMessage}/>
      {
        messages.map((message) => <Text key={uuid.v4()}>{message}</Text>)

      }
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
