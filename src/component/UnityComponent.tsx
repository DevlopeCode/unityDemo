import { Button, Text, View } from 'react-native'
import React from 'react'
import { UnityView } from "react-native-unity2"



export const UnityComponent = ({ count, onPressbtn }: { onPressbtn: () => void, count: any }) => {  
    console.log(count,"op");
    
    return(
      <UnityView
        style={{ flex: 3, justifyContent: "flex-start",padding:50 }}
        keepAwake={true}>
        <View style={{ height: 100, width: 320 }}>
          <Button title="Send Msg to RN" onPress={onPressbtn}/>
          <Text style={{ fontSize: 20, color: 'red' }}> MSG Count RN {count}</Text>  
        </View>
      </UnityView>
    )
  }