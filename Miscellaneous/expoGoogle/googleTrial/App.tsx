import React, { Component } from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet from 'react-native-bottom-sheet';

class MapScreen extends Component {
  renderContent = () => (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <Text>Search bar and other content goes here</Text>
    </View>
  );

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
          <View style={styles.container}>
              <BottomSheet
                  ref={bottomSheetRef}
                  index={1}
                  snapPoints={snapPoints}
                  onChange={handleSheetChanges}
              >
                  <View style={styles.contentContainer}>
                      <Text>Awesome 🎉</Text>
                  </View>
              </BottomSheet>
          </View>
      </View>
    );
  }
}
const bottomSheetRef = useRef<BottomSheet>(null);

// variables
const snapPoints = useMemo(() => ['25%', '50%'], []);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
export default MapScreen;
