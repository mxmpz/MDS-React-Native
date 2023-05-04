import { Text, StyleSheet, View } from 'react-native'

function Map () {
  return (
    <View style={styles.container}>
      <Text>MAP SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Map
