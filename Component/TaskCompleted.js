import React,{useState,Component} from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import TextInputScreen from "./TextInputScreen";
import { strings } from "../Theme/Theme";


export default function TaskCompleted(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/success.png')}/>
            <Text style={styles.text} >{strings.taskCompleted}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(0,0,0)',
    },
    image:{
        width:80,
        height:80,
        margin:10,
    },
    text:{
        color:'rgb(255,255,255)',
        fontSize:30,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        marginLeft:30,
        marginRight:30,
    }
})
