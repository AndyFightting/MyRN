/**
 * Created by suguiming on 16/12/14.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import TitleView from './TabTitleView';


export default class TxlView extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <TitleView titleName = '通讯录'/>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#efeef4',
    },

});