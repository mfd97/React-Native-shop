import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductItem = () => {
  return (
    <View key={index} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price.toFixed(2)} KWD</Text>
          </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})

