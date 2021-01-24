import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export interface ButtonProps {
  label: string
}

export function Button({ label }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F8BF1C',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 25,
    fontFamily: 'Montserrat',
  },
})
