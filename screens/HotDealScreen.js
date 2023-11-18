import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
const HotDealScreen = () => {
  const routed = useRoute();
  const { productName, ImageUrl, Price, Location,Shortdescription,Contact } = routed.params || {};
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",backgroundColor:"red"}}>
      <View style={{height:"30%",width:"100%",backgroundColor:"blue"}}>
        <Image source={{uri:ImageUrl}}/>
      </View>
      <Text>{productName}</Text>
      <Text>{Price}</Text>
      <Text>{Location}</Text>
      <Text>{Shortdescription}</Text>
      <Text>{Contact}</Text>
    </SafeAreaView>
  )
}

export default HotDealScreen