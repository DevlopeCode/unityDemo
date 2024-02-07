import { Button, Text, View } from 'react-native'
import React from 'react'
import { UnityView } from "react-native-unity2"



export const UnityComponent = ({ count, onPressbtn }: { onPressbtn: () => void, count: any }) => {      
    return(
      <UnityView
        style={{ flex: 3, justifyContent: "flex-start",padding:50 }}
        keepAwake={true}>
        <View style={{ height: 100, width: 320 }}>
          <Button title="Send Msg to RN" onPress={onPressbtn}/>
          <Text style={{ color: 'red' ,fontWeight:'bold',fontSize:20}}> MSG Count RN {count}</Text>  
        </View>
      </UnityView>
    )
  }