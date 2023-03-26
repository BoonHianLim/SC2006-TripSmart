import * as React from "react";
import { StyleSheet, View, Animated, Text, Pressable, ImageBackground, ScrollView } from "react-native";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TextInputUser from "../components/TextInputUser";
import CreateAccountSection from "../components/CreateAccountSection";
import ReTypePasswordContainer from "../components/ReTypePasswordContainer";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons'; 

const Register1 = () => {
  const navigation = useNavigation();
  const [checked, onChecked] = React.useState(false)
  return (
    <ScrollView
      style={{
        flexGrow: 1,
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
            marginTop:responsiveScreenHeight(15),

          }}>
            
        <View
          style={{
            marginBottom: responsiveScreenHeight(10)
          }}
        >
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
        
        <View
          style={{
            marginBottom: responsiveScreenHeight(4)
          }}>
          <BouncyCheckbox
            onPress={()=>onChecked(!checked)}
            textComponent = {<Text style={{marginLeft:responsiveScreenFontSize(1), fontFamily: FontFamily.montserratMedium }}>I accept the Terms and the Privacy Policy</Text>}
            size={23}
            innerIconStyle={{
              borderRadius: 3
            }}   
            iconStyle={{
              borderRadius: 3
            }}
            />
        </View>
        
        <View>
          <Button
                title="Sign Up"
                loading={false}
                loadingProps={{
                  size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: Color.goldenrod_300,
                  width:"100%",
                  borderRadius: 5,
                  padding: "3%"
                }}
                titleStyle={{
                  fontFamily: FontFamily.montserratBold,
                  fontSize: responsiveScreenFontSize(2.5),
                  color: "black"
                 }}
                containerStyle={{
                  marginBottom: "10%"
                }}
                onPress={() => {}}
              />
        </View>

        <View
          style={{
            alignItems: "center"
          }}>  
          <Text
            style={{
              fontFamily: FontFamily.montserratMedium,
              fontSize: responsiveScreenFontSize(2),
            }}
          >Or continue with</Text>
          <View
            style={{
              flexDirection: "row"
            }}>
            <AntDesign name="google" size={responsiveScreenHeight(6)}
              style={{
                margin: responsiveScreenHeight(3)
              }}/>
            <AntDesign name="facebook-square" size={responsiveScreenHeight(6)}
              style={{
                margin: responsiveScreenHeight(3)
              }}/>
          </View>

          <View
            style={{
              flexDirection: "row"
            }}>
            <Text
              style={{
                fontFamily: FontFamily.montserratMedium,
                fontSize: responsiveScreenFontSize(1.5),
              }}>Already have an account?  </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: FontFamily.montserratMedium,
                  fontSize: responsiveScreenFontSize(1.5),
                }}>Sign in</Text>
            </Pressable>
          </View>
        </View>

        

        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  

});

export default Register1;
