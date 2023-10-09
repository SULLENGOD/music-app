import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getArtist, getTrackInfo } from "../api/fetchSongs";
import SongDetails from "../components/SongDetails";

export default function InfoSong({ route }) {
  const [track, setTrack] = useState();
  const [loading, setLoading] = useState(true);

  const info = route.params.info;

  const getArtistInfo = async () => {
    try {
      const data = await getTrackInfo(info.name, info.artist.name);
      setTrack(data.track);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArtistInfo();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : track ? (
        <SongDetails track={track} />
      ) : (
        <Text style={styles.error}>No se encontró información del artista</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#162238",
  },
  error: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
  }
});
