import { Button, StyleSheet, Text, View } from "react-native";
import { createContext, useContext, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";

const user = {
  isLogged: true,
  username: "jan",
};

const UserContext = createContext({});

const Profile = () => {

  const userContext = useContext(UserContext);

  return (
    <View>
      <Text>User: {userContext.username}</Text>
    </View>
  );

};

const Hooks = (props) => {

  const [amount, setAmount] = useState(0);
  // reagujemy na zmianę stanu co powoduje odświeżenie widoku
  const [count, setCount] = useState(0);

  /*useEffect(() => {
    console.log('uruchamiane w momencie zamontowania komponentu i w momencie kiedy zmienia się jego stan');
  });*/

  /*useEffect(() => {
    console.log("uruchamiane w momencie zamontowania komponentu");
  }, []);*/

  /*useEffect(() => {
    console.log('uruchamiane w momencie zamontowania komponentu i w momencie kiedy zmienia się jego wskazany stan');
  }, [amount]);*/

  /*useEffect(() => {
    console.log('uruchamiane w momencie zamontowania komponentu i w momencie kiedy zmienia się jego stan');
    return () => console.log('uruchamianie kiedy komponent jest niszczony lub kiedy jest usuwany z widoku');
  }, [amount]);*/

  /*useLayoutEffect(() => {
    console.log('uruchamiane w momencie zamontowania komponentu i w momencie kiedy zmienia się jego stan przed repaintem')
  });*/

  // zachowuje instancję obiektu między odświeżeniami widoku (działa podobnie do useCallback - przykład z debunce)
  const data = useRef({
    value: 0,
    update() {
      this.value += 1;
      console.log(this.value);
    }
  });

  // prosta implementacja redux'a

  const reducer = (state, action) => {
    switch (action.type) {
      case 'incr':
        return state + 1;
      case 'decr':
        return state - 1;
      default:
        throw new Error('Illegal argument exception');
    }
  };

  const [state, dispatch] = useReducer(reducer, 0, () => { console.log('Init state') });

  // useMemo - cachowanie wyników, może być resetowane, jeśli uzależnimy cache od stanu komponentu
  const [value, setValue] = useState(2);
  const power = useMemo(() => {
    console.log(`Calculating power of ${value}`)
    return value**2;
  }, [value]);

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        <Text>Counter: {count}</Text>
        <Text>State: {state}</Text>
        <Button title="Update counter" onPress={() => {
          setCount(count + 1);
          data.current.update();
          console.log('Result: ' + power);
        }} />
        <Button title="Dispach incr" onPress={() => dispatch({type: 'incr'})} />
        <Button title="Dispach decr" onPress={() => dispatch({type: 'decr'})} />
        <Button title="Increment value" onPress={() => setValue(value + 1)} />
        <Profile/>
      </View>
    </UserContext.Provider>
  );
};

export default Hooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
