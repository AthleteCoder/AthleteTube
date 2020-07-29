import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { searchVideos } from '../api/youtubeApi';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ytdl from 'react-native-ytdl';
import RNFetchBlob from 'rn-fetch-blob';
import Songs from './Songs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = () => {
  return <Tab.Navigator tabBarOptions={{
    // scrollEnabled: true,
    activeTintColor: '#3684F6', //'rgb(12,157,197)',
    inactiveTintColor: 'black',
    indicatorStyle: {
      backgroundColor: '#ACACAC',
    },
    labelStyle: {
      fontSize: 16,
      color: 'black',
    },
    style: {
      backgroundColor: 'white',
    },
    statusBarStyle: 'light-content',

  }}>
    <Tab.Screen name="Songs" component={Songs} />
    <Tab.Screen name="Search" component={SearchArea} />
  </Tab.Navigator>
}

const SearchArea = () => {
  const [videos, setVideos] = useState([]);

  const handleSearchChange = async (e) => {
    const data = await searchVideos(e);
    setVideos(data);
  };

  const handleVideoListen = async (youtubeId) => {
    console.log(youtubeId)
    try {
      const urls = await ytdl('http://www.youtube.com/watch?v=' + youtubeId, {
        // quality: 'highestaudio',
      });
      console.log('done url');
      let info = await ytdl.getInfo(youtubeId);
      console.log('done info');
      const fileName = info.videoDetails.title.replace(/\s+/g, '_') + '.mov';
      console.log('file name:', fileName);
      let dirs = RNFetchBlob.fs.dirs;
      console.log(urls[0].url)
      RNFetchBlob.ios.openDocument()
      RNFetchBlob.config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        path: dirs.DocumentDir + '/AthleteTube/' + fileName,
      })
        .fetch('GET', urls[0].url)
        .then((res) => {
          // the temp file path
          console.log('The file saved to ', res.path());
          // const s = new Sound('myfile.mp3', dirs.DownloadDir);
          // s.play();
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e)
    }

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
            image={{ uri: video.snippet.thumbnails.high.url }}>
            <Text style={{ marginBottom: 10 }}>{video.snippet.description}</Text>
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
