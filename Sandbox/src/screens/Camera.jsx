import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

function CameraScreen () {
  const isFocused = useIsFocused()
  const devices = useCameraDevices()
  const device = devices.back
  console.log(devices)

  useEffect(() => {
    const requestPermissions = async () => {
      const newCameraPermission = await Camera.requestCameraPermission()
      const newMicrphonePermission = await Camera.requestMicrphonePermission()
      console.log(newCameraPermission)
      console.log(newMicrphonePermission)
    }
    requestPermissions()
  }, [])
  if (device == null) {
    return (
      <View>
        <Text>Camera</Text>
      </View>
    )
  }
  return (
    <Camera
      enableZoomGesture
      enablePortraitEffectsMatteDelivery
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={isFocused}
    />
  )
}

export default CameraScreen
