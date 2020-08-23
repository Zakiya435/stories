import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput  } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Stories', 
            style: { color: '#fff', fontSize: 20 },
          }}
        />
            <TextInput             
            placeholder="Author"
            ></TextInput>
            <TextInput             
            placeholder="Title"
            ></TextInput>
            <TextInput             
            placeholder="Story"
            multiline = {true}
            ></TextInput>
        </View>
      );
    }
  }
