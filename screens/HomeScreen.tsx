import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const handleNavigate = () => {
    navigation.navigate('About', {
      userId: 123,
      userName: 'John Doe'
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="About" onPress={handleNavigate} />
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
});