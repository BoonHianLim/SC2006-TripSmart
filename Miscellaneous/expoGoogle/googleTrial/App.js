import React, { Component } from 'react';
import { View, Platform, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet from 'react-native-bottom-sheet';

class MapScreen extends Component {
  renderContent = () => (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <Text>Search bar and other content goes here</Text>
    </View>
  );

  render() {
    const apiKey = 'YOUR_API_KEY_HERE';

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
        <BottomSheet
          snapPoints={[0, 300]}
          renderContent={this.renderContent}
        />
      </View>
    );
  }
}

export default MapScreen;
