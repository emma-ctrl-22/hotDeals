import { View, Text,SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, Image,Vide } from 'react-native';
import React,{useState} from 'react';
import {ArrowPathIcon ,UserIcon,ChevronDownIcon,PencilSquareIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import HotDeal from '../components/HotDeal';

const TabTwo = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',marginLeft:7,padding:3,marginTop:"1%",justifyContent:'space-between',alignItems:'center',height:"8%"}}>
          <View style={{flexDirection:'row',width:'80%',backgroundColor:"#c5c6d0",height:"100%",borderRadius:2,alignItems:'center',gap:6,paddingLeft:13}}>
            <MagnifyingGlassIcon color='grey' size={20}/>
           <TextInput 
           placeholder="Hot Deals "/>
          </View>
          <PencilSquareIcon onPress={()=>navigation.navigate('')} color='dodgerblue'/>
          <ArrowPathIcon color="dodgerblue"/>
      </View>
      <ScrollView contentContainerStyle={{
        width:"100%",
        height:"200vh",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: '100%', // Set the height to 100% of the screen
        paddingBottom: '10%',
        }}
        showsVerticalScrollIndicator={false}>
         <TouchableOpacity onPress={()=>navigation.navigate("Hot Deal",{
            Location: 'JJ NORTEY',
            ImageUrl: 'https://deepcaves.world/images/deepcaves.jpg',
            Price: 'Buy all your grocies and snacks from us',
            productName: 'Closed',})} style={{width:"47%",height:"30%"}}>

            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Iphone 7"
             Price="1000"
             Location="MA BEADIAKO"
            />
         </TouchableOpacity>

         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Iphone X"
             Price="2000"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>

         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Rice Cooker"
             Price="200"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>
         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Long Sleeves"
             Price="2000"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>

         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Converse"
             Price="2000"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>

         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Iphone X"
             Price="2000"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>

         <TouchableOpacity style={{width:"47%",height:"30%"}}>
            <HotDeal ImageUrl="https://deepcaves.world/images/deepcaves.jpg"
             productName="Iphone X"
             Price="2000"
             Location="JJ NoRTEY"
            />
         </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TabTwo