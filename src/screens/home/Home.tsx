import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

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
        <View style = {styles.currentTaskContainer}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText}>Today's Tasks:</Text>
                <Text>See all</Text>
            </View>
        </View>
        <View style = {styles.completedTaskContainer}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText}>Completed Tasks:</Text>
                <Text>See all</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home;