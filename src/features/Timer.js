import React,{useState} from "react";
import {View,StyleSheet,Text,Platform,Vibration} from "react-native"
import {ProgressBar} from 'react-native-paper'
import {useKeepAwake} from 'expo-keep-awake'
import {Countdown} from "../components/Countdown"
import {RoundedButton} from "../components/RoundedButton"
import {spacing} from "../utilis/size"
import {colors} from "../utilis/color"
import {Timing} from "./Timing"


const ONE_SECOND_IN_MS=1000;

const PATTERN=[
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,

]

export const Timer=({focusSubject,clearSubject,onTimerEnd})=>{
  useKeepAwake();
  const [isStarted,setIsStarted]=useState(false);
  const [progress,setProgress]=useState(1);
  const [minutes,setMinutes]=useState(0.1);
  const OnEnd=(reset)=>{
          Vibration.vibrate(PATTERN);
          setIsStarted(false);
          setProgress(1);
          reset();
          onTimerEnd(focusSubject);
          
  }
  return(
  <View style={styles.container}>
      <View style={styles.countdown}>
      <Countdown 
      minutes={minutes}
      isPaused={!isStarted}
      onProgress={(progress)=>setProgress(progress)} 
      onEnd={OnEnd}
      />
      <View style={{paddingTop:spacing.sm}}>

     <Text style={styles.title}>Focusing On </Text>
     <Text style={styles.task}> {focusSubject}</Text>
     </View>
     </View>

    <View style={{paddingTop:spacing.sm}}>
        <ProgressBar 
        progress={progress}
             
            color={colors.profressBar} style={{height:spacing.sm}}
            />
    </View>
 
      <View style={styles.timingWrapper}>
     <Timing onChangeTime={setMinutes}/>
     </View>


     <View style={styles.buttonWrapper}>

     {!isStarted && (
        <RoundedButton title='start' onPress={()=>setIsStarted(true)}/>
     )}

     {
       isStarted && (
          <RoundedButton title='pause' onPress={()=>setIsStarted(false)}/>
       )
     }
    
         
        
     </View>

<View style={styles.clearSubject}>
  <RoundedButton size={50} title='-' onPress={clearSubject}/>
    </View>

  </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,

  },
  countdown:{
    flex:0.5,
    alignItems:'center',

  },
  timingWrapper:{
    flex:0.1,
    flexDirection:'row',
    paddingTop:spacing.xxl

  },
  clearSubject:{
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    padding:spacing.md,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
     color:colors.white,
     fontWeight:'bold',
     textAlign:'center'
  },
  task:{
    color:colors.white,
     textAlign:'center'
  }
})