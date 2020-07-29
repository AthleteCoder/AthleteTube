import React, { useEffect, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { Button } from 'react-native-elements';

const Songs = () => {

  const [songs, setSongs] = useState([]);
  const play = () => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        stopWithApp: false
      });
      console.log('initialized player')
      const tracks = songs.map((song, i) => {
        return {
          id: i, // Must be a string, required
          url: `file:/${RNFetchBlob.fs.dirs.DocumentDir}/AthleteTube/${song}`, // Load media from the file system

          title: song,
          artist: song,
          date: '2014-05-20T07:00:00+00:00', // RFC 3339
        };
      });
      console.log(tracks)
      TrackPlayer.add(tracks).then(function () {
        console.log("added")
        // The tracks were added
        TrackPlayer.play();
      });
    });
  };

  const pause = () => {
    TrackPlayer.pause();
  };

  useEffect(() => {
    RNFetchBlob.fs
      .ls(RNFetchBlob.fs.dirs.DownloadDir + '/AthleteTube')
      .then((files) => {
        setSongs(files);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {songs.map((song, i) => (
        <Text key={i}>{song}</Text>
      ))}
      <Button title="Play" onPress={play} />
      <Button title="Pause" onPress={pause} />
    </>
  );
};

export default Songs;
