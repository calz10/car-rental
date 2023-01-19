import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { HomeScreenPayloadProps } from './HomeScreen.props'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export const HomeScreen = (props: HomeScreenPayloadProps) => {
  const mapRef = useRef<any>()
  const [region, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapRef}
        mapType="standard"
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, height: '100%', width: '100%' }}
      />
    </View>
  )
}