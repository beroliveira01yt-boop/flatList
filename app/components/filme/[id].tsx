import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, StatusBar, SafeAreaView} from "react-native";
import DadosDosFilmes from "../DadosDosFilmes";

const categorias = DadosDosFilmes();
const alturaDaTela = Dimensions.get("window").height;

export default function Filme() {
  const [naMinhaLista, setNaMinhaLista] = useState(false);
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const filme = categorias.flatMap((categoria) => categoria.filmes).find((item) => item.id === id);

  if (!filme) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={styles.notFoundText}>Filme não encontrado.</Text>
        <TouchableOpacity style={styles.backLink} onPress={() => router.back()}>
          <Text style={styles.backLinkText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
 
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.hero}>
          <Image
            source={{ uri: filme.imagem }}
            style={styles.poster}
            resizeMode="cover"
          />
          <SafeAreaView style={styles.topBar}>
            <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={() => router.back()}>
              <Text style={styles.backIcon}></Text>
            </TouchableOpacity>
          </SafeAreaView>
 
          
          <View style={styles.heroContent}>
            <Text style={styles.title}>{filme.titulo}</Text>
 
            <View style={styles.metaRow}>
              <Text style={styles.match}>{filme.relevancia}</Text>
              <Text style={styles.meta}>{filme.ano}</Text>
              <View style={styles.ageBadge}>
                <Text style={styles.ageText}>{filme.classificacao}</Text>
              </View>
              <Text style={styles.meta}>{filme.duracao}</Text>
              <View style={styles.hdBadge}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.playBtn} activeOpacity={0.85}>
            <Text style={styles.playText}>Assistir</Text>
          </TouchableOpacity>
 
          <TouchableOpacity
            style={styles.secondaryBtn}
            activeOpacity={0.8}
            onPress={() => setNaMinhaLista(!naMinhaLista)}
          >
            <Text style={styles.secondaryText}>
              {naMinhaLista ? "Minha lista" : "Minha lista"}
            </Text>
          </TouchableOpacity>
        </View>
 
       
        <View style={styles.infoBlock}>
          <Text style={styles.description}>
            {filme.descricao}
          </Text>
 
          <Text style={styles.cast}>
            <Text style={styles.label}>Elenco: </Text>{filme.elenco}
            
          </Text>
 
          <Text style={styles.genres}>
            <Text style={styles.label}>Gêneros: </Text>
            {filme.generos}
          </Text>
 
          <Text style={styles.director}>
            <Text style={styles.label}>Direção: </Text>
            {filme.direcao}
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  notFoundText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 16,
  },
  backLink: {
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  backLinkText: {
    color: "#000",
    fontWeight: "700",
  },
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  hero: {
    height: alturaDaTela * 0.58,
    width: "100%",
    position: "relative",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: "#fff",
    fontSize: 32,
    marginTop: -4,
    fontWeight: "300",
  },
  heroContent: {
    position: "absolute",
    bottom: 18,
    left: 16,
    right: 16,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  match: {
    color: "#46d369",
    fontWeight: "600",
    fontSize: 13,
  },
  meta: {
    color: "#bcbcbc",
    fontSize: 13,
  },
  ageBadge: {
    borderWidth: 1,
    borderColor: "#bcbcbc",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 2,
  },
  ageText: {
    color: "#bcbcbc",
    fontSize: 11,
    fontWeight: "500",
  },
  hdBadge: {
    borderWidth: 1,
    borderColor: "#bcbcbc",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  hdText: {
    color: "#bcbcbc",
    fontSize: 10,
    fontWeight: "600",
  },
  actions: {
    paddingHorizontal: 16,
    marginTop: 8,
    gap: 10,
  },
  playBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    gap: 10,
  },
  playIcon: {
    fontSize: 16,
    color: "#000",
  },
  playText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryBtn: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    gap: 8,
  },
  secondaryIcon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  infoBlock: {
    paddingHorizontal: 16,
    marginTop: 18,
  },
  description: {
    color: "#fff",
    fontSize: 14.5,
    lineHeight: 21,
    marginBottom: 14,
  },
  cast: {
    color: "#a3a3a3",
    fontSize: 13,
    marginBottom: 4,
    lineHeight: 18,
  },
  genres: {
    color: "#a3a3a3",
    fontSize: 13,
    marginBottom: 4,
  },
  director: {
    color: "#a3a3a3",
    fontSize: 13,
  },
  label: {
    color: "#777",
  },
});