import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useToast } from 'react-native-toast-notifications';

type IImageInputProps = {
  setImageSelected: (image: any) => void;
};

function ImageInput({ setImageSelected }: IImageInputProps) {
  const [image, setImage] = useState<string | null>(null);
  const toast = useToast();

  const onChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      toast.show('Permission to access media library was denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageSelected(result.assets[0]);
    }
  };

  return (
    <View>
      {!image && (
        <TouchableOpacity style={styles.container} onPress={onChooseImage}>
          <Ionicons name="camera" size={40} color="black" />
        </TouchableOpacity>
      )}
      {image && (
        <Image style={styles.container} source={{ uri: image }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ImageInput;
