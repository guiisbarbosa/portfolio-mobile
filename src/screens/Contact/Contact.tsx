import React from "react";
import { View, TouchableWithoutFeedback, Keyboard, Text } from "react-native";

import { styles } from "./Contact.styles";

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Contact = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.titles}>Envie uma mensagem</Text>
        <Input label="Nome" />
        <Input label="Mensagem" multiline numberOfLines={4} style={{height: 100, textAlignVertical: "top",}} />
        <Button label="Enviar" variant="secondary" onPress={() => {}} style={{alignSelf: "center", width: "60%"}}/>
      </View>
    </TouchableWithoutFeedback>
  );
};
