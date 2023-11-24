import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../src/data';

const TASKS_KEY = '@tasks';

export const getTasks = async (): Promise<Task[]> => {
  try {
    const tasksJson = await AsyncStorage.getItem(TASKS_KEY);
    if (tasksJson) {
      return JSON.parse(tasksJson);
    }
    return [];
  } catch (error) {
    console.error('Error getting tasks from AsyncStorage:', error);
    return [];
  }
};

export const createTask = async (newTask: Task): Promise<void> => {
    try {
      const tasks = await getTasks();
      tasks.push(newTask);
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error creating task in AsyncStorage:', error);
    }
  };