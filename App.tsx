import React, { memo, useState } from "react"
import { Button, Text, View } from "react-native"
import { UnityModule, UnityView } from "react-native-unity2"

const onMessage = (data: any) => {
  // setunitymasg(prev => prev + 1)
  console.log("Unity message: " + data)
}

const onReady = () => {
  console.log("Ready!")
}

const UnityComponent = memo(({ count, onPressbtn }: { onPressbtn: () => void, count: number }) => {  
  return(
    <UnityView
      onMessage={onMessage}
      onReady={onReady}
      style={{ flex: 3, justifyContent: "flex-end" }}
      keepAwake={true}>
      <View style={{ height: 100, width: 320 }}>
        <Button title="Send Msg to RN" onPress={onPressbtn}/>
        <Text style={{ fontSize: 20, color: 'red' }}> MSG Count RN {count}</Text>  
      </View>
    </UnityView>
  )
}, (p, n) => p.count !== n.count)

export default function App() {
  const [rnmsg, setRnmsg] = useState(1)

  const TestMsg = async () => {
    await cubeApi.increaseCount()
  }

  const sendMsgtoBox = () => {
    setRnmsg(prev => prev + 1)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Button title="Send Msg to unity" onPress={TestMsg} />
        <Text> MSG Count RN {rnmsg}</Text>
      </View>
      <UnityComponent count={cubeApi.getCount()} onPressbtn={sendMsgtoBox} />
    </View>
  )
}

const cubeApi = {
  count: 0,

  increaseCount() {
    this.count++;
    UnityModule.callMethod("Cube", "increaseCountRN", this.count);
  },

  getCount() {
    // Get the count from Unity
    return this.count;
  }
}