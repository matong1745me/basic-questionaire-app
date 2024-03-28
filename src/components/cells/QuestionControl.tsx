import React from 'react';
import {View} from 'react-native';
import type {PropsWithChildren} from 'react';

import QuestionCard from '@components/molecules/QuestionCard';

import {useAppSelector} from '@state/hooks';
import {selectCurrentQestion} from '@state/features/questionSlice';

type QuestionControlProps = PropsWithChildren<{}>;
const QuestionControlProps = ({}: QuestionControlProps): React.JSX.Element => {
  const currentQestion = useAppSelector(selectCurrentQestion);

  return (
    <View>
      <QuestionCard question={currentQestion} />
    </View>
  );
};

export default QuestionControlProps;
