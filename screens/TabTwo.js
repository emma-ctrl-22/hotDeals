import { View, Text,SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, Image,Vide } from 'react-native';
import React,{useState} from 'react';
import { UserIcon,ChevronDownIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import HotDeal from '../components/HotDeal';

const TabTwo = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row',marginLeft:7,padding:3,marginTop:"1%",justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',flex:1,backgroundColor:"#c5c6d0",height:43,borderRadius:2,alignItems:'center',gap:6,paddingLeft:13}}>
            <MagnifyingGlassIcon color='grey' size={20}/>
           <TextInput 
           placeholder="Hot Deals "/>
          </View>
          <AdjustmentsVerticalIcon color='dodgerblue'/>
      </View>
      <ScrollView contentContainerStyle={{
          padding: 10,
          alignItems: 'center',
          height: '100%', // Set the height to 100% of the screen
        }}
        showsVerticalScrollIndicator={false}>
         <TouchableOpacity>
            <HotDeal/>
         </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TabTwo