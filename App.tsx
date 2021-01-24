import React, { useState } from 'react'
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
import AppLoading from 'expo-app-loading'

import { Button, RatingBar } from './components'
import { useFonts } from 'expo-font'

const heroBadImageSource = require('./assets/hero-bad.png')
const heroGoodImageSource = require('./assets/hero-good.png')
const heroGreatImageSource = require('./assets/hero-great.png')

const ratingMessages = ['Terrible', 'Bad', 'Not bad', 'Good', 'Incredible']

export default function App() {
  const [rating, setRating] = useState(1)
  const [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/MR.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const heroImageSource =
    rating > 4
      ? heroGreatImageSource
      : rating >= 3
      ? heroGoodImageSource
      : heroBadImageSource

  const heroElement = <Image style={styles.hero} source={heroImageSource} />

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={['#684DFF', '#3037F0']} style={styles.container}>
        <ImageBackground
          source={require('./assets/bgstripe.png')}
          style={styles.background}
        >
          {rating >= 4 ? (
            <ImageBackground
              source={require('./assets/great-bg-sprite.png')}
              style={styles.heroContainer}
            >
              {heroElement}
            </ImageBackground>
          ) : (
            <View style={styles.heroContainer}>{heroElement}</View>
          )}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Rate The Service</Text>
            <RatingBar onChange={value => setRating(value)} />
            <Text style={styles.ratingResult}>
              {ratingMessages[rating - 1]}
            </Text>
          </View>
          <Button label="Give Feedback" />
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
  heroContainer: {
    height: 400,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat',
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
  ratingResult: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
})
