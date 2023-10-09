
export const getTopSongs = async () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json&limit=10`;
    const res = await fetch(url);
    const data = await res.json();
    const topTracks = data.tracks.track

    
    return topTracks;
};

export const getTrackInfo = async (trackName, artistName) => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=be8c6a4c47c8e04774909a893e4c64fe&artist=${artistName}&track=${trackName}&format=json`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export const getRecentTracks = async () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=sullensense&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json&limit=10`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}