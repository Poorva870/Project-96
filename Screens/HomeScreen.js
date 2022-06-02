import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: story }) => {
    //return <StoryCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/background.webp')}
            style={styles.backgroundImage}>
            <ScrollView>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.iconImage}></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Nutrition App</Text>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => {
                    console.log('clikced');
                    this.props.navigation.navigate('FactsScreen');
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontFamily: 'Bubblegum-Sans',
                    }}>
                    Fun facts about food you eat
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => {
                    console.log('clikced');
                    this.props.navigation.navigate('HealthScreen');
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontFamily: 'Bubblegum-Sans',
                    }}>
                    Health Tips
                  </Text>
                </TouchableOpacity>

                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontFamily: 'Bubblegum-Sans',
                      marginTop: 100,
                    }}>
                    Regular tasks to complete
                  </Text>
                </View>
              </View>
              <View style={styles.taskButtonContainer}>
                <TouchableOpacity
                  style={styles.taskButton}
                  onPress={() => {
                    console.log('clikced');
                    this.props.navigation.navigate('DietScreen');
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontFamily: 'Bubblegum-Sans',
                    }}>
                    Regular Diet
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.taskButton}
                  onPress={() => {
                    console.log('clikced');
                    this.props.navigation.navigate('WorkoutScreen');
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontFamily: 'Bubblegum-Sans',
                    }}>
                    {' '}
                    Workout
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  appTitle: {
    flex: 0.08,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 20,
  },
  iconImage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
    marginTop: 20,
  },
  appTitleText: {
    color: 'black',
    fontSize: RFValue(48),
    fontFamily: 'Bubblegum-Sans',
  },
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 80,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#88f2ef',
    backgroundColor: '#88f2ef',
    marginTop: 40,
    width: 230,
    height: 60,
    flexDirection: 'row',
  },
  taskButtonContainer: {
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  taskButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#a7dff2',
    backgroundColor: '#a7dff2',
    marginTop: 10,
    marginRight: 20,
    width: 100,
    height: 100,
    flexDirection: 'row-reverse',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
