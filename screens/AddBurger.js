import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default class AddBurger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
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
    const { name, rating } = this.state;

    firebase.database().ref(`burgers/${uid}`).update({
     [name] : {
        name,
        rating
      }
    }).then((data)=>{
      //success callback
      console.log('data ' , data)
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
  }
  di

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.input}>
          <Input
            placeholder='Burger'
            shake={true}
            onChangeText={(e) => this.updateBurger(e,'name')}
          />
          <Input
            placeholder='Rating'
            shake={true}
            onChangeText={(e) => this.updateBurger(e,'rating')}
          />
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
});
