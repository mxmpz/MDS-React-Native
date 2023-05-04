import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Camera } from 'react-native-vision-camera'

function CameraScreen () {
  useEffect(() => {
    const requestPermissions = async () => {
      const newCameraPermission = await Camera.requestCameraPermission()
      const newMicrphonePermission = await Camera.requestMicrphonePermission()
      console.log(newCameraPermission)
      console.log(newMicrphonePermission)
    }
    requestPermissions()
  }, [])
  return (
    <View>
      <Text>Camera</Text>
    </View>
  )
}

export default CameraScreen
