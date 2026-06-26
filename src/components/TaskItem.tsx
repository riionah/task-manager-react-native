import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onPress,
}: any) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

      <Text
        style={[
          styles.title,
          task.completed && styles.completed,
        ]}
      >
        {task.title}
      </Text>

      <View style={styles.actions}>

        <TouchableOpacity onPress={onToggle}>
          <Text style={styles.ok}>✓</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>🗑</Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  ok: {
    color: 'green',
    fontSize: 18,
  },
  delete: {
    color: 'red',
    fontSize: 18,
  },
});