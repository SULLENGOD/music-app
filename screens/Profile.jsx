import { View, Text, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { getRecentTracks } from "../api/fetchSongs";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CardSong from "../components/CardSong";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [recentTracks, setRecentTracks] = useState();
  const [loading, setLoading] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const storeTracks = async (tracks) => {
    const jsonTracks = JSON.stringify(tracks);
    await AsyncStorage.setItem("Tracks", jsonTracks);
  };

  const getTracks = async () => {
    try {
      const data = await getRecentTracks();
      setRecentTracks(data.toptracks.track);
      storeTracks(recentTracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getTracks();
    setRefreshing(false);
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
        <FlatList
          data={recentTracks}
          renderItem={renderCardSong}
          keyExtractor={(item, index) => `${item.mbid}-${index}`}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
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
