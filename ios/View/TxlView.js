/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    ScrollView,
} from 'react-native';
import TitleView from './TabTitleView';
import MenuView from './MenuView';
import HeaderView from './HeaderView';


export default class TxlView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderView/>

                <ScrollView automaticallyAdjustContentInsets={false}>
                <View style={styles.menuBackView}>
                    <MenuView name='充话费' image={require('../../images/icon4.png')} onPress={()=>this.menuPress(0)}/>
                    <MenuView name='看电影' image={require('../../images/icon5.png')} onPress={()=>this.menuPress(1)}/>
                    <MenuView name='应用' image={require('../../images/icon6.png')} onPress={()=>this.menuPress(2)}/>
                    <MenuView name='豆瓣' image={require('../../images/icon7.png')} onPress={()=>this.menuPress(3)}/>
                    <MenuView name='关注' image={require('../../images/icon8.png')} onPress={()=>this.menuPress(4)}/>
                </View>
                <View style={styles.menuBackView}>
                    <MenuView name='订单' image={require('../../images/icon9.png')} onPress={()=>this.menuPress(5)}/>
                    <MenuView name='投资' image={require('../../images/icon10.png')} onPress={()=>this.menuPress(6)}/>
                    <MenuView name='游戏' image={require('../../images/icon11.png')} onPress={()=>this.menuPress(7)}/>
                    <MenuView name='电视剧' image={require('../../images/icon5.png')} onPress={()=>this.menuPress(8)}/>
                    <MenuView name='充值' image={require('../../images/icon4.png')} onPress={()=>this.menuPress(9)}/>
                </View>
                </ScrollView>
            </View>
        );
    }

    menuPress(tag: number) {
        Alert.alert('提示', '点击' + tag);
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeef4',
    },
    menuBackView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingTop: 8,
        paddingBottom: 8,
    }


});