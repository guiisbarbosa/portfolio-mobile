import React from "react";
import { ScrollView, Text, View } from "react-native";

import { SkillCard } from "../../components/SkillCard/SkillCard";

import { styles } from "./About.styles";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import {
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const About = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: tabBarHeight }}
    >
      <Text style={styles.mainText}>
        {"\u00A0"}
        Olá! Meu nome é Guilherme Silva Barbosa e sou uma pessoa movida pela
        curiosidade e pela busca constante por aprendizado. {"\n"}
        {"\n"}
        {"\u00A0"}Meu primeiro contato com a programação aconteceu aos 15 anos,
        despertando em mim o interesse por entender como as coisas funcionam e
        criar soluções que façam a diferença. {"\n"}
        {"\n"}
        {"\u00A0"}Tenho experiência como Designer Gráfico, área que me ensinou a
        unir criatividade e atenção aos detalhes. {"\n"}
        {"\n"}
        {"\u00A0"}Sou persistente na busca por evolução — tanto profissional
        quanto pessoal — e acredito que a tecnologia é uma das formas mais
        poderosas de transformar ideias em realidade.
      </Text>

      <View style={styles.divisor}></View>

      <Text style={styles.titles}>Hard Skills</Text>
      <View style={styles.hardSkillsContainer}>
        <SkillCard
          icon={
            <Fontisto
              name="html5"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="HTML5"
        />

        <SkillCard
          icon={
            <Fontisto
              name="css3"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="CSS3"
        />

        <SkillCard
          icon={
            <FontAwesome5
              name="js"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="Javascript"
        />

        <SkillCard
          icon={
            <MaterialCommunityIcons
              name="language-typescript"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="Typescript"
        />

        <SkillCard
          icon={
            <FontAwesome5
              name="react"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="React / Native"
        />

        <SkillCard
          icon={
            <FontAwesome5
              name="node-js"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="Node.js"
        />

        <SkillCard
          icon={
            <Feather
              name="git-merge"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="Git"
        />

        <SkillCard
          icon={
            <Feather
              name="github"
              size={styles.icon.fontSize}
              color={styles.icon.color}
            />
          }
          name="Github"
        />
      </View>

      <View style={styles.divisor}></View>
      <Text style={styles.titles}>Soft Skills</Text>

      <View>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Comunicação clara
        </Text>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Trabalho em equipe
        </Text>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Pensamento crítico e resolução de problemas
        </Text>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Proatividade
        </Text>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Aprendizado contínuo
        </Text>
        <Text style={[styles.mainText, { marginBottom: 4 }]}>
          • Organização e gestão de tempo
        </Text>
      </View>
    </ScrollView>
  );
};
