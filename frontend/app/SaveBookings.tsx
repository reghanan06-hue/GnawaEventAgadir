import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Booking = {
  id: number;
  event_id: number;
  stage: string;
  artist: string;
  nombre_person: number;
  prix: number;
};

const STORAGE_KEY = "savedBookings";

export default function SavedBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSavedBookings = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed = data ? JSON.parse(data) : [];
      setBookings(parsed);
    } catch (error) {
      console.log("Erreur chargement bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSavedBookings();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff6b6b" />
      </View>
    );
  }

  if (bookings.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No reservation saved</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>Booking Saved : </Text>
            <Text>Personnes : {item.nombre_person}</Text>
            <Text>Prix : {item.prix} DH</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
    marginTop: 60,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ff6b6b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
