import * as React from "react";
import { Dimensions, StyleSheet, View, Image, Text, Pressable } from "react-native";
import PetFriendlyContainer from "./PetFriendlyContainer";
import { useState, useEffect } from "react";
import { Margin, Color, FontFamily } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';

const messages = {
  en,
  ch,
  ms,
  ta
};

const EcoFriendlySection = () => {
  const { width, height } = Dimensions.get("window");
  const [selectedButtons, setSelectedButtons] = useState([]);
  
  const [isWCSelected, setWCSelected] = useState(false);
  const handleWCPress = () => {
    setWCSelected(!isWCSelected); // toggle isSelected between true and false
  };
  const [isPSelected, setPSelected] = useState(false);
  const handlePPress = () => {
    setPSelected(!isPSelected); // toggle isSelected between true and false
  };
  const [isEFSelected, setEFSelected] = useState(false);
  const handleEFPress = () => {
    setEFSelected(!isEFSelected); // toggle isSelected between true and false
  };

  const onPressButton = (buttonID) => {
    if (selectedButtons.includes(buttonID)) {
      // remove the button ID from the array
      setSelectedButtons(selectedButtons.filter(id => id !== buttonID));
      AsyncStorage.setItem('selectedButtons', JSON.stringify(selectedButtons.filter(id => id !== buttonID)));
    } else {
      // add the button ID to the array
      setSelectedButtons([...selectedButtons, buttonID]);
      AsyncStorage.setItem('selectedButtons', JSON.stringify([...selectedButtons, buttonID]));
    }
  };   

  useEffect(() => {
    AsyncStorage.getItem('selectedButtons').then(value => {
      if (value !== null) {
        setSelectedButtons(JSON.parse(value));
      }
    });
  }, []);

  const message1 = "Wheelchair Accessibility";
  const message2 = "Pet-Friendly";
  const message3 = "Eco-Friendly"
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
      AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
        setResultText(messages.en["Filter_page"]);
        break;
        case 'ch':
        setResultText(messages.ch["Filter_page"]);
        break;
        case 'ms':
        setResultText(messages.ms["Filter_page"]);
        break;
        case 'ta':
        setResultText(messages.ta["Filter_page"]);
        break;
        default:
        setResultText(messages.en["Filter_page"]);
      }
    })
    }
  )
  
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, selectedButtons.includes(3) && !isWCSelected ? styles.frameSelected : null]} 
          onPress={() => {
            onPressButton(3)
            handleWCPress
          }
          } 
        >
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/wheelchair-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
          {resultText && resultText[message1]}
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, selectedButtons.includes(4) && !isPSelected ? styles.frameSelected : null]} 
          onPress={() => {
            onPressButton(4)
            handlePPress
          }
          } 
        >
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/pets-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
        {resultText && resultText[message2]}
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, selectedButtons.includes(5) && !isEFSelected ? styles.frameSelected : null]} 
          onPress={() => {
            onPressButton(5)
            handleEFPress
          }
          } 
        >          
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/renewableenergy-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
        {resultText && resultText[message3]}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_xs,
  },
  ml11: {
    marginLeft: Margin.m_2xs,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    position: "relative",
  },
  wheelchair1Icon: {
    width: 45,
    height: 45,
  },
  wheelchair1Wrapper: {
    marginTop: -22,
    marginLeft: -22,
    top: "45%",
    left: "37%",
    borderRadius: 16,
    backgroundColor: Color.textColorsInverse,
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 33,
    },
    shadowRadius: 213,
    elevation: 213,
    shadowOpacity: 1,
    padding: 2,
  },
  frameWrapper: {
    borderRadius: 24,
    backgroundColor: Color.brandColorsPeachBlossom,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  frameSelected: {
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 3,
  },
  wheelchairAccessibility: {
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.textColorsMain,
    textAlign: "center",
    width: 128,
  },
  frameGroup: {
    borderRadius: 8,
    alignItems: "center",
  },
  frameParent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default EcoFriendlySection;
