import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { instance } from "../sevices/instance";

export default function ReservationForm() {
  const [eventId, setEventId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [people, setPeople] = useState("");
  const [price, setPrice] = useState(0);

  const handleConfirm = async () => {
    if (!eventId || !firstname || !lastname || !people) {
      Alert.alert("Erreur", "Tous les champs sont obligatoires");
      return;
    }

    try {
      const response = await instance.post("/booking", {
        event_id: Number(eventId),
        firstname,
        lastname,
        nombre_person: Number(people),
        prix: Number(price),
      });

      console.log("Réponse backend:", response.data);

      Alert.alert("Succès", "Réservation effectuée avec succès ✅");

      setFirstname("");
      setLastname("");
      setEventId("");
      setPeople("");
      setPrice(0);
    } catch (error) {
      Alert.alert("Erreur", "Impossible de créer la réservation");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réservation</Text>
      <TextInput
        placeholder="ID Event"
        style={styles.input}
        value={eventId}
        onChangeText={setEventId}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Prénom"
        style={styles.input}
        value={firstname}
        onChangeText={setFirstname}
      />

      <TextInput
        placeholder="Nom"
        style={styles.input}
        value={lastname}
        onChangeText={setLastname}
      />

      {/* <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      /> */}

      <TextInput
        placeholder="Nombre de personnes"
        style={styles.input}
        value={people}
        onChangeText={(text) => {
          setPeople(text);
          setPrice(Number(text) * 300);
        }}
        keyboardType="numeric"
      />

      <Text style={styles.price}>
        Prix : <Text style={{ color: "red" }}>{price}</Text> DH
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
