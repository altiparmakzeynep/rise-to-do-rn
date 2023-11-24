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
    // görevi oluşturmadan önce 1 saniyelik gecikme
    setTimeout(async () => {
      const tasks = await getTasks();
      tasks.push(newTask);
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    }, 1000); // 1000 milisaniye = 1 saniye
  } catch (error) {
    console.error('Error creating task in AsyncStorage:', error);
  }
};

export const onSetIsCompleted = async (taskId: number): Promise<Task | null> => {
  const tasksFromAsync = await getTasks();
  const task = tasksFromAsync.find((task) => task.id === taskId);
  if(task){
    task.isCompleted = !task.isCompleted
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasksFromAsync));
    return task;
  }
  else{
    return null;
  }
}

export const deleteTask = async (taskId: number): Promise<Task | null> => {
  try {
    const tasksFromStorage = await getTasks();
    const index = tasksFromStorage.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      const deletedTask = tasksFromStorage.splice(index, 1)[0];
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasksFromStorage));
      return deletedTask;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error deleting task in AsyncStorage:', error);
    return null;
  }
};

