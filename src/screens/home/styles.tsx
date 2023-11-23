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
        borderWidth: 0,
        flexDirection: "column",
    },
    appText: {
        margin: 15,
        fontSize: 22,
        color: "#F9E795",
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
        backgroundColor: "#F9E795",
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
        height: PhoneHeight * 0.4,
        borderWidth: 1
    },
    headerContainer: {
        width: PhoneWidth,
        height: "10%",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontSize: 18,
        color: "black",
        marginLeft: 15
    },
    completedTaskContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.4,
        borderWidth: 0
    }
})
export default styles;