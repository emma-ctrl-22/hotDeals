//start
import { useNavigation } from '@react-navigation/native';
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
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const handleSubmit = async () => {
     
  try {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Assuming you have a collection named 'users' in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.role === 'admin') {
    
        navigation.replace("AdminTabs")
      } else {
       
        navigation.replace("ShopScreen")
      }
    }
  }
catch (err) {
  console.error(err);
  Alert.alert('Error', err.message);// Set the error message in state
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
        onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.input} placeholder="Enter " secureTextEntry={true} value={password}
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
