import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/AppNavigator'

type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>

const MapScreen = () => {
  const route = useRoute<MapScreenRouteProp>()
  const { latitude, longitude, name } = route.params

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title={name} />
      </MapView>
    </View>
  )
}

export default React.memo(MapScreen);

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});