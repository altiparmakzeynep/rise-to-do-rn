import { 
    SafeAreaView,
    ScrollView, 
    Text, 
    TouchableOpacity, 
    View, 
    Image,
    FlatList,
    Modal
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PhoneWidth } from '../../config';
import { getTasks, createTask } from '../../storage';
import { Task } from '../../data';

const Home = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
          const fetchedTasks = await getTasks();
          setTasks(fetchedTasks);
        };
    
        fetchTasks();
      }, []);

      const handleCreateTask = async () => {
        const newTask: Task = {
          id: tasks.length + 1,
          taskName: 'Yeni Görev',
          isCompleted: false,
          category: '#ffffff',
        };
    
        await createTask(newTask);
        setTasks([...tasks, newTask]);
      };
      
    const tasksRenderItem = (item: Task) => {
        return(
            <View style = {styles.taskView}>
                <BouncyCheckbox
                        size={30}
                        style = {{marginLeft: 15}}
                        fillColor="pink"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked: boolean) => {}}
                    />
                <Text style = {styles.taskText}>{item.taskName}</Text>
                <TouchableOpacity>
                    <Image 
                        style = {{width: 20, height: 20, marginLeft: PhoneWidth * 0.5}}
                        source={{uri: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"}}></Image>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <SafeAreaView style = {styles.container}>

        {/* <Modal
            animationType="slide"
            style = {styles.modalView}
            transparent={true}
            visible={modalVisible}
           >
            
        </Modal> */}


        <View style = {styles.createTaskContainer}>
            <Text style = {styles.appText}>Daily Routine Planner App</Text>
            <Text style = {styles.createTaskText}>Create a new task now:</Text>
            <TouchableOpacity 
                onPress={() => handleCreateTask()}
                style = {styles.createTaskButton}>
                <Text style = {styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
        </View>

        {/* current task */}
        <View style = {styles.currentTaskContainer}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText}>Today's Tasks:</Text>
            </View>
            <ScrollView style = {styles.taskListView}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item?.id?.toString()}
                    renderItem={({ item }) => (
                        tasksRenderItem(item)
                    )}
                />
               
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Home;