import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // 🔥 LOAD FROM STORAGE
  useEffect(() => {
    const loadTasks = async () => {
      const saved = await AsyncStorage.getItem('tasks');
      if (saved) {
        setTasks(JSON.parse(saved));
      }
    };

    loadTasks();
  }, []);

  // 💾 SAVE TO STORAGE
  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}