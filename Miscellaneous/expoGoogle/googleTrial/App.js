import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapScreen extends Component {
  render() {
    const apiKey = 'AIzaSyALnass7RW3hrj9O1KGCf3UzsTznG7axS4';

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 1.3521,
            longitude: 103.8198,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showsScale={true}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          toolbarEnabled={true}
          cacheEnabled={Platform.OS === 'android' ? true : false}
          apiKey={apiKey}
        />
      </View>
    );
  }
}

export default MapScreen;
