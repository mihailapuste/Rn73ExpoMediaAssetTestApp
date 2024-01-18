import {useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Video as ExpoVideo} from 'expo-av';
import MonkeyVideo from './assets/monkey.mp4';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isStreamingVideoExpo, setIsStreamingVideoExpo] = useState(true);
  const [isStreamingVideoRNVideo, setIsStreamingVideoExpoRNVideo] =
    useState(true);
  const monkeyRemoteVideoSource = {
    uri: 'https://www.shutterstock.com/shutterstock/videos/6908191/preview/stock-footage-chimpanzee-eating-banana.mp4',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ExpoVideo
        source={isStreamingVideoExpo ? monkeyRemoteVideoSource : MonkeyVideo}
        isLooping
        shouldPlay
        style={{width: 300, height: 300}}
      />

      <TouchableOpacity
        style={{
          width: 300,
          height: 30,
          marginBottom: 100,
          backgroundColor: 'blue',
        }}
        onPress={() => setIsStreamingVideoExpo(!isStreamingVideoExpo)}>
        <Text>
          EXPO Video source : {isStreamingVideoExpo ? 'Remote' : 'Bundled'}
        </Text>
      </TouchableOpacity>

      {/* <Video
        source={isStreamingVideoRNVideo ? monkeyRemoteVideoSource : MonkeyVideo}
        repeat
        style={{width: 300, height: 300}}
      /> */}
      {/* <TouchableOpacity
        style={{width: 300, height: 30, backgroundColor: 'red'}}
        onPress={() =>
          setIsStreamingVideoExpoRNVideo(!isStreamingVideoRNVideo)
        }>
        <Text>
          RN Video source : {isStreamingVideoRNVideo ? 'Remote' : 'Bundled'}
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

export default App;
