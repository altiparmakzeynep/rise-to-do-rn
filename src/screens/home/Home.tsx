import { 
    SafeAreaView,
    ScrollView, 
    Text, 
    TouchableOpacity, 
    View, 
    Image,
    FlatList,
    Modal,
    TextInput
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getTasks, createTask, deleteTask, onSetIsCompleted} from '../../storage';
import { Task } from '../../data';

const Home = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [category, setCategory] = useState("");
    const [update, setUpdate] = useState(false);
    const [warnMessage, setWarnMessage] = useState("");

     useEffect(() => {
        fetchTasks();
        setUpdate(!update)
      }, []);

      //for after delete get tasks
      useEffect(() => {
        fetchTasks();
        console.log("a")
      }, [update]);

     const fetchTasks = async () => {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      };

      const handleCreateTask = async (taskName: string, isCompleted: boolean, category: string) => {
        const newTask: Task = {
          id: tasks.length + 1,
          taskName: taskName,
          isCompleted: isCompleted,
          category: category,
        };
        if(taskName != ""){
            await createTask(newTask);
            setTasks([...tasks, newTask]);
            setModalVisible(false)
            setWarnMessage(" ")
        }
        else{
            setWarnMessage("Please type your task's description!")
        }
      };

    const onDeleteTask = async (id: number) => {
        await deleteTask(id)
        setUpdate(!update)
    }
    const handeOnSetIsCompleted = async (id: number) => {
        await onSetIsCompleted(id)
        setUpdate(!update)
    }
    const tasksRenderItem = (item: Task) => {
        return(
            <View style = {styles.taskView}>
                <BouncyCheckbox
                        size={30}
                        style = {{marginLeft: 15}}
                        fillColor={item.category}
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        isChecked = {item.isCompleted}
                        onPress={() => {handeOnSetIsCompleted(item.id)}}
                    />
                {
                  item.isCompleted?  
                  <Text style = {styles.completedTaskText}>{item.taskName}</Text>
                  :
                  <Text style = {styles.taskText}>{item.taskName}</Text> 
                }
                <TouchableOpacity
                    onPress={() => onDeleteTask(item.id)}
                    >
                    <Image 
                        style = {{width: 20, height: 20, marginLeft: 10}}
                        source={{uri: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"}}></Image>
                </TouchableOpacity>
            </View>
        )
    }
    const modalRender = () => {
        return(
            <Modal
                testID='modal'
                transparent={true}
                animationType="slide"
                visible={modalVisible}>
                <View
                 style = {styles.modalView}>
                    <Text style = {styles.headerText}>Write your task:</Text>
                    <TextInput 
                        testID='taskNameInput'
                        onChangeText={(text) => setTaskName(text)}
                        style = {styles.txtInput}/>
                    {
                        warnMessage?
                         <Text style = {{color: 'red', alignSelf: "center"}}>{warnMessage}</Text>
                         :
                         null
                    }
                    <Text style = {styles.headerText}>Select task category color:</Text>
                    <View style = {styles.catView}>
                        <BouncyCheckbox
                            testID='red-checkbox'
                            size={30}
                            fillColor="red"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() =>setCategory("red")}
                        />
                        <BouncyCheckbox
                            testID='green-checkbox'
                            size={30}
                            fillColor="green"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "green" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() =>setCategory("green")}
                        />
                        <BouncyCheckbox
                            testID='orange-checkbox'
                            size={30}
                            fillColor="orange"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "orange" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() =>setCategory("orange")}
                        />
                        <BouncyCheckbox
                            testID='pink-checkbox'
                            size={30}
                            fillColor="pink"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "pink" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() =>setCategory("pink")}
                        />
                        <BouncyCheckbox
                            testID='purple-checkbox'
                            size={30}
                            fillColor="purple"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "purple" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() =>setCategory("purple")}
                        />
                    </View>
                    <TouchableOpacity 
                        testID='createTaskButtonModal'
                        onPress={() => handleCreateTask(taskName, isCompleted, category)}
                        style = {styles.createTaskButtonModal}>
                        <Text style = {styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.createTaskContainer}>
            <Text style = {styles.appText}>Daily Routine Planner App</Text>
            <Text style = {styles.createTaskText}>Create a new task now:</Text>
            <TouchableOpacity 
                testID="createTaskButton" 
                onPress={() => setModalVisible(true)}
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

                {modalRender()}
            </ScrollView>
        </View>
        
   

    </SafeAreaView>
  )
}

export default Home;