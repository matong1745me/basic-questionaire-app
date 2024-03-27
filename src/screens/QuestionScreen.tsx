import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import AppText from '@components/atoms/AppText';

const QuestionScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppText>TEST</AppText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFDED',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEFDED',
    padding: 20,
  },
});

export default QuestionScreen;
