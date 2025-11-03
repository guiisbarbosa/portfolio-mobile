import React from "react";
import { View, Linking } from "react-native";

import { styles } from "./Home.styles";

import { Profile } from "../../components/Profile/Profile";
import { Button } from "../../components/Button/Button";

import { FontAwesome } from "@expo/vector-icons/";

export const Home = () => {
  function handleWhatsappNavigation() {
    Linking.openURL("https://api.whatsapp.com/send/?phone=5535991071126&text&type=phone_number&app_absent=0");
  }

  function handleLinkedinNavigation() {
    Linking.openURL("https://www.linkedin.com/in/guiisbarbosa/");
  }

  function handleCurriculumNavigation() {
    Linking.openURL(
      "https://drive.google.com/file/d/176q42EOxinjZTiYHHE5tCK6mxIb_-1B2/view"
    );
  }

  return (
    <View style={styles.container}>
      <Profile />
      <Button
        variant="primary"
        label="Linkedin"
        onPress={handleLinkedinNavigation}
      />
      <Button
        variant="primary"
        label="Ver currículo"
        onPress={handleCurriculumNavigation}
      />
      <Button
        variant="secondary"
        label={
          <>
            Whatsapp  <FontAwesome name="whatsapp" size={20} color="#4f0966" />
          </>
        }
        onPress={handleWhatsappNavigation}
      />
    </View>
  );
};
