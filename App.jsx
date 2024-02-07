import React, { useState } from "react"
import { View } from "react-native"
import { UnityModule } from "react-native-unity2"
import RnView from "./src/component/RnView"
import { UnityComponent } from "./src/component/UnityComponent"
class CubeApi {
  constructor() {
    this.count = 0;
  }

  increaseCount() {
    this.count++;
    UnityModule.callMethod("Cube", "increaseCountRN", this.count);
  }

  getCount() {
    return this.count;
  }
}
const cubeApi = new CubeApi();



export default function App() {
  const [rnmsg, setRnmsg] = useState(0)

  const sendMsgtoBox = () => {
    setRnmsg(prev => prev + 1)
  }
  const [count, setCount] = useState(cubeApi.getCount());

  const handleIncreaseCount = () => {
    cubeApi.increaseCount();
    setCount(cubeApi.getCount());
  };
  return (
    <View style={{ flex: 1 }}>
   
      <RnView onPress={handleIncreaseCount} count={rnmsg}/>
      <UnityComponent count={count} onPressbtn={sendMsgtoBox} />
    </View>
  )
}

