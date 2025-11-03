import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Linking,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./Contact.styles";
import { theme } from "../../theme";

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

import { Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons/";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMessage() {
    const formattedMessage = `Olá, meu nome é: ${name} 👋 \n\n 📝 ${message}`;
    const url = `https://api.whatsapp.com/send?phone=5535991071126&text=${encodeURIComponent(
      formattedMessage
    )}`;
    Linking.openURL(url);
  }

  function handleLinkedinNavigation() {
    Linking.openURL("https://www.linkedin.com/in/guiisbarbosa/");
  }

  function handleGithubNavigation() {
    Linking.openURL("https://github.com/guiisbarbosa");
  }

  function handleInstagramNavigation() {
    Linking.openURL("https://www.instagram.com/guisbarbosa_");
  }

  function handleCopyDiscordId() {
    Clipboard.setStringAsync(".bobodacorte");
    Alert.alert("ID do Discord", "ID do Discord copiado para a área de transferência!");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.titles}>Envie uma mensagem</Text>
        <Input label="Nome" onChangeText={(value) => setName(value)} />
        <Input
          label="Mensagem"
          multiline
          numberOfLines={4}
          style={{ height: 104, textAlignVertical: "top" }}
          onChangeText={(value) => setMessage(value)}
        />
        <Button
          label="Enviar"
          variant="secondary"
          onPress={handleSendMessage}
          style={{ alignSelf: "center", width: "60%" }}
        />

        <View style={styles.connectContainer}>
          <Text style={styles.titles}>Conecte-se comigo</Text>
          <View style={styles.connectButtonsContainer}>
            <Button
              label={
                <>
                  <FontAwesome
                    name="linkedin-square"
                    size={16}
                    color={theme.colors.c400}
                  />{" "}
                  Linkedin
                </>
              }
              variant="primary"
              style={{ width: 160 }}
              onPress={handleLinkedinNavigation}
            />

            <Button
              label={
                <>
                  <Feather name="github" size={16} color={theme.colors.c400} />{" "}
                  Github
                </>
              }
              variant="primary"
              style={{ width: 160 }}
              onPress={handleGithubNavigation}
            />
          </View>
          <View style={styles.connectButtonsContainer}>
            <Button
              label={
                <>
                  <FontAwesome6
                    name="discord"
                    size={16}
                    color={theme.colors.c400}
                  />{" "}
                  Discord
                </>
              }
              variant="primary"
              style={{ width: 160 }}
              onPress={handleCopyDiscordId}
            />

            <Button
              label={
                <>
                  <FontAwesome
                    name="instagram"
                    size={16}
                    color={theme.colors.c400}
                  />{" "}
                  Instagram
                </>
              }
              variant="primary"
              style={{ width: 160 }}
              onPress={handleInstagramNavigation}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
