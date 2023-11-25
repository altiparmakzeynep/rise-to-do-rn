import { StyleSheet } from "react-native";
import { PhoneHeight, PhoneWidth } from "../../config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    createTaskContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.2,
        flexDirection: "column",
    },
    appText: {
        margin: 15,
        fontSize: 22,
        color: "#98BAD5",
        fontWeight: "bold"
    },
    createTaskText: {
        marginLeft: 20,
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    createTaskButton: {
        alignSelf: "center",
        width: "75%",
        height: "25%",
        backgroundColor: "#98BAD5",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    currentTaskContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.8,
        borderWidth: 0
    },
    headerContainer: {
        width: PhoneWidth,
        height: "10%",
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        fontSize: 18,
        color: "black",
        marginLeft: 15,
        marginTop: 20
    },
    catView: {
        flexDirection: "row",
        height: "15%",
        marginTop: 10,
        justifyContent: "center"
    },
    taskListView: {
        width: PhoneWidth,
        height: "90%",
        backgroundColor: "white",
    },
    taskView: {
        flexDirection: "row",
        width: PhoneWidth,
        height: PhoneHeight * 0.075,
        backgroundColor: "white",
        alignItems: "center",
    },
    completedTaskText: {
        fontSize: 16,
        color: "black",
        marginLeft: 10,
        textDecorationLine: 'line-through',
        width: PhoneWidth * 0.75
    },
    taskText: {
        fontSize: 16,
        marginLeft: 10,
        color: "black",
        width: PhoneWidth * 0.75
    },
    modalView: {
        borderRadius: 12,
        backgroundColor: "white",
        width: PhoneWidth * 0.95,
        height: PhoneHeight * 0.4,
        marginTop: PhoneHeight * 0.3,
        position: "absolute",
        alignSelf: "center",
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    txtInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: "20%",
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    },
    createTaskButtonModal: {
        alignSelf: "center",
        width: "75%",
        height: "20%",
        backgroundColor: "#98BAD5",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    }
})
export default styles;