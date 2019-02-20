import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
    console.log(this.props)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>Home</Text>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
