import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet} from 'react-native';

import AppText from '@components/atoms/AppText';
import AppTextInput from '@components/atoms/AppTextInput';

import {useAppDispatch} from '@state/hooks';
import {setPlayerName} from '@state/features/playerSlice';
type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props): React.JSX.Element => {
  const [inputName, setInputName] = useState('');
  const dispatch = useAppDispatch();
  const goToQuestionScreen = () => {
    dispatch(setPlayerName(inputName));
    navigation.navigate('Question');
    setInputName('');
  };

  const goToLeaderboard = () => {
    navigation.navigate('LeaderBoard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppTextInput
          value={inputName}
          onChangeText={setInputName}
          placeholder="Input player name"
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress={goToQuestionScreen}>
          <AppText style={styles.startText}>Start !</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.leaderboardButton}
          onPress={goToLeaderboard}>
          <AppText style={styles.leaderboardText}>LEADERBOARD</AppText>
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
    backgroundColor: '#b0d0ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  startText: {
    color: '#FFFFFF',
  },
  leaderboardButton: {
    width: '100%',
    borderColor: '#aa182c',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  leaderboardText: {
    color: '#aa182c',
  },
});

export default HomeScreen;
