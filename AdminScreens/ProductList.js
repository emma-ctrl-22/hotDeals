import { View, Text,FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const ProductList = () => {
  const [setProduct,product]= useState([]);
  return (
    <SafeAreaView>
      <FlatList data={product}/>
    </SafeAreaView>
  )
}

export default ProductList