import React from 'react'
import { Image, StyleSheet } from 'react-native'
import logo from '../assets/168.jpg'

export default function Logo() {
  return <Image source={logo} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
