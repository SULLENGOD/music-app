import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CardSong({ song }) {
  const navigation = useNavigation();
  const { image, name, artist } = song.item;
  const imageSource = image[1]["#text"];

  const info = { name, artist };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { info });
        }}
        style={styles.buttonTrack}
      >
        <View style={styles.cardContainer}>
          <Image source={{ uri: imageSource }} style={styles.artistImage} />
          <View stylel={styles.infoContainer}>
            <View style={styles.headInfo}>
              <Text style={styles.textTitle}>{name}</Text>
            </View>
            <View>
              <Text style={styles.text}>{artist.name}</Text>
            </View>
          </View>
        </View>
        <AntDesign
          name="play"
          size={25}
          color="white"
          style={styles.playButton}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 1,
    margin: 1,
    gap: 20,
  },
  infoContainer: {
    padding: 1,
    flex: 1,
  },
  textTitle: {
    color: "#fff",
    fontSize: 20,
  },
  headInfo: {
    flexDirection: "row",
  },
  rigthIcon: {
    paddingStart: 100,
    color: "white",
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  playButton: {
    alignSelf: "flex-end",

    paddingEnd: 15,
  },
  buttonTrack: {
    backgroundColor: "#162238",
    padding: 10,
    width: "100%",
    alignSelf: "center",
  },
});
