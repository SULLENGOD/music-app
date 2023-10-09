import { View } from "react-native";
import React, { useEffect, useState } from "react";
import CardSong from "../components/CardSong";
import { getTopSongs } from "../api/fetchSongs";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

export default function HomeScreen() {
  const [topSongs, setTopSongs] = useState();
  const [loading, setLoading] = useState(true);

  const getSongs = async () => {
    try {
      const data = await getTopSongs();
      setTopSongs(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderSongCard = (item) => <CardSong song={item} />;

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#000",
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={topSongs}
          renderItem={renderSongCard}
          keyExtractor={(item) => item.mbid}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
