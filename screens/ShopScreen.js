import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const ShopScreen = () => {
  const route = useRoute();
  const { title, ImageUrl, description, Status } = route.params || {};

  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <View style={{ backgroundColor: 'dodgerblue', height: '20%', width: '100%' }}>
        <Image style={{ height: '100%', width: '100%' }} source={{ uri: ImageUrl }} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>{title}</Text>
        <Text>{Status}</Text>
      </View>
      <Text>{description}</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"dodgerblue" ,width:"100%",height:"87%",marginTop:"11%"}}
        horizontal={true} // Set the horizontal prop to true
        showsHorizontalScrollIndicator={false}//this makes the scroll inidcator invisible
      >
        <Text>ScrollView Content Goes Here</Text>
        {/* Add more content as needed */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
