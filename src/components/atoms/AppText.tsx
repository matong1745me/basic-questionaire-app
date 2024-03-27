import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

type AppTextProps = PropsWithChildren<{
  title: string;
  style: object;
}>;
const AppText = ({children, style}: AppTextProps): React.JSX.Element => {
  return <Text style={{...styles.baseText, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SukhumvitSet-Text',
    fontSize: 20,
  },
});

export default AppText;
