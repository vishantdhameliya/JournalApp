import React,{useState} from "react";
import {View, Text, StyleSheet, StatusBar, TextInput, Image, TouchableOpacity,} from 'react-native';
import { strings } from "../Theme/Theme";


export default function TextInputScreen({route,navigation}) {

  
  const [inputtext, setinputtext]=useState('');
  const TakenString=route.params.paramkey;
  const task1="Task1Completed";
  const task2="Task2Completed";
  const task3="Task3Completed";

  const cdate=new Date().getDate() +"/"+ new Date().getMonth()+1 +"/"+ new Date().getFullYear();
  
  const ClickOnFinish=()=>{
    if(TakenString==strings.dailyPlanString){
      navigation.navigate('HomeScreen',{TaskCompletedVariable:task1, ndate:cdate})
    }
    if(TakenString==strings.gratitudeString){
      navigation.navigate('HomeScreen',{TaskCompletedVariable:task2, ndate:cdate})
    }
    if(TakenString==strings.dailyRecapString){
      navigation.navigate('HomeScreen',{TaskCompletedVariable:task3, ndate:cdate})
    }
  }

    return (
      
     <View style={styles.container}>

       <View style={styles.headerButton}>
         <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen',{TaskCompletedVariable:"no completed", ndate:cdate})}}>
          <Image source={require('../assets/close.png')} style={styles.image}></Image>
         </TouchableOpacity> 
       </View>

       <View style={styles.mainBody}>
         <Text style={styles.inputText} >{route.params.paramkey}</Text>
        <TextInput style={styles.inputText} onChangeText={(inputtext)=>{setinputtext(inputtext)}} ></TextInput>
       </View>

         
       <View style={styles.bottomButton}>
        <TouchableOpacity style={ inputtext ? styles.activeFinishButton : styles.inactiveFinishButton } disabled={!inputtext} onPress={ClickOnFinish}>
         <Text style={ inputtext ? styles.activeTextFinish : styles.inactiveTextFinish }>Finish</Text>
        </TouchableOpacity>
       </View>
       <StatusBar style='light'/>
     </View>
    );
  }

  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(0,0,0)',
      justifyContent:'center',
      alignItems:'center',
    },
    headerButton:{
      right:10,
      top:30,
      position:'absolute',
    },
    image:{
      height:30,
      width:30,
    },
    mainBody:{
      position:'absolute',
      top:60,
      marginLeft:30,
      marginRight:30,
    },
    inputText:{
      fontSize:30,
      color:'rgb(255,255,255)',
    },
    activeFinishButton:{
      backgroundColor:'#004CA3',
      padding:10,
      borderRadius:5,
    },
    activeTextFinish:{
      fontSize:30,
      fontWeight:'bold',
      color:'rgba(255,255,255,1)'
    },
    inactiveFinishButton:{
      backgroundColor:'#004CA350',
      padding:10,
      borderRadius:5,
    },
    inactiveTextFinish:{
      fontSize:30,
      color:'rgba(255,255,255,0.5)',
    },
    bottomButton:{
      bottom:20,
      right:20,
      position:'absolute',
    },

  })