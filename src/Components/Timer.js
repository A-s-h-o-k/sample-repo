import { useState } from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default  Timer = () => {

    const [time, setTimer] = useState(0)

    return( <View>
        <Text>{time}</Text>
        <TouchableOpacity onPress={() => setTimer(time+1)}>
            <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTimer(time-1)}>
            <Text>Decrease</Text>
        </TouchableOpacity>
    </View>)
  }
  

