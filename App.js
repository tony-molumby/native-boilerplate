import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Form, Input, Item, Button, Label } from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>This is a test</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
