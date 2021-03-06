import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={.6}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    margin: 5,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
