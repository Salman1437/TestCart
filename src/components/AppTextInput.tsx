import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps, TouchableOpacity,Platform } from 'react-native';
import Colors from '../constants/color';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  isPassword?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ label, isPassword, ...rest }) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}></Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={secureText}
          placeholderTextColor="#999"
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Text style={styles.toggle}>
              {secureText ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
 input: {
  flex: 1,
  fontSize: 16,
  color: Colors.white,
  backgroundColor: 'transparent',
  textAlignVertical: 'center',
},
  toggle: {
    color: 'blue',
    marginLeft: 10,
  },
});
