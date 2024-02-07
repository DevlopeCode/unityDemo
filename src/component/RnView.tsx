import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RnView = ({onPress,count}:{onPress:()=>void,count:any}) => {
  return (
    <View style={{ flex: 1 }}>
        <Button title="Send Msg to unity" onPress={async()=>onPress()} />
        <Text> MSG Count RN {count}</Text>
      </View>
  )
}

export default RnView

const styles = StyleSheet.create({})