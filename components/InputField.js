import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Don't forget to import the Icon

function InputField(props) {
  return (
    <View style={styles.inputContainer}>
      <Icon name={props.icon} size={20} color="#000" />
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  }
});
