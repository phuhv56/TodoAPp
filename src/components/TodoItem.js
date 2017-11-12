import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import todoList  from '../json/data';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key})
            },
            right: [
                {
                    onPress: () => {
                        const deleteRow = this.state.activeRowKey
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), type: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    todoList.splice(this.props.index, 1);
                                    this.props.parentFlatList._refeshFlatList(deleteRow)
                                }},
                                {cancelable: true}
                            ]
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    padding: 10,
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                    <Text style={styles.itemName}>
                        {this.props.item.name}
                    </Text>
                    <Text style={styles.itemDesc}>
                        {this.props.item.desc}
                    </Text>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    itemName: {
        color: 'white',
        padding: 5,
        fontSize: 16
    },
    itemDesc: {
        color: 'black',
        padding: 5,
        fontSize: 12
    }
});