import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Dimensions, PanResponder } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskCompleted from './TaskCompleted';
import {strings}  from '../Theme/Theme';


export default function HomeScreen( { navigation, route } ) {

  
  const[mainText, setmainText]=useState(strings.dailyPlanString);
  const[DailyPlanState, setDailyPlanState ]=useState(true);
  const[GratitudeState, setGratitudeState ]=useState(false);
  const[DailyrecapState, setDailyrecapState ]=useState(false);
  const[Task1Completed, setTesk1Completed ] =useState(false);
  const[Task2Completed, setTesk2Completed ] =useState(false);
  const[Task3Completed, setTesk3Completed ] =useState(false);

  
    
  //const ndate=new Date().getDate()+1 +"/"+new Date().getMonth()+1 +"/"+new Date().getFullYear();
  const cdate=new Date().getDate() +"/"+new Date().getMonth()+1 +"/"+new Date().getFullYear();
  
  
  
    
  const ClickDailyPlan = () => {
    const cdate= new Date().getDate() +"/"+ new Date().getMonth()+1 +"/"+ new Date().getFullYear();
      if( route.params && cdate!=route.params.ndate )
      {
        //alert(cdate),
        setDailyPlanState ( true ),
        setGratitudeState ( false ),
        setDailyrecapState ( false ),
        setTesk1Completed ( false ),
        route.params.TaskCompletedVariable = "not completed",
        setmainText( strings.dailyPlanString )
      } 
      else 
      {
        if( route.params && route.params.TaskCompletedVariable == "Task1Completed" )
        {
          setTesk1Completed( true );
        }
        if( route.params && route.params.TaskCompletedVariable == "Task2Completed" )
        {
          setTesk2Completed( true );
        }
        if(route.params && route.params.TaskCompletedVariable == "Task3Completed" )
        {
          setTesk3Completed( true );
        }
        setDailyPlanState( true ),
        setGratitudeState( false ),
        setDailyrecapState( false ),
        setmainText( strings.dailyPlanString )
    }
  }
  
  const ClickGratitude = () => {
    const cdate = new Date().getDate() +"/"+ new Date().getMonth()+1 +"/"+ new Date().getFullYear();
      if( route.params && cdate != route.params.ndate )
      {
        setDailyPlanState(false),
        setGratitudeState(true),
        setDailyrecapState(false),
        setTesk2Completed(false),
        route.params.TaskCompletedVariable="not completed",
        setmainText(strings.gratitudeString)

      }
      else
      {
        if( route.params && route.params.TaskCompletedVariable == "Task1Completed" )
        {
          setTesk1Completed( true );
        }
        if( route.params && route.params.TaskCompletedVariable == "Task2Completed" )
        {
          setTesk2Completed( true );
        }
        if( route.params && route.params.TaskCompletedVariable == "Task3Completed" )
        {
          setTesk3Completed( true );
        }
        setDailyPlanState( false ),
        setGratitudeState( true ),
        setDailyrecapState( false ),
        setmainText( strings.gratitudeString )
      }  
  }
  
  const ClickDailyRecap = () => {
    const cdate = new Date().getDate() +"/"+ new Date().getMonth()+1 +"/"+ new Date().getFullYear();
      if( route.params && cdate != route.params.ndate )
      {
        setDailyPlanState( false ),
        setGratitudeState( false ),
        setDailyrecapState( true ),
        setTesk3Completed( false ),
        route.params.TaskCompletedVariable = "not completed",
        setmainText( strings.dailyRecapString )
      }
      else
      {
        if( route.params && route.params.TaskCompletedVariable == "Task1Completed" )
        {
          setTesk1Completed( true );
        }
        if( route.params && route.params.TaskCompletedVariable == "Task2Completed" )
        {
          setTesk2Completed( true );
        }
        if(route.params && route.params.TaskCompletedVariable == "Task3Completed" )
        {
          setTesk3Completed( true );
        }
        setDailyPlanState( false ),
        setGratitudeState( false ),
        setDailyrecapState( true ),
        setmainText( strings.dailyRecapString )
      }
  }
  
  const _panResponder=PanResponder.create(
    {
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if( gestureState.vx > 0 ) {
          // alert('move right');
          if( DailyrecapState ) {
            ClickGratitude();
          }
          if( GratitudeState ) {
            ClickDailyPlan();
          }
        }

        if( gestureState.vx < 0 ) {
          //alert('move left');
          if( DailyPlanState ) {
            ClickGratitude();
          }
          if( GratitudeState ) {
            ClickDailyRecap();
          }
        }
          
      },
        
    });

    useEffect(()=>{
      if((route.params && cdate!=route.params.ndate)){
        if(Task1Completed){
          ClickDailyPlan()
        }else if(Task2Completed){
          ClickGratitude()
        }else if(Task3Completed){
          ClickDailyRecap()
        }
      }
    })


    return (
      
      <View style = { styles.container } >
        <View style = { styles.header } >
          <TouchableOpacity  onPress = { ClickDailyPlan } >
            <Text style = { DailyPlanState ? styles.activeHeaderButton : styles.inactiveHeaderButton } > Daily plan </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = { ClickGratitude } >
            <Text style = { GratitudeState ? styles.activeHeaderButton : styles.inactiveHeaderButton }> Gratitude </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = { ClickDailyRecap } >
            <Text style = { DailyrecapState ? styles.activeHeaderButton : styles.inactiveHeaderButton }> Daily recap </Text>
          </TouchableOpacity>      
        </View>

        <View style = { styles.swipetop } { ..._panResponder.panHandlers } />

        <View>
          {
            ( ( ( route.params && route.params.TaskCompletedVariable == "Task1Completed" || Task1Completed ) && DailyPlanState ) || 
            ( ( route.params && route.params.TaskCompletedVariable == "Task2Completed" || Task2Completed ) && GratitudeState ) ||
            ( ( route.params && route.params.TaskCompletedVariable == "Task3Completed" || Task3Completed ) && DailyrecapState ) ) ?
            <TaskCompleted/> :
            ( <TouchableOpacity onPress = { () => navigation.navigate ('TextInputScreen',{ paramkey : mainText } ) } style = { styles.mainBody } >
            <Text style = { styles.mainText } > { mainText } __________</Text></TouchableOpacity> )
          }  
        </View>  
        <View style={styles.swipebottom} {..._panResponder.panHandlers}>
          
        </View>
        <StatusBar style="light" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      flexDirection:'row',
      top:30,
      position:'absolute',
      alignItems:'center'
    },
    activeHeaderButton:{
      color:'rgb(255,255,255)',
      fontSize:20,
      fontWeight:'bold',
      backgroundColor:'rgba(255,255,255,0.2)',
      padding:10,
      borderRadius:20,
      marginLeft:5,
      marginRight:5,
    },
    inactiveHeaderButton:{
      color:'rgb(255,255,255)',
      fontSize:12,
      backgroundColor:'rgba(255,255,255,0.2)',
      padding:5,
      borderRadius:20,
      marginLeft:5,
      marginRight:5,
    },
    mainText:{
      color:'rgb(255,255,255)',
      fontSize:30,
      justifyContent:'center',
      marginLeft:25,
      marginRight:25,
    },
    swipebottom:{
      bottom:0,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height*0.4,
      backgroundColor:'rgb(0,0,0)',
      position:'absolute',
    },
    swipetop:{
      top:100,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height*0.3,
      backgroundColor:'rgb(0,0,0)',
      position:'absolute',
    },
    
  });

  