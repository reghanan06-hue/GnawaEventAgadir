import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGetArtistById } from "@/sevices/artists/queries";
import { StatusBar } from "react-native";

export default function DetailArtist() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const artistId = Number(id);

  const { data, isLoading, isError, error } = useGetArtistById(artistId);

  if (isLoading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff6b6b" />
      </View>
    );

  if (isError)
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error: {error.message}</Text>
      </View>
    );

  if (!data)
    return (
      <View style={styles.center}>
        <Text>Aucun artiste trouvé</Text>
      </View>
    );

  // --------- FIX: la fonction ne retourne plus de JSX ----------
  const handleReservation = (event: any) => {
    Alert.alert(
      "Confirmation",
      `Vous avez réservé pour le concert le ${event.date_concert} !`,
      [
        {
          text: "Yes",
          style: "destructive",
          onPress: () => router.push(`/booking`),
        },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ffffffff" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Image source={{ uri: data.photo_url }} style={styles.image} />

        <Text style={styles.Textname}>
          {data.firstname} {data.lastname}
        </Text>

        <View style={styles.card}>
          <Text style={styles.name}>{data.bio}</Text>
          <Text style={styles.name}>Status : {data.status}</Text>
        </View>

        <Text style={styles.sectionTitle}>The event</Text>

        {data.EventInfos && data.EventInfos.length > 0 ? (
          data.EventInfos.map((event: any) => (
            <View key={event.id} style={styles.detailEvent}>
              <Text style={styles.eventTitle}>Date : {event.date_concert}</Text>
              <Text style={styles.eventText}>
                Heure : {event.heure_debut} - {event.heure_fin}
              </Text>
              <Text style={styles.eventText}>
                Scène : {event.scene_spectacle}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleReservation(event)}
              >
                <Text style={styles.buttonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.card}>
            <Text style={styles.name}>No events found</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6b6b",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    marginHorizontal: "5%",
    marginBottom: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 340,
    borderRadius: 12,
    marginBottom: 12,
  },
  Textname: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  detailEvent: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: "5%",
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  eventText: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ff6b6b",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
