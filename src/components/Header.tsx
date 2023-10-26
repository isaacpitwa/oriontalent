import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import IconButton from './IconButton';
type IHeaderProps = {
  onAddImage: () => void;
  onSelectFeedCategory: () => void;
  onSelectLocation: () => void;
  isLoading: boolean;
  submit: () => void;
};

function Header({
  onAddImage,
  onSelectFeedCategory,
  onSelectLocation,
  isLoading,
  submit,
}: IHeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.navMenu}>
        <IconButton icon="camera" onPress={onAddImage} />
        <IconButton icon="location" onPress={onSelectLocation} />
        <IconButton icon="list" onPress={onSelectFeedCategory} />
      </View>
      {!isLoading && <IconButton icon="rocket" onPress={submit} />}
      {isLoading && <ActivityIndicator size="small" />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    diplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 32,
    backgroundColor: '#f4f4f4',
  },
});

export default Header;
