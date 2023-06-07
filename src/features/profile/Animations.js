import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable';

// react-native-animatable, react-native-motion, lottie-react-native, react-native-reanimated
const Animations = (props) => {

  //const fadeValue = useRef(new Animated.Value(0)).current;

  const [fadeValue, setFadeValue] = useState(new Animated.Value(0.5));
  const [topValue, setTopValue] = useState(new Animated.Value(Dimensions.get("window").height));

  const AnimatedBox = Animated.createAnimatedComponent(View);

  /*useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 2_000,
      useNativeDriver: true
    }).start();
  }, [fadeValue]);*/

  /*useEffect(() => {
    Animated.spring(topValue, {
      toValue: 0,
      duration: 2_000,
      bounciness: 20
    }).start();
  }, [topValue]);*/

  /*useEffect(() => {
    const customValue = Animated.divide(fadeValue, topValue);
    //Animated.parallel([
    Animated.sequence([
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 2_000
      }),
      Animated.spring(topValue, {
        toValue: 0,
        duration: 2_000,
        bounciness: 20,
      })
    ]).start();
  }, [fadeValue, topValue]);*/

  return (
    <View style={styles.container}>
      {/*<Animated.View style={{...styles.box, opacity: fadeValue}} />*/}
     {/* <AnimatedBox style={{ ...styles.box, opacity: fadeValue, top: topValue }} />*/}
      <Animatable.View style={styles.box} animation='fadeIn' duration={1_000} delay={3_000}/>
    </View>
  );
};

export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "red",
  },
});
