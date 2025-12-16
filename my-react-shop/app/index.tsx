import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";

const shopImage = require("../assets/images/mylogo.jpg");

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Image source={shopImage} style={styles.image} />
      <Text style={styles.heading}>My Shop</Text>
      <Text style={styles.description}>My shop description etc</Text>
      
      <View style={styles.productsContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price.toFixed(2)} KWD</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
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
    marginBottom: 1,
    resizeMode: "contain",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "100%",
  },
  productCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    margin: 5,
    width: "45%",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
});