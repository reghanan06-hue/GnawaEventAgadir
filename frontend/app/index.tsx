import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
export default function home() {
  const router = useRouter();
  const { height } = Dimensions.get("window");

  const slideAnim = useRef(new Animated.Value(height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF8F0" }}>
      <Image
        source={require("../assets/images/Gnawa.png")}
        style={styles.logo}
      />
      <Animated.View
        style={[
          styles.modelCard,
          {
            transform: [{ translateY: slideAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.titleApp}> Dar Gnawa</Text>
        <Text style={styles.baniere}> Bienvenue sur votre guide</Text>
        <Text style={styles.baniere}>complet de l’Évènement </Text>
        <Text style={styles.baniere}> Gnaoua à Agadir</Text>
        <TouchableOpacity
          style={styles.BttnGo}
          onPress={() => router.push("/artist")}
        >
          <Text style={styles.textBtn}>Explorer</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleApp: {
    flexDirection: "row",
    alignSelf: "center",
    color: "#675C5C",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 34,
  },
  logo: {
    height: 454,
    width: "100%",
    marginBottom: 34,
  },
  baniere: {
    fontSize: 20,
    fontWeight: "bold",
    //EE4949
    color: "#EE4949",
    alignItems: "center",
    textAlign: "center",
  },

  BttnGo: {
    width: 352,
    height: 70,
    fontSize: 24,
    color: "#FFFFFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 54,

    backgroundColor: "#EE4949",
    paddingVertical: 10,
  },

  textBtn: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  modelCard: {
    backgroundColor: "#fefefeff",
    height: 600,
    marginTop: -40, //
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
