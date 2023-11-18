import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Store = ({ImageUrl,title,description,Status}) => {
  return (
    <View  style={{backgroundColor: "#f0f0f0", width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
     <View style={{height:"60%",width:"100%",justifyContent:"center",alignItems:"center"}}>
       <Image style={{height:"100%",width:"95%"}} source={{ uri: ImageUrl }} />
     </View>
     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
     <Text>{description}</Text>
     <Text>{Status}</Text>
    </View>
  
  )
}

export default Store