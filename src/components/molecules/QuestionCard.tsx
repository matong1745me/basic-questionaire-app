import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import type {PropsWithChildren} from 'react';
import {useNavigation} from '@react-navigation/native';

import type {Question} from '../../data/questions';
import AppText from '@components/atoms/AppText';

import {useAppDispatch, useAppSelector} from '@state/hooks';
import {
  nextQuestion,
  previousQuestion,
  saveAnswer,
  selectSelectedChoice,
} from '@state/features/questionSlice';
import {addScore} from '@state/features/playerSlice';
type QuestionCardProps = PropsWithChildren<{
  question: Question;
}>;
const QuestionCard = ({question}: QuestionCardProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const choice = useAppSelector(selectSelectedChoice);
  const currentQuestionIndex = useAppSelector(
    state => state.question.currentIndex,
  );
  const allQuestions = useAppSelector(state => state.question.initialQuestions);
  const answerIds = useAppSelector(state => state.question.answerIds);
  const [selectedChoice, setSelectedChoice] = useState<null | number>(null);

  const onNextClick = () => {
    dispatch(nextQuestion());
    setSelectedChoice(null);
  };
  const onBackClick = () => {
    dispatch(previousQuestion());
    setSelectedChoice(null);
  };
  const saveScore = () => {
    const total = allQuestions.reduce((sum, question, index) => {
      if (question.answer === answerIds[index].answerId) {
        return sum + 1;
      }
      return sum;
    }, 0);
    dispatch(addScore(total));
    navigation.navigate('LeaderBoard');
  };

  useEffect(() => {
    if (selectedChoice) {
      dispatch(saveAnswer({answerId: selectedChoice, questionId: question.id}));
    }
  }, [selectedChoice]);

  useEffect(() => {
    if (choice) {
      setSelectedChoice(choice.answerId);
    }
  }, [choice]);

  return (
    <View style={styles.container}>
      <View style={styles.questionHeader}>
        <AppText style={styles.questionTitleText}>
          {currentQuestionIndex + 1}. {question?.questionTitle}
        </AppText>
      </View>
      {question?.choices.map((choice, index) => {
        return (
          <TouchableOpacity
            onPress={() => setSelectedChoice(choice.id)}
            style={[
              styles.choiceBox,
              selectedChoice === choice.id ? styles.selectedChoiceBox : {},
            ]}
            key={choice.id}>
            <AppText
              style={
                selectedChoice === choice.id ? styles.selectedChoiceText : {}
              }>
              {index + 1}) {choice.choiceTitle}
            </AppText>
          </TouchableOpacity>
        );
      })}
      <View style={styles.stepButtonContainer}>
        {currentQuestionIndex > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
            <AppText style={styles.backText}>{'< Back'}</AppText>
          </TouchableOpacity>
        )}
        {currentQuestionIndex + 1 < allQuestions.length ? (
          <TouchableOpacity
            disabled={selectedChoice === null}
            style={styles.nextButton}
            onPress={onNextClick}>
            <AppText
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.nextText,
                color: selectedChoice === null ? '#aaaaaa' : '#0d6efd',
              }}>
              {'Next >'}
            </AppText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={saveScore}>
            <AppText style={styles.nextText}>{'Finish'}</AppText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 0,
  },
  questionHeader: {
    backgroundColor: '#0d6efd',
    borderColor: '#b0d0ff',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    shadowOpacity: 1,
    shadowColor: '#b0d0ff',
    width: 'auto',
  },
  questionTitleText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  choiceBox: {
    borderColor: '#0d6efd',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 'auto',
  },
  selectedChoiceBox: {
    backgroundColor: '#0d6efd',
  },
  selectedChoiceText: {
    color: '#ffffff',
  },
  stepButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: '#0d6efd',
  },
  nextButton: {
    padding: 10,
    marginLeft: 'auto',
  },
  nextText: {
    color: '#0d6efd',
  },
  disabled: {
    color: '#ffffff',
  },
});

export default QuestionCard;
