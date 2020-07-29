/**
 * @format
 */
import 'react-native-gesture-handler';
import Service from "./service";
// TrackPlayer.registerPlaybackService(() => Service);
import TrackPlayer from "react-native-track-player";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerEventHandler(() => Service);