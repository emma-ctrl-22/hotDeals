import { View, Text, SafeAreaView, Image, TouchableOpacity,StyleSheet ,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
  return (
    <SafeAreaView style={{flex:1,alignItems:"center",display:"flex",justifyContent:"space-evenly"}}>
        <View style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"70%",height:"40%",marginTop:"5%"}}>
            <Image style={{}}  source={require('../assets/vvulogo.png')}/>
            <Text style={{fontSize:20,fontFamily:'sans-ser'}}>VVU MARKET</Text>       
            <Text>Best Campus Shopping Experience</Text>
        </View>

        <KeyboardAvoidingView style={{display:"flex",flexDirection:"column",height:"40%",width:"90%",marginTop:"3%",justifyContent:"space-evenly"}}>
            <TextInput style={styles.Input} placeholder='Enter your Id'/>
            <TextInput placeholder='Enter Password'/>
            <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"purple",height:'20%',borderRadius:5}}>
                <Text style={{color:"white",fontSize:18}}>Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Input: {
      width:"80%",
      height:"20%",
     
    },
  });
  

export default Login