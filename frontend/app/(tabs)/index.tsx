import { Image, StyleSheet, Text, View } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', 
       alignItems: 'center', backgroundColor: '#FFF8F0' }}>
<Image source={require('../assets/images/Gnawa.png')} style={styles.logo} />

<Text style={styles.titleApp}>  Dar Gnaoua  </Text>
<Text style={styles.baniere}>  Bienvenue sur votre guide complet de l’Évènement Gnaoua à Agadir </Text>

   </View>
  );
}

const styles = StyleSheet.create({
  titleApp: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#675C5C',
    fontSize:  32,
    fontWeight: 'bold',

  },
  baniere: {
     fontSize:  20,
    fontWeight: 'bold',
    //EE4949
    color: '#EE4949',
    alignSelf: 'center', },
  logo: {
    height: 178,
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
