import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { useNavigation, useRoute } from '@react-navigation/native';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'About'>;

export default function DetailsScreen() {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const route = useRoute<DetailsScreenRouteProp>();
  const { userId, userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>User ID: {userId}</Text>
      <Text>User Name: {userName}</Text>
      <View style={styles.kurwa}><Text>pissssssss</Text></View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  kurwa: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // paddingTop: 32,
    paddingBlock: 12,
    width: '100%',
    backgroundColor: 'ghostwhite'
  },
});