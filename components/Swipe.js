import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ListItem } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';


const Swipe = () => {
  return (
    <View>
     <ListItem.Swipeable
  leftContent={(reset) => (
    <Button
      title="Info"
      onPress={() => reset()}
      icon={{ name: 'info', color: 'white' }}
      buttonStyle={{ minHeight: '100%' }}
    />
  )}
  rightContent={(reset) => (
    <Button
      title="Delete"
      onPress={() => reset()}
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  )}
>
  <Icon name="instagram" />
  <ListItem.Content>
    <ListItem.Title>Hello Swiper</ListItem.Title>
  </ListItem.Content>
  <ListItem.Chevron />
</ListItem.Swipeable>
    </View>
  )
}

export default Swipe

const styles = StyleSheet.create({})