import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AppText from '@components/atoms/AppText';

import {useAppSelector} from '@state/hooks';
import {selectSortedPlayers} from '@state/features/playerSlice';

const QuestionScreen = ({navigation}: {navigation: any}): React.JSX.Element => {
  const allPlayers = useAppSelector(selectSortedPlayers);
  const goToHome = () => {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.leaderboardBox}>
            <AppText>LEADERBOARD</AppText>
          </View>
          <View style={styles.playersContainer}>
            {allPlayers.map((player, index) => {
              return (
                <View
                  style={
                    index + 1 === allPlayers.length
                      ? styles.lastChildPlayerItem
                      : styles.playerItem
                  }>
                  <AppText style={styles.name}>{player.name}</AppText>
                  <AppText style={styles.score}>{player.score}</AppText>
                </View>
              );
            })}
          </View>
          <TouchableOpacity style={styles.backButton} onPress={goToHome}>
            <AppText style={styles.backText}>{'< Back'}</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    padding: 20,
  },
  leaderboardBox: {
    marginBottom: 20,
    backgroundColor: '#b0d0ff',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  playersContainer: {
    borderColor: '#b0d0ff',
    borderWidth: 2,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  playerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#b0d0ff',
  },
  lastChildPlayerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  name: {},
  score: {
    textAlign: 'left',
  },
  backButton: {
    width: '100%',
    borderColor: '#b0d0ff',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backText: {
    color: '#b0d0ff',
  },
});

export default QuestionScreen;
