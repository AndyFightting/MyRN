/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Alert,
} from 'react-native';
import TitleView from './TabTitleView';
import CommonItemView from './CommonItemView';

export default class FxView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        data = [
            {
                'array': [
                    {'image': require('../../images/me@3x.png'), 'name': '朋友圈'},
                ]
            },
            {
                'array': [
                    {'image': require('../../images/ewm.png'), 'name': '扫一扫'},
                    {'image': require('../../images/me@3x.png'), 'name': '摇一摇'},
                ]
            },
            {
                'array': [
                    {'image': require('../../images/ewm.png'), 'name': '附近的人'},
                    {'image': require('../../images/me@3x.png'), 'name': '漂流瓶'},
                ]
            },
            {
                'array': [
                    {'image': require('../../images/me@3x.png'), 'name': '购物'},
                    {'image': require('../../images/ewm.png'), 'name': '游戏'},
                ]
            },
        ];

        return (
            <View style={styles.container}>
                <TitleView titleName='发现'/>
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <CommonItemView data={data} itemPress={this.itemPress}/>
                </ScrollView>
            </View>
        );
    }

    itemPress(sectionID: number, rowID: number){
       Alert.alert(
            '提示',
            '点击 sessionID ='+sectionID+'---- rowID='+rowID
        )

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeef4',
    },
});