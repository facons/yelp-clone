import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        Hello World
      </Text>
    </SafeAreaView>
  );
};

export default App;
