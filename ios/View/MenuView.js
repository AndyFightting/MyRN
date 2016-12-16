/**
 * Created by suguiming on 16/12/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';

export default class MenuView extends Component {
    render() {
        let onPress = this.props.onPress;
        return (
            <TouchableWithoutFeedback onPress={()=>this.onPress(onPress)}>
            <View style={styles.containerView}>
                <Image style={styles.image} source={this.props.image}/>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
            </TouchableWithoutFeedback>
        );
    }

    onPress(onPress:()=>void){
        if (onPress){
            onPress();
        }
    }

}

const styles = StyleSheet.create({
    containerView: {
        width: 60,
        alignItems: 'center',
    },

    image: {
        width: 45,
        height: 45,
    },

    text: {
        color: 'gray',
        fontSize: 13,
        marginTop: 5,
    },
});
