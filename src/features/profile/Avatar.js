import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";
import axios from "axios";

export default (props) => {

  const [imageUri, setImageUri] = useState(null);

  const selectPhotoFromLibrary = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo'
    });
    if (!result.didCancel) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      await uploadPhoto(uri);
    }
  };

  const uploadPhoto = async (uri) => {
    const form = new FormData();
    console.log('Uploading photo');
    form.append('photo', {
      uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
      name: 'photo.jpg',
      type: 'image/jpg',
    });
    const result = await axios.postForm('https://food-images.loca.lt/upload', form);
    /*form.append('photo', { type: 'image/jpeg', name: 'photo.jpg', uri: Platform.OS === 'android' ? uri : uri.replace('file://', '') });
    const result = await fetch('https://food-images.loca.lt/upload', {
      method: 'POST',
      body: form
    });*/
    console.log(result.data);
  };

  return (
    <TouchableOpacity onPress={selectPhotoFromLibrary}>
      {
        imageUri && <Image style={styles.image} source={{uri: imageUri}}/>
      }
      {
        !imageUri && <Image style={styles.image} source={require('../../../assets/profile.png')}/>
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
