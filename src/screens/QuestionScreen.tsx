import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import AppText from '@components/atoms/AppText';

import QuestionControl from '@components/cells/QuestionControl';

import {useAppSelector} from '@state/hooks';

const QuestionScreen = (): React.JSX.Element => {
  const name = useAppSelector(state => state.player.name);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.helloBox}>
          <AppText>Player Name: {name}</AppText>
        </View>
        <QuestionControl />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEFDED',
    padding: 20,
  },
  helloBox: {
    marginBottom: 20,
  },
});

export default QuestionScreen;
