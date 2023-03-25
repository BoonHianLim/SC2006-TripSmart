import * as React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground, ScrollView } from "react-native";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TextInputUser from "../components/TextInputUser";
import CreateAccountSection from "../components/CreateAccountSection";
import ReTypePasswordContainer from "../components/ReTypePasswordContainer";

import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flexGrow: 1
      }}>
      <ImageBackground
        source={require('../assets/LoginRegisterImage/registerBackground.png')}
        style={{
          width:'100%',
          height:'100%',
          flex: 1}} >

        
        <View
          style={{
            margin: responsiveScreenFontSize(3),
            marginTop:responsiveScreenHeight(8),
            marginBottom: 0
          }}>
          <Text
            style={{
              fontFamily: FontFamily.montserratBold,
              fontSize: responsiveScreenFontSize(6.5)
            }}>
              Create Your Account
          </Text>
        </View>

        <TextInputUser headerText="Email" iconLabel="user"></TextInputUser>
        <TextInputUser headerText="Password" iconLabel="lock" isPassword = {true}></TextInputUser>
        <TextInputUser headerText="Re-type Password" iconLabel="lock" isPassword = {true}></TextInputUser>

      </ImageBackground>
    </ScrollView>
    // <View style={[styles.register1, styles.registerLayout]}>
    //   <View
    //     style={[
    //       styles.register11,
    //       styles.register11Position,
    //       styles.registerLayout,
    //     ]}
    //   >
    //     <View style={styles.frameParent}>
    //       <CreateAccountSection />
    //       <ReTypePasswordContainer />
    //       <View style={[styles.frameChild, styles.register11Position]} />
    //       <Pressable
    //         style={styles.signUpWrapper}
    //         onPress={() => navigation.navigate("Register2")}
    //       >
    //         <Text style={styles.signUp}>am i here?</Text>
    //       </Pressable>
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  

});

export default Register1;
