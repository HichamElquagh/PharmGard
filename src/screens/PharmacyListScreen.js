import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://pharmacies-de-garde-nc.p.rapidapi.com/gardes',
  headers: {
    'X-RapidAPI-Key': '61b7c75b20msh7f180fd7b24b6f2p155233jsne443f22805f3',
    'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
  }
};

export default function App() {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        const pharmaciesData = response.data.filter(entry => entry.type === 'PHARMACIE');
        setPharmacies(pharmaciesData.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleOpenMap = (gmapsLink) => {
    // Open Google Maps link
    Linking.openURL(gmapsLink);
  };

  return (
    <ScrollView style={styles.container}>
      {pharmacies.length > 0 ? (
        pharmacies.map((pharmacy, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleOpenMap(pharmacy.gmaps)}
          >
            <Image
              source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.prismic.io%2Fwellcomecollection%2Fa29b68cedc0f403919bf331c62e1d08986824b27_alus.jpg%3Fauto%3Dcompress%2Cformat&tbnid=4hCtFFv4dVVgqM&vet=12ahUKEwjDqLyBg7OEAxXtTaQEHd38ALUQMygtegUIARDXAQ..i&imgrefurl=https%3A%2F%2Fwellcomecollection.org%2Farticles%2FWe9Wqx4AAA5amD91&docid=mSzJyzGTuerZnM&w=4000&h=2998&q=pharmacy%20images%20&ved=2ahUKEwjDqLyBg7OEAxXtTaQEHd38ALUQMygtegUIARDXAQ' }} // Placeholder image URL
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{pharmacy.nom}</Text>
              <Text style={styles.text}>Type: PHARMACIE</Text>
              <Text style={styles.text}>Date: {pharmacy.date}</Text>
              <Text style={styles.text}>Address: {pharmacy.codePostal}</Text>
              <Text style={styles.text}>Phone: {pharmacy.telephone}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  content: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
});
