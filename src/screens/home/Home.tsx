import { 
    SafeAreaView,
    ScrollView, 
    Text, 
    TouchableOpacity, 
    View, 
    Image
} from 'react-native';
import React from 'react';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PhoneWidth } from '../../config';

const Home = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.createTaskContainer}>
            <Text style = {styles.appText}>Daily Routine Planner App</Text>
            <Text style = {styles.createTaskText}>Create a new task now:</Text>
            <TouchableOpacity style = {styles.createTaskButton}>
                <Text style = {styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
        </View>

        {/* current task */}
        <View style = {styles.currentTaskContainer}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText}>Today's Tasks:</Text>
            </View>
            <ScrollView style = {styles.taskListView}>
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
                    <Text style = {styles.taskText}>Çiçekkleri sula</Text>
                    <TouchableOpacity>
                        <Image 
                            style = {{width: 20, height: 20, marginLeft: PhoneWidth * 0.5}}
                            source={{uri: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"}}></Image>
                    </TouchableOpacity>
                  
                </View>
               
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Home;