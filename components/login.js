import {View,Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import InputField from './InputField';
import BgImage from '../assets/bg.jpeg';
import GradientText from './GradientText';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

function  Login() {
        
    const image = {uri: 'https://w0.peakpx.com/wallpaper/155/132/HD-wallpaper-gradient-background-gradient-background-lockscreen.jpg'};
    return(
        
        <View style={styles.container}>
            <ImageBackground source={image} style={{width:'100%', height:'100%'}}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Login</Text>
                
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <Text style={styles.loginText}>Login To Your Account</Text>

                <InputField placeholder="Email/Username" icon="envelope"></InputField>
                <InputField placeholder="Password" icon="lock"></InputField>

                <TouchableOpacity style={styles.touchable} >
                    <Text style={styles.touchableText}>Forget Password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity >
                    <GradientText>Login</GradientText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchablesignUp} >
                    <Text style={styles.touchableText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
            
            
        </View>
        
    );

}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        
    },
    titleContainer:{
        flex:2,
        // justifyContent:'center',
        alignItems:'center',

        
    },
    formContainer:{
        flex:4,
        backgroundColor:'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal :30,
        paddingVertical: 30,
        
    },
    titleStyle:{
        marginTop: '30%',
        fontSize:60,
        fontWeight:'bold',
        color:'white',
        fontStyle: 'italic',
        

    },
    welcomeText:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom: 20,
        textAlign:"center",
        
        fontStyle: 'italic',
    },
    loginText:{
        fontSize:20,
        textAlign:"center",
        marginBottom: 40,
      
    },
    touchable:{
        alignItems:'flex-end',
        marginBottom: 20,
    },
    touchableText:{
        fontSize:15,
        fontWeight:'bold',
        color:'blue',
    },
    // loginButton:{
    //     alignItems:'center',
    //     backgroundColor:'blue',
    //     padding: 10,
    //     borderRadius: 10,
    //     marginTop: 20,
    // },
    logintouchableText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        
    },
    touchablesignUp:{
        alignItems:'center',
        marginTop: 20,
    },
    
})