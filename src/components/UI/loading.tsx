import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';



function LoadingComponent() {
    const [color, setColor] = useState('teal');
    useEffect(() => {
      const id = setInterval(() => {
        setColor((color) => color == 'teal' ? 'royalblue' : 'teal');
      }, 700);
      return () => clearInterval(id);
    }, []);
  
    return (
      <View style={styles.indicatorWrapper}>
        <ActivityIndicator size="large" color={color} style={styles.indicator}/>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, 
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%'
  },
  item: {
    backgroundColor: '#888',
    padding: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {},
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
  },
});

export default LoadingComponent;
