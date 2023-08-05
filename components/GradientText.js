import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = (props) => {
  return (
    <LinearGradient
        colors={['blue', 'purple']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.gradient}
      >
        <Text style={styles.text}>{props.children}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    // paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    textAlign:"center",
    fontWeight:'bold',
    marginBottom: 5,
    backgroundColor: 'transparent',
    alignItems:'center',
    marginTop: 5,
    color: 'white',
  fontStyle:'italic',
    

        
       
  },
});

export default GradientText;
