import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

const AddProduct = () => {
  return (
    <SafeAreaView>
      <TextInput placeholder='Enter Product name'/>
      <TextInput placeholder='Enter Price'/>
    </SafeAreaView>
  )
}

export default AddProduct