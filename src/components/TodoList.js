import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert
} from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            deleteRowKey: null
        }
    }

    _refeshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            };
        })
    }

    _renderItem = ({item, index}) => (
        <TodoItem
            item={item} 
            index={index} 
            parentFlatList={this}
            />
    );

    _keyExtractor = (item, index) => item.key;

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 22,
        backgroundColor: 'antiquewhite',
        height: 64

    },
    title: {
        flex: 4,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4

    },
    rightBtn: {
        flex: 1,
        padding: 4
    },
    header: {
        fontSize: 20
    }
});