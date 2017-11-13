import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';
import TodoList from './TodoList';
import todoList  from '../json/data';

export default class MainScreen extends Component {
    _onPress = () => {
        Alert.alert('Alert Title');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button style={styles.rightBtn} title='Add Todo' color='dodgerblue' onPress={this._onPress}></Button>
                </View>
                <TodoList styles={styles.content} data={todoList}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 64

    },
    header: {
        height: 64,
        flexDirection: 'row',
        backgroundColor: 'linen',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    rightBtn: {
        flex: 1,
        width: 50,
        justifyContent: 'center',
        marginLeft: 8
    },
    content: {
        flex: 1
    }
});
