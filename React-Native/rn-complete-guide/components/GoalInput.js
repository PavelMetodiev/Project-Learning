import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonStyle}>
                    <Button title="Cancel" color="red" width='25%' onPress={props.onCancel} />
                    <Button title="Add" width='25%' onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }

})

export default GoalInput;
