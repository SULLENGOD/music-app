import { View, Text, StyleSheet, Image, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

export default function SongDetails({ track }) {
  const [imageExists, setImageExists] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const checkImage = () => {
    try {
      const imageSource = track.album.image[3]["#text"];
      setImageExists(true);
      setImageUrl(imageSource);
    } catch (error){}
  };

  useEffect(() => {
    checkImage();
  }, []);

  const opnerUrl = () => {
    const url = track.url;
    Linking.openURL(url).catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.shadowView}>
          {imageExists && imageUrl ? (
            <Card elevation={2}>
              <Image source={{ uri: imageUrl }} style={styles.artistImage} />
            </Card>
          ) : (
            <Card elevation={2}>
              <MaterialCommunityIcons
              name="image-off"
              size={250}
              color="black"
              style={styles.notImage}
            />
            </Card>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{track.name}</Text>
          <Text>{track.artist.name}</Text>
        </View>
        <View style={styles.playUrlButtom}>
          <TouchableOpacity onPress={opnerUrl}>
            <AntDesign
              name="play"
              size={80}
              color="black"
              style={styles.playButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    color: "#000",
    marginTop: 20,
  },
  artistImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  shadowView: {
    margin: 20,
  },
  infoContainer: {
    alignSelf: "flex-start",
    paddingLeft: 20,
  },
  cardContainer: {
    flex: 1,
  },
  playUrlButtom: {
    flex: 1,
    alignSelf: "center",
    padding: 50,
  },
  notImage: {
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
});
