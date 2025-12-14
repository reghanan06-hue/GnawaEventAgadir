import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetArtist } from "../sevices/artists/queries";
type Artist = {
  id: number;
  firstname: string;
  lastname: string;
  photo_url: string;
};
export default function artist() {
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetArtist();

  const renderItem = ({ item }: { item: Artist }) => (
    <View
      style={{
        backgroundColor: "#ff6b6b",
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* <Text>Artist Screen</Text> */}

      <Image
        source={{ uri: item.photo_url }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          marginRight: 15,
        }}
      />

      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {`${item.firstname} ${item.lastname}`}
      </Text>

      <TouchableOpacity
        style={{
          width: 37,
          height: 37,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.push(`./artist/${item.id}`)}
      >
        <Image
          source={require("../assets/info.png")}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* <Text style={{ fontWeight: "bold" }}>i</Text> */}
    </View>
  );

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff6b6b" />
      </View>
    );

  if (isError)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error: {error.message}</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f7f7f7ff",
        width: "100%",
        marginTop: 30,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // titleApp: {
  //   flexDirection: "row",
  //   alignSelf: "center",
  //   color: "#675C5C",
  //   fontSize: 32,
  //   fontWeight: "bold",
  //   marginBottom: 34,
  // },
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    padding: 25,
    // shadowColor: "#71e26fff",
    // shadowOpacity: 0.4,
    // shadowRadius: 9,
    // elevation: 6,
  },
});
