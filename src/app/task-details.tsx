import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TaskDetailsScreen() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <Text>{params.description}</Text>
      <Text>{params.completed}</Text>
      <Text>{params.createdDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});