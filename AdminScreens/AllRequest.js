import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const AllRequest = () => {
  const [setRequest,Request] = useState([]);
  return (
    <SafeAreaView>
      <FlatList/>
    </SafeAreaView>
  )
}

export default AllRequest