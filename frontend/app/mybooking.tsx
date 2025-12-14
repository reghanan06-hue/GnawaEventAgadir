// import {
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useGetBooking } from "../sevices/reservation/resevation";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// type Booking = {
//   id: number;
//   event_id: number;
//   firstname: string;
//   lastname: string;
//   nombre_person: number;
//   prix: number;
// };

// const STORAGE_KEY = "savedBookings";

// export default function MyBooking() {
//   const { data, isLoading, isError, error } = useGetBooking();

//   if (isLoading)
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#ff6b6b" />
//       </View>
//     );

//   if (isError)
//     return (
//       <View style={styles.center}>
//         <Text style={{ color: "red" }}>Erreur: {error.message}</Text>
//       </View>
//     );

//   const bookings = Array.isArray(data) ? data : data?.bookings ?? [];

//   const handleSave = async (booking: Booking) => {
//     try {
//       const savedData = await AsyncStorage.getItem(STORAGE_KEY);
//       const savedBookings = savedData ? JSON.parse(savedData) : [];

//       // Vérifier si le booking est déjà sauvegardé
//       if (savedBookings.some((b: Booking) => b.id === booking.id)) {
//         Alert.alert("Info", "Cette réservation est déjà sauvegardée");
//         return;
//       }

//       savedBookings.push(booking);
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedBookings));
//       Alert.alert("Succès", "Réservation sauvegardée !");
//     } catch (error) {
//       console.log("Erreur sauvegarde booking:", error);
//       Alert.alert("Erreur", "Impossible de sauvegarder la réservation");
//     }
//   };

//   const renderItem = ({ item }: { item: Booking }) => (
//     <View style={styles.card}>
//       <Text style={styles.name}>
//         {item.firstname} {item.lastname}
//       </Text>
//       <Text>Event ID: {item.event_id}</Text>
//       <Text>Personnes: {item.nombre_person}</Text>
//       <Text>Prix: {item.prix} DH</Text>

//       <TouchableOpacity
//         style={styles.saveButton}
//         onPress={() => handleSave(item)}
//       >
//         <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   if (!bookings || bookings.length === 0)
//     return (
//       <View style={styles.center}>
//         <Text>Aucune réservation trouvée</Text>
//       </View>
//     );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={bookings}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7f7f7",
//     padding: 20,
//     marginTop: 30,
//   },
//   center: { flex: 1, justifyContent: "center", alignItems: "center" },
//   card: {
//     backgroundColor: "#ff6b6b",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//   },
//   name: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 4 },
//   saveButton: {
//     marginTop: 10,
//     backgroundColor: "#261e65",
//     paddingVertical: 8,
//     borderRadius: 8,
//     alignItems: "center",
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useGetBooking } from "../sevices/reservation/resevation";
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

export default function MyBooking() {
  const { data, isLoading, isError, error } = useGetBooking();

  if (isLoading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff6b6b" />
      </View>
    );

  if (isError)
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Erreur: {error.message}</Text>
      </View>
    );

  const bookings = Array.isArray(data) ? data : data?.bookings ?? [];

  const handleSave = async (booking: Booking) => {
    try {
      const savedData = await AsyncStorage.getItem(STORAGE_KEY);
      const savedBookings = savedData ? JSON.parse(savedData) : [];

      if (savedBookings.some((b: Booking) => b.id === booking.id)) {
        Alert.alert("Info", "Cette réservation est déjà sauvegardée");
        return;
      }

      savedBookings.push(booking);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedBookings));
      Alert.alert("Succès", "Réservation sauvegardée !");
    } catch (error) {
      console.log("Erreur sauvegarde booking:", error);
      Alert.alert("Erreur", "Impossible de sauvegarder la réservation");
    }
  };

  const renderItem = ({ item }: { item: Booking }) => (
    <View style={styles.card}>
      <Text style={styles.name}>Stage: {item.stage}</Text>
      <Text style={styles.name}>Artist: {item.artist}</Text>
      <Text>Event ID: {item.event_id}</Text>
      <Text>Personnes: {item.nombre_person}</Text>
      <Text>Prix: {item.prix} DH</Text>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => handleSave(item)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );

  if (!bookings || bookings.length === 0)
    return (
      <View style={styles.center}>
        <Text>Aucune réservation trouvée</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
    marginTop: 30,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#ff6b6b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 4 },
  saveButton: {
    marginTop: 10,
    backgroundColor: "#5cd26bff",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
