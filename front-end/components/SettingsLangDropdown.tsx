import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Margin, Color, FontFamily, FontSize } from "../GlobalStyles";
import { SelectCountry } from 'react-native-element-dropdown';
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';


const local_data = [
  {value: 'en', label: 'English'},
  {value: 'ch', label: '中文'},
  {value: 'ms', label: 'Bahasa Melayu'},
  {value: 'ta', label: 'தமிழ்'},
];

const messages = {
  en,
  ch,
  ms,
  ta
};

const SelectLanguageScreen = () => {
  const [language, setLanguage] = useState('en');
  // const [localizedMessages, setLocalizedMessages] = useState(en);

  const switchLang = (langID) => {
    setLanguage(langID);
    AsyncStorage.setItem("language", langID);
  }
  
  useEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      if (value !== null) {
        setLanguage(value);
      };
    } )
  }, []);
  
  const getString = (key: string) => {
    const lang = messages[language as keyof object];
    if ( lang[key] && lang[key])
      return lang[key];
    else
      return en[key];
    // return (messages[language][key] || en[key]);
    // switch (messages[language]) {
    //   case 'en':
    //     return en[key];
    //   case 'ch':
    //     return ch[key];
    //   case 'ms':
    //     return ms[key];
    //   case 'ta':
    //     return ta[key];
    //   default:
    //     return en[key];
    // }
  };

  return (
    <SelectCountry
      style={[styles.dropdown, styles.mt24]}
      selectedTextStyle={[
        styles.english,
        styles.englishPosition,
        styles.englishTypo,
      ]}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={language}
      data={local_data}
      valueField="value"
      labelField="label"
      imageField="image"
      placeholder="English"
      onChange={e => {
        switchLang(e.value);
      }}
    >
      <Text>{getString("Welcome_to_TripSmart")}</Text>
      <Text>{getString("Next")}</Text>
      <Text>{getString("Abundance_of_Choice")}</Text>
    </SelectCountry>
  );
};

export default SelectLanguageScreen;

const styles = StyleSheet.create({
  mt24: {
    marginTop: Margin.m_5xl,
  },
  dropdown: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#efeded",
    borderWidth: 1.5,
    margin: 15,
    height: 50,
    flexDirection: "column",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  english: {
    top: 0,
    left: 15,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: -0.2,
    lineHeight: 18,
  },
  englishPosition: {
    zIndex: 1,
    position: "relative",
  },
  englishTypo: {
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  iconStyle: {
    width: 35,
    height: 25,
  },
});