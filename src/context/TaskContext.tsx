import {
  createContext,
  useState,
  useEffect,
} from 'react';

import { Task } from '../types/Task';
import { getTasks, saveTasks } from '../storage/taskStorage';

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // LOAD
  useEffect(() => {
    const load = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    load();
  }, []);

  // SAVE
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // ADD
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  // DELETE
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // TOGGLE
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}