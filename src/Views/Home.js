import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {searchVideos} from '../api/youtubeApi';
import {View, Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import ytdl from 'react-native-ytdl';
import RNFetchBlob from 'rn-fetch-blob';

const Home = () => {
  const [videos, setVideos] = useState([]);

  const handleSearchChange = async (e) => {
    const data = await searchVideos(e);
    setVideos(data);
  };

  const handleVideoListen = async (youtubeId) => {
    const urls = await ytdl('http://www.youtube.com/watch?v=' + youtubeId, {
      quality: 'highestaudio',
    });
    console.log('done url', urls);
    let info = await ytdl.getInfo(youtubeId);
    console.log('done info', info);
    const fileName = info.videoDetails.title.replace(/\s+/g, '_') + '.mp4';
    console.log('file name:', fileName);
    let dirs = RNFetchBlob.fs.dirs;

    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      path: dirs.DownloadDir + '/AthleteTube/' + fileName,
    })
      .fetch('GET', urls[0].url)
      .then((res) => {
        // the temp file path
        console.log('The file saved to ', res.path());
        // const s = new Sound('myfile.mp3', dirs.DownloadDir);
        // s.play();
      })
      .catch((e) => console.log(e));
  };

  return (
    <View>
      <Input
        onChangeText={handleSearchChange}
        type="text"
        placeholder="Search Videos"
      />
      <ScrollView>
        {videos.map((video, i) => (
          <Card
            key={i}
            title={video.snippet.title}
            image={{uri: video.snippet.thumbnails.high.url}}>
            <Text style={{marginBottom: 10}}>{video.snippet.description}</Text>
            <Button
              icon={<Icon name="headset" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Listen"
              onPress={() => handleVideoListen(video.id.videoId)}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
