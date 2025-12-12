import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventId, setEventId] = useState("");
  const [people, setPeople] = useState("");
  const [price, setPrice] = useState(0);

  const handleConfirm = () => {
    // Here you can send reservation data to backend
    console.log({ name, email, eventId, people, price });
    alert("Reservation Confirmed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservation</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/d/d0/HassanHakmoun.jpg",
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Nom et Prenom"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Id event"
        style={styles.input}
        value={eventId}
        onChangeText={setEventId}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nombre de personne"
        style={styles.input}
        value={people}
        onChangeText={(text) => {
          setPeople(text);
          setPrice(Number(text) * 50); // Example: 50 DH per person
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
