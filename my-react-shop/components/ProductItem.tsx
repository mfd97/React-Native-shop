import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../data/products'

interface ProductItemProps {
  product: Product
  index: number
}

const ProductItem = ({ product, index }: ProductItemProps) => {
  return (
    <View key={index} style={styles.productCard}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price.toFixed(2)} KWD</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
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
})

