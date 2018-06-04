//import librray to help using component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//making component

// const App = () =>{
//     return(
//         <Text>Some Text</Text>
//     );
// };
//sama aja ama yang dibawah

const App = () => (
<View style={{ flex: 1 }}>
<Header HeaderText={'Albumss'} />
<AlbumList />
</View>);


//rendering to screen
AppRegistry.registerComponent('albu', () => App);

