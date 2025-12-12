import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
// import { useGetArtistById } from "../sevices/artists/queries";
import { useGetArtistById } from "../../sevices/artists/queries";

export default function DetailArtist() {
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

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Détail Artiste</Text> */}
      <Image source={{ uri: data.photo_url }} style={styles.image} />
      <Text style={styles.Textname}>
        {data.firstname} {data.lastname}
      </Text>
      <View style={styles.card}>
        <Text style={styles.name}>
          {data.bio} {data.bio}
        </Text>
        <Text style={styles.name}>status : {data.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 90,
    backgroundColor: "#ff6b6b",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "#ffffffff",
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 340,
    borderRadius: 12,
    marginBottom: 10,
  },
  Textname: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
