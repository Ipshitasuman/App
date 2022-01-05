import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

export default class Aeroplanes extends Component() {
    render(){
  return (
    <View style = {styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View styles = {styles.subc}>
          <Image source = {require("../assets/a1.jfif")}
                 styles  = {styles.Ai}>
          </Image>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  subc : {
    flex : 0.2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,

  },

  Ai : {
    width : RFValue(40),
    height : RFValue(40),
    padding : 10,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
