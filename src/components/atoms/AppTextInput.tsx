import * as React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {TextInputProps, StyleProp} from 'react-native';

type AppTextInputProps = PropsWithChildren<TextInputProps & StyleProp<any>>;
const AppTextInput = ({
  children,
  style,
  ...rest
}: AppTextInputProps): React.JSX.Element => {
  return (
    <TextInput style={{...styles.baseText, ...style}} {...rest}>
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SukhumvitSet-Text',
    fontSize: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
  },
});

export default AppTextInput;
