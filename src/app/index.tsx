import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import { useContext, useState } from 'react';
import { router } from 'expo-router';

import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

export default function HomeScreen() {
  const context = useContext(TaskContext);

  if (!context) return null;

  const { tasks, deleteTask, toggleTask } = context;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'done' | 'pending'>('all');

  const filtered = tasks.filter(task => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === 'all'
        ? true
        : filter === 'done'
        ? task.completed
        : !task.completed;

    return matchSearch && matchFilter;
  });

  return (
    <View style={styles.container}>

      <Button
        title="Add Task"
        onPress={() => router.push('/add-task')}
      />

      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <View style={styles.filters}>
        <Button title="All" onPress={() => setFilter('all')} />
        <Button title="Done" onPress={() => setFilter('done')} />
        <Button title="Pending" onPress={() => setFilter('pending')} />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
            onPress={() =>
              router.push({
                pathname: '/task-details',
                params: {
                  title: item.title,
                  description: item.description,
                  completed: item.completed ? 'Completed' : 'Pending',
                  createdDate: item.createdDate,
                },
              })
            }
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  search: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});