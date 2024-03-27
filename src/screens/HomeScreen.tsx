import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import AppText from '@components/atoms/AppText';

const HomeScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startButton}>
        <AppText style={styles.startText}>Start !</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEFDED',
    padding: 20,
  },
  startButton: {
    width: '100%',
    backgroundColor: '#A1C398',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  startText: {
    color: '#FFFFFF',
  },
});

export default HomeScreen;
