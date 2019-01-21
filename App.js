import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  startCounter() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(`./assets/galaxy.jpg`)}
          style={styles.backgroundImage}
        >
          <Text style={styles.title}>Timer</Text>
          <Text style={styles.title}>{this.state.counter}s</Text>
          <View style={styles.button}>
            <Button
              onPress={() => {
                if (this.state.counter == 0)
                  this.setState({
                    counterIntervalId: setInterval(
                      this.startCounter.bind(this),
                      1000
                    )
                  });
              }}
              title="Start"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                clearInterval(this.state.counterIntervalId);
                this.setState({ counter: 0 });
              }}
              title="Reset"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  title: {
    margin: 20,
    fontSize: 45,
    color: "white"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  button: {
    margin: 20
  }
});
