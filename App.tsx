import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={['#684DFF', '#3037F0']} style={styles.container}>
        <ImageBackground
          source={require('./assets/bgstripe.png')}
          style={styles.background}
        >
          <ImageBackground
            source={require('./assets/great-bg-sprite.png')}
            style={styles.backgroundConfetti}
          >
            <Image
              style={styles.hero}
              source={require('./assets/hero-bad.png')}
            />
          </ImageBackground>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Rate The Service</Text>
            <View style={styles.ratingBar}>
              <Image
                style={styles.ratingStar}
                source={require('./assets/goldstar.png')}
              />
              <Image
                style={styles.ratingStar}
                source={require('./assets/goldstar.png')}
              />
              <Image
                style={styles.ratingStar}
                source={require('./assets/silverstar.png')}
              />
              <Image
                style={styles.ratingStar}
                source={require('./assets/silverstar.png')}
              />
              <Image
                style={styles.ratingStar}
                source={require('./assets/silverstar.png')}
              />
            </View>
            <Text style={styles.ratingResult}>Incredible</Text>
          </View>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingButtonLabel}>Give Feedback</Text>
          </TouchableOpacity>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  hero: {
    flex: 1,
    resizeMode: 'contain',
  },
  backgroundConfetti: {
    height: 400,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingTitle: {
    fontSize: 22,
    marginBottom: 20,
    opacity: 0.4,
  },
  ratingContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  ratingBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingStar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  ratingResult: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  ratingButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F8BF1C',
    borderRadius: 8,
  },
  ratingButtonLabel: {
    fontSize: 25,
  },
})
