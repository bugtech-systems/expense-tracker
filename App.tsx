
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Navigation from './navigation';
import { COLORS } from './constants';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {


    return (
     <Provider store={store}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />   
        <Navigation />
      </Provider>
    );
  // }
}