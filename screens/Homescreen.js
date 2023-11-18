import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image ,TouchableOpacity} from 'react-native';
import Store from '../components/Store';

const Homescreen = ({navigation}) => {
   
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          alignItems: 'center',
          height: '100%', // Set the height to 100% of the screen
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={{backgroundColor: "#f0f0f0", width: "95%", height: "40%", display: "flex", flexDirection: "column",borderRadius:3}}
          onPress={()=>navigation.navigate("ShopScreen",{
            title: 'JJ NORTEY',
            ImageUrl: 'https://deepcaves.world/images/deepcaves.jpg',
            description: 'Buy all your grocies and snacks from us',
            Status: 'Closed',})}>
        <Store
          ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
          title="JJ NORTEY"
          description="Buy all your grocies and snacks from us"
          Status="Closed"
        />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
