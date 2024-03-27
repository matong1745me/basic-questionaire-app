import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

type AppTextProps = PropsWithChildren<{
  style?: object;
}>;
const AppText = ({children, style}: AppTextProps): React.JSX.Element => {
  return <Text style={{...styles.baseInputText, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  baseInputText: {
    fontFamily: 'SukhumvitSet-Text',
    fontSize: 20,
  },
});

export default AppText;
