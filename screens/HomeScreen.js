import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

const width = Dimensions.get('window').width; //full width

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
    header: null,
  };

  displayBurgers = () => {
    const { burgers } = this.props;
    if (burgers.length) {
      let b = burgers[0].map((burger, i) => (
          <ListItem key={i} title={`Name: ${burger.name} Rating: ${burger.rating}`}/>
        ));
      return b
    }
  }

  render() {
    const burgers = this.props.screenProps.burgers;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>Best Burgers</Text>
          <Text>LPTO</Text>
          <View>
            {burgers.length > 0 && burgers[0].map((burger, i) => {
              const { bun, patty, sauce, seasoning, sides, name } = burger
              const score = (bun + patty + sauce + seasoning + sides) / 5;
              return (
                <View key={i} style={styles.burgerRow}>
                  <Text style={styles.name}>{i + 1}. {name}</Text>
                  <Text style={styles.score}>{parseFloat(score)}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center'
  },
  burgerRow: {
    marginTop: 25,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'

  },
  score: {
    color: '#9FDD5D',
    fontSize: 18
  },
  name: {
    fontWeight: 'bold'
  }
});
