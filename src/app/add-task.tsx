import { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

import { TaskContext } from '../context/TaskContext';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const context = useContext(TaskContext);

  if (!context) return null;

  const { addTask } = context;

  const save = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Title required');
      return;
    }

    addTask({
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdDate: new Date().toLocaleDateString(),
    });

    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button title="Save Task" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});