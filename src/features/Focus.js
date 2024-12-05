import React,{useState}  from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import {colors} from '../utilis/color.js'
import {RoundedButton} from "../components/RoundedButton"
import {spacing} from '../utilis/size'

export const Focus=({addSubject})=>{
  const [subject,setSubject]=useState(null);
 

  return (
  <View style={styles.container}>

  <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput} 
        onChangeText={setSubject}
        label='What would like you to focus on?'
        />

      <View> 
        <RoundedButton
        style={styles.button}
         title="+" size={50} onPress={()=>addSubject(subject)}/>
     </View>    

  </View>
      
   
  </View>
);
}

const styles=StyleSheet.create({
  container:{

  },
  button:{
    justifyContent:'center'
  },
  textInput:{
   flex:1,
   marginRight:spacing.sm
  },
  inputContainer:{
    padding:spacing.lg,
    justifyContent:'top',
    flexDirection:'row'

  },
 
})