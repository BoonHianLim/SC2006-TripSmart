import React, { useState, useEffect } from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const tempData = {
  "query":"query ($lat: Float!, $lng: Float!) {providers (lat: $lat, lng: $lng){ name slug website app {android ios }}}",
  "variables":{"lat":1.3376342844358233,"lng":103.69414958176533}
};

const ParentThatFetches = () => {
  const [data, updateData] = useState();
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('https://flow-api.fluctuo.com/v1?access_token=iLZTWrkvrlBHH4j4iScF84ASHmRMXwcA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tempData)
      });
      const json = await resp.json();
      updateData(json);
    }
    getData();
  }, []);

  return <Text>{JSON.stringify(data)}</Text>
}
const Cat = () => {
  return (<View style={styles.container}>
    {ParentThatFetches()}
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
    />
  </View>);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Cat;