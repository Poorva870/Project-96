import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class HealthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.webp')}
          style={styles.backgroundImage}>
          <ScrollView>
            <Text style={{ fontSize: 30 }}>
              Know some tips to maintain a proper health
            </Text>

            <Text style={styles.points}>1) Eat a healthy diet.</Text>

            <Text style={styles.points}>2) Consume less salt and sugar.</Text>

            <Text style={styles.points}>3) Reduce intake of harmful fats.</Text>

            <Text style={styles.points}>4) Avoid harmful use of alcohol.</Text>

            <Text style={styles.points}>5) Don’t smoke.</Text>

            <Text style={styles.points}>
              6) Be active, play indoor and outdoor games.
            </Text>

            <Text style={styles.points}>
              7) Take antibiotics only as prescribed.
            </Text>

            <Text style={styles.points}>
              8) Get yourself tested and vaccinated.
            </Text>

            <Text style={styles.points}>
              9) Get a proper sleep of 6 – 8 hours daily.
            </Text>

            <Text style={styles.points}>
              10) Avoid bright light before some hours of sleeping.
            </Text>

            <Text style={styles.points}>11) Have regular check-ups.</Text>

            <Text style={styles.points}>
              12) Drink more water and stay hydrated.
            </Text>

            <Text style={styles.points}>
              13) Work out (at least) 3 times a week.
            </Text>

            <Text style={styles.points}>
              14) Keep a check on mental health also.
            </Text>

            <Text style={styles.points}>
              15) Add fruits and vegetables to your meal.
            </Text>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize: 20, color: 'white' }}>Back</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  points: {
    fontSize: 20,
    marginTop: 40,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#3E97BE',
    margin: 40,
    width: 200,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
