import React from 'react'
import {View,Text,StyleSheet,FlatList} from "react-native"
import {colors} from "../utilis/color"
import {fontSizes,spacing} from "../utilis/size"
export const FocusHistory=({history})=>{

  if(!history || !history.length) return  <Text style={styles.title}>We havenot anything yet</Text>;

  const renderItem=({item})=>  <Text style={styles.items}> -{item}</Text>
  return(
    <View style={styles.container}>
       <Text style={styles.title}>
           Things we have Focused On
      </Text>

      <FlatList
       data={history}
       renderItem={renderItem}
       />
    </View>
  )

}

const styles=StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  items:{
    fontSize:fontSizes.md,
    color:colors.white,
    paddingTop:spacing.sm
  },
  title:{
    color:colors.white,
    fontSize:fontSizes.md,
    padding:spacing.md,
    fontWeight:'bold'
  }
})