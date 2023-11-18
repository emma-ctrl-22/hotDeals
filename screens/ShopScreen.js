import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const ShopScreen = () => {
  const route = useRoute();
  const { title, ImageUrl, description, Status } = route.params || {};

  return (
    <SafeAreaView style={{ flex: 1,alignItems:"center" }}>
      <View style={{ backgroundColor: "dodgerblue", height: "30%", width: "100%" }}>
        <Image style={{height:"100%",width:'100%'}} source={{ uri: ImageUrl }} />
      </View>
      <View style={{display:'flex',flexDirection:"row"}}>
      <Text>{title}</Text>
      <Text>{Status}</Text>
      </View>
      <Text>{description}</Text>
      <ScrollView contentContainerStyle={{height:'50%',width:"100%",backgroundColor:"dodgerblue"}}>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
