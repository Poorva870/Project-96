import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class FactsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.webp')}
          style={styles.backgroundImage}>
          <ScrollView>
            <Text style={{ fontSize: 30 }}>Fun Facts about Food</Text>

            <Text style={styles.points}>
              1) A healthy diet is more effective than exercise.
            </Text>
            <Text style={styles.points}>
              2) Ketchup was once believed to have medicinal qualities that
              could cure, among other ailments, diarrhea.
            </Text>

            <Text style={styles.points}>
              3) Chili peppers contain a chemical that tricks your mouth into
              "thinking" it's being burned — that's why spicy food hurts so
              much.
            </Text>

            <Text style={styles.points}>
              4) An 11-year-old child invented the Popsicle by accident.
            </Text>

            <Text style={styles.points}>
              5) Potatoes can absorb and reflect Wi-fi signals.
            </Text>

            <Text style={styles.points}>
              6) White chocolate is not actually chocolate.
            </Text>

            <Text style={styles.points}>
              7) Before being domesticated, chickens only produced about a dozen
              eggs a year. Now they can produce hundreds.
            </Text>

            <Text style={styles.points}>
              8) Apples give you more energy than coffee
            </Text>

            <Text style={styles.points}>
              9) Humans’ DNA is 60% the same as bananas.
            </Text>

            <Text style={styles.points}>
              10) Crackers will give you cavities faster than candy.
            </Text>

            <Text style={styles.points}>11) Potatoes are 80% water.</Text>

            <Text style={styles.points}>
              12) The most expensive pizza in the world costs $12,000 dollars.
            </Text>

            <Text style={styles.points}>
              13) Cheese is the most stolen food in the world.
            </Text>

            <Text style={styles.points}>
              14) Chocolate has been used as a currency in ancient civilizations
              of Mexico and South America.
            </Text>

            <Text style={styles.points}>15) Honey is bee vomit.</Text>

            <Text style={styles.points}>
              16) Mountain Dew contains orange juice.
            </Text>

            <Text style={styles.points}>
              17) Food tastes different when you’re flying.
            </Text>

            <Text style={styles.points}>
              18) Grapes will explode if you put them in the microwave.
            </Text>

            <Text style={styles.points}>
              19) Fruit snacks and cars are coated in the same type of wax.
            </Text>

            <Text style={styles.points}>
              20) In an emergency, coconut water can be used for blood plasma.
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
