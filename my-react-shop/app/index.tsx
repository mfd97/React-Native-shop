import { Image, StyleSheet, Text, View } from "react-native";

const shopImage = require("../assets/images/shop.png");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={shopImage} style={styles.image} />
      <Text style={styles.heading}>My Shop</Text>
      <Text style={styles.description}>My shop description etc</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
});