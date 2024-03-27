import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet} from 'react-native';

import AppText from '@components/atoms/AppText';
import AppTextInput from '@components/atoms/AppTextInput';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props): React.JSX.Element => {
  const [name, setName] = useState('');
  const goToQuestionScreen = () => {
    navigation.navigate('Question');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppTextInput value={name} onChangeText={setName} gigs={() => {}} />
        <TouchableOpacity
          style={styles.startButton}
          onPress={goToQuestionScreen}>
          <AppText style={styles.startText}>Start !</AppText>
        </TouchableOpacity>
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
