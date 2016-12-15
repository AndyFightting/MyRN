/**
 * Created by suguiming on 16/12/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';

export default class BackTitleView extends Component {

    render() {
        return (
            <View style={styles.backView}>
                <View style={styles.titleBackView}>
                    <TouchableWithoutFeedback onPress={this.backPress()}>
                    <View style={{width:60, justifyContent:'center'}}>
                        <Image style={styles.backImage} source={require('../../images/back.png')}/>
                    </View>
                    </TouchableWithoutFeedback>

                    <Text style={styles.title}>{this.props.titleName}</Text>

                    <View style={{width:60,backgroundColor:'gray'}}>
                    </View>
                </View>
            </View>
        );
    }

    backPress(){

        Alert.alert('ss','ss')
    }

}

const styles = StyleSheet.create({
    backView: {
        height: 65,
        backgroundColor: '#343339',
    },

    titleBackView:{
        height:45,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    backImage: {
        width: 12,
        height: 20,
        marginLeft: 10,
    },

    title: {
        height: 45,
        lineHeight: 45,
        color: 'white',
        fontSize: 18,
    },
});