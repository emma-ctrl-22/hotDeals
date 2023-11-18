import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const HotDeal = ({productName,ImageUrl,Location,Price,Shortdescription,Contact}) => {
  return (
    <View  style={{backgroundColor: "dodgerblue", width: "100%", display: "flex", flexDirection: "column",borderRadius:3}}>
     <View style={{height:"60%",width:"100%",justifyContent:"center",alignItems:"center"}}>
       <Image style={{height:"100%",width:"95%"}} source={{ uri: ImageUrl }} />
     </View>
     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{productName}</Text>
     <Text>{Price}</Text>
     <Text>{Location}</Text>
    </View>
  )
}

export default HotDeal