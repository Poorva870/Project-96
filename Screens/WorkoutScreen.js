import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class WorkoutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.webp')}
          style={styles.backgroundImage}>
          <ScrollView>
            <Text style={{ fontSize: 30 }}>
              Types Of Exercise You Need To Do
            </Text>

            <Text style={styles.points}>1) Cardio exercise:     It is always smart to warm up with 5 to 10 minutes of light cardio.</Text>

            <Text style={styles.points}>2) Weight training:     You don't have to lift heavy weights or even spend a lot of time on weight training, but you do need to lift to make your muscles stronger</Text>

            <Text style={styles.points}>3) Flexibility training:      You don't need a separate workout for this—stretching should be included in every workout.</Text>

             <Text style={{ fontSize: 30, marginTop:50 }}>
              Beginner Workout Schedule
            </Text>

            <Text style={styles.points}>1) Ease into exercise. Start with a simple cardio program and a full-body strength training routine.</Text>

            <Text style={styles.points}>2) Be sure to rest and recover. You may need extra recovery days to allow your body to rest and heal. It's normal to be sore.</Text>

            <Text style={styles.points}>
              3) Make it work for you. A typical beginner program will include two to three days of cardio and two days of strength training.
            </Text>

            <Text style={{ fontSize: 30, marginTop:50 }}>
              Sample Weekly Workout Plan
            </Text>

            <Text style={styles.points}>
              1) Remember to start every workout with 5 to 10 minutes of light cardio and stretching, and to cool down with flexibility exercises.
            </Text>

            <Text style={styles.points}>
              2) Aim to include multiple planes of motion in your workout. Add lateral moves by doing side lunges or shuffles in your warm-up, for example, and incorporate rotation by throwing cross-body punches while walking.
            </Text>

            <Text style={{ fontSize: 30, marginTop:50 }}>
              Advanced Workout Schedule
            </Text>

            <Text style={styles.points}>
              1) Mix up your workouts to keep things interesting. 
            </Text>

            <Text style={styles.points}>
              2) You can also make your cardio more intense.
            </Text>

            <Text style={styles.points}>
              3) Rest and recovery are critical.
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
