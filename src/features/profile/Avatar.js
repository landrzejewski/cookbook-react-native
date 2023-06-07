import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";

export default (props) => {

  const [image, setImage] = useState(null);

  const selectPhotoFromLibrary = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo'
    });
    if (!result.didCancel) {
      setImage(result);
    }

  };

  return (
    <TouchableOpacity onPress={selectPhotoFromLibrary}>
      {
        image && <Image style={styles.image} source={{uri: image.assets[0].uri}}/>
      }
      {
        !image && <Image style={styles.image} source={require('../../../assets/profile.png')}/>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    backgroundColor: 'lightgray',
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'lightgray'
  }
});
