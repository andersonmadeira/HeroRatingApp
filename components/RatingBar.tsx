import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export interface RatingBarProps {
  onChange: (value: number) => void
  value?: number
  total?: number
}

const goldenStarImageSource = require('../assets/goldstar.png')
const silverStartImageSource = require('../assets/silverstar.png')

export function RatingBar({ onChange, value = 1, total = 5 }: RatingBarProps) {
  const [rating, setRating] = useState(value)

  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <View style={styles.ratingBar}>
      {[...new Array(total)].map((_, i) => {
        const ratingNumber = i + 1
        const starImageSource =
          ratingNumber <= rating
            ? goldenStarImageSource
            : silverStartImageSource

        return (
          <TouchableOpacity
            key={ratingNumber}
            onPress={() => {
              const newRating = ratingNumber
              setRating(newRating)
              onChange(newRating)
            }}
          >
            <Image style={styles.ratingStar} source={starImageSource} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingStar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
})
