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
    TextInput,
} from 'react-native';

export default class HeaderView extends Component {

    render() {
        return (
            <View style={styles.backView}>
                <View style={styles.titleView}>
                    <Image resizeMode='center' style={styles.iconImage} source={require('../../images/header0.png')}/>
                    <View style={styles.centerView}>
                        <Image resizeMode='center' style={styles.searchImage}
                               source={require('../../images/header2.png')}/>
                        <TextInput style={styles.inputText} placeholder={'冬季美靴穿起来'}/>
                        <Image resizeMode='center' style={styles.voiceImage}
                               source={require('../../images/header3.png')}/>
                    </View>
                    <Image style={styles.scanImage} source={require('../../images/header1.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backView:{
        backgroundColor: '#fb0628',
        paddingTop:20 ,
    },

    titleView: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },

    centerView: {
        flex: 1,
        backgroundColor: 'white',
        height: 30,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconImage: {
        width: 50,
        height: 23,
        marginLeft: 10,
        marginRight: 10,
    },

    searchImage: {
        width: 15,
        height: 15,
        marginLeft: 5,
        marginRight: 8,
    },

    inputText: {
        height: 22,
        flex: 1,
        alignSelf: 'center',
        fontSize: 13,
    },

    voiceImage: {
        width: 20,
        height: 30,
        marginLeft: 8,
        marginRight: 5,
    },

    scanImage: {
        width: 22,
        height: 22,
        marginLeft: 10,
        marginRight: 10,
    }

});