import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getRecentTracks } from "../api/fetchSongs";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CardSong from "../components/CardSong";

export default function HomeScreen() {
  const [recentTracks, setRecentTracks] = useState();
  const [loading, setLoading] = useState();

  const getTracks = async () => {
    try {
      const data = await getRecentTracks();
      setRecentTracks(data.toptracks.track);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTracks();
  }, []);

  const renderCardSong = (item) => <CardSong song={item} />;

  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>Latest tracks played:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList data={recentTracks} renderItem={renderCardSong} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#162238",
  },
  text: {
    alignSelf: "center",
    color: "#fff",
    padding: 10,
  },
});
