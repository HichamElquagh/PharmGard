import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://pharmacies-de-garde-nc.p.rapidapi.com/q/health',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
  }
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <FlipCard style={styles.card}>
          {/* Face Side */}
          <View style={styles.face}>
            <Text style={styles.title}>Health Data</Text>
            <Text style={styles.text}>Tap to flip</Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text style={styles.title}>Pharmacy Name: {data.name}</Text>
            <Text style={styles.text}>Address: {data.address}</Text>
            <Text style={styles.text}>Phone: {data.phone}</Text>
            <Text style={styles.text}>Hours: {data.hours}</Text>
          </View>
        </FlipCard>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 0,
  },
  face: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontSize: 16,
    margin: 5,
  },
});
