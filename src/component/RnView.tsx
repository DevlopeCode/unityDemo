import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RnView = ({onPress,count}:{onPress:()=>void,count:any}) => {
  return (
    <View style={{ flex: 1 }}>
        <Button title="Send Msg to unity" onPress={async()=>onPress()} />
        <Text style={{fontWeight:'bold',fontSize:20}}> MSG Count Unity {count}</Text>
      </View>
  )
}

export default RnView

const styles = StyleSheet.create({})