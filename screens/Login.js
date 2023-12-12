import React,{useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,

} from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://154.160.7.229:3000/login', {
        email,
        password,
      },{timeout: 100000});

      if (res.data.Status === "Success"){
        console.log('success')
          if(res.data.role === "admin"){
              navigation.navigate('Tabs')
              console.log('redirects to admin dashboard')
          }else{
              navigation.navigate('AdminTabs')
          }
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '70%', height: '20%', marginTop: '5%' }}>
        <Image style={{}} source={require('../assets/vvulogo.png')} />
        <Text style={{ fontSize: 20 }}>VVU MARKET</Text>
        <Text>Best Campus Shopping Experience</Text>
      </View>

      <KeyboardAvoidingView
        style={{ display: 'flex', flexDirection: 'column', height: '40%', width: '90%', marginTop: '3%', justifyContent: 'space-evenly',alignItems:"center" }}>
        <TextInput style={styles.input} placeholder="Enter your Id" value={email}
        onChangeText={(text) => setemail(text)} />
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} value={password}
        onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity onPress={handleSubmit} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple', height: '22%', borderRadius: 5 ,width:"98%"}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor:"purple",
    marginBottom: 10,
    padding: 10,
  },
});

export default Login;
