import React from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import * as firebase from 'firebase';
import Slider from "react-native-slider";

export default class AddBurger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
      bun: 1,
      patty: 1,
      seasoning: 1,
      sauce: 1,
      sides: 1,
      notes: ""
    };
    this.updateBurger = this.updateBurger.bind(this);
    this.saveBurger = this.saveBurger.bind(this);
  }

  static navigationOptions = {
    title: 'Add Burger',
  };

  updateBurger(e,value) {
    this.setState({
      [value]: e
    })
  }

  async saveBurger() {
    const { user: { uid } } = this.props.screenProps;
    const { name,
      bun,
      patty,
      seasoning,
      sauce,
      sides,
      notes
    } = this.state;

    firebase.database().ref(`burgers/${uid}`).update({
     [name] : {
        name,
        bun,
        patty,
        seasoning,
        sauce,
        sides,
        notes
      }
    }).then((data)=>{
      //success callback
      this.props.navigation.navigate('Home')
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
  }
  di

  render() {
    const { bun, patty, seasoning, sauce, sides } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.input}>
          <Input
            placeholder='Location'
            shake={true}
            onChangeText={(e) => this.updateBurger(e,'name')}
          />
          <View style={styles.inputContainer}>
            <Text>
              Bun
            </Text>
            <Text>
              {bun}
            </Text>
            <Slider
              minimumTrackTintColor="#EDAC15"
              thumbTintColor="#EDAC15"
              value={1}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onSlidingComplete={(e) => this.updateBurger(e,'bun')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>
              Patty
            </Text>
            <Text>
              {patty}
            </Text>
            <Slider
              minimumTrackTintColor="#9F7E69"
              thumbTintColor="#9F7E69"
              value={1}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onSlidingComplete={(e) => this.updateBurger(e,'patty')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>
              Seasoning
            </Text>
            <Text>
              {seasoning}
            </Text>
            <Slider
              minimumTrackTintColor="#F1D6B8"
              thumbTintColor="#F1D6B8"
              value={1}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onSlidingComplete={(e) => this.updateBurger(e,'seasoning')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>
              Sauce
            </Text>
            <Text>
              {sauce}
            </Text>
            <Slider
              minimumTrackTintColor="#6F1D1B"
              thumbTintColor="#6F1D18"
              value={1}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onSlidingComplete={(e) => this.updateBurger(e,'sauce')}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>
              Sides
            </Text>
            <Text>
              {sides}
            </Text>
            <Slider
              minimumTrackTintColor="#9FDD5D"
              thumbTintColor="#9FDD5D"
              value={1}
              minimumValue={1}
              maximumValue={10}
              step={1}
              onSlidingComplete={(e) => this.updateBurger(e,'sides')}
            />
          </View>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder='Notes'
              multiline={true}
              numberOfLines={4}
              onChangeText={(e) => this.updateBurger(e, 'notes')}
            />
          </View>
          <Button title='Save Burger' onPress={this.saveBurger}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
});
