import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "rgb(230, 250, 250)",
        borderBottomColor: "grey",
        borderBottomWidth: 1
    }
});

export default GoalItem;