   import { Image, StyleSheet, Text, View,TouchableOpacity,Animated ,Dimensions} from 'react-native';
import React, { useEffect,useRef } from "react";


export default function artist() {
    

  return (
   <View style={{ flex: 1, alignItems:"center",backgroundColor: '#FFF8F0' }}>




   <Text style={styles.baniere}>  Gnaoua à Agadir</Text> 



   </View>
  );
}

const styles = StyleSheet.create({ 
  titleApp: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: '#675C5C',
    fontSize:  32,
    fontWeight: 'bold',
    marginBottom: 34,


  },
    logo: {
    height: 454,
    width: "100%",
   marginBottom: 34,
   
  },
  baniere: {
     fontSize:  20,
    fontWeight: 'bold',
    //EE4949
    color: '#EE4949',
    alignItems: 'center',
    textAlign: 'center',

 },

  BttnGo: {
    width:352,
    height:70,
    fontSize:24,
    color:"#FFFFFF",  
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 54,

    backgroundColor: '#EE4949',
    paddingVertical: 10,},

    textBtn: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    modelCard: {
    backgroundColor: "#fefefeff",
    height: 600,
    marginTop: -40, // 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 6,}
});
