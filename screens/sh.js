import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
let ships = require("../assets/temp_ships.json");
import { FlatList } from "react-native-gesture-handler";
let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };

export default class Ships extends Component() {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
    }
    
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }

    render(){
       return (
        <View style = {styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View styles = {styles.subc}>
          <Image source = {require("../assets/s1.jfif")}
                 styles  = {styles.Ai}>
          </Image>
          <Text style = {styles.tt}>{this.props.ships.Name}</Text>
          <Text style = {styles.tt}>{this.props.ships.Speciality}</Text>
        </View>

        <View styles = {styles.subc}>
          <Image source = {require("../assets/s1.jfif")}
                 styles  = {styles.Ai}>
          </Image>
          <Text style = {styles.tt}>{this.props.ships.Name}</Text>
          <Text style = {styles.tt}>{this.props.ships.Speciality}</Text>
        </View>

        <View styles = {styles.subc}>
          <Image source = {require("../assets/s2.jfif")}
                 styles  = {styles.Ai}>
          </Image>
          <Text style = {styles.tt}>{this.props.ships.Name}</Text>
          <Text style = {styles.tt}>{this.props.ships.Speciality}</Text>
        </View>

        <View styles = {styles.subc}>
          <Image source = {require("../assets/s3.jfif")}
                 styles  = {styles.Ai}>
          </Image>
          <Text style = {styles.tt}>{this.props.ships.Name}</Text>
          <Text style = {styles.tt}>{this.props.ships.Speciality}</Text>
        </View>

        <View styles = {styles.subc}>
          <Image source = {require("../assets/s4.jfif")}
                 styles  = {styles.Ai}>
          </Image>
          <Text style = {styles.tt}>{this.props.ships.Name}</Text>
          <Text style = {styles.tt}>{this.props.ships.Speciality}</Text>
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
