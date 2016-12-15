/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableHighlight,
    Alert,
} from 'react-native';
import TitleView from './TabTitleView';
import LineView from './LineView';
import ArrowImage from './ArrowImage';
import CommonItemView from './CommonItemView';
import GridView from './GridView';

export default class WoView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }

    render() {
        data = [
            {
                'array': [
                    {'image': require('../../images/ewm.png'), 'name': '相册'},
                    {'image': require('../../images/me@3x.png'), 'name': '收藏'},
                    {'image': require('../../images/ewm.png'), 'name': '钱包'},
                    {'image': require('../../images/me@3x.png'), 'name': '卡包'},
                ]
            },
            {
                'array': [
                    {'image': require('../../images/ewm.png'), 'name': '表情'},
                ]
            },
            {
                'array': [
                    {'image': require('../../images/me@3x.png'), 'name': '设置'},
                ]
            },
        ];

        return (
            <View style={styles.container}>
                <TitleView titleName='我'/>
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <HeadItem/>
                    <CommonItemView data={data} itemPress={this.itemPress.bind(this)}/>
                </ScrollView>

            </View>
        );
    }

    //要bind(this)后这里才能得到this！！
    itemPress(sessionId: number, rowId: number) {
        this.props.nav.push({
            view: GridView,
            params:{

            },
        });
    }
};


class HeadItem extends Component {
    render() {
        return (
            <View style={styles.headItem}>
                <LineView/>
                <TouchableHighlight style={{flex:1}} onPress={()=>this.headItemPressed()}>
                    <View style={{flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image style={styles.headImage} source={require('../../images/tmp.jpeg')}/>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:15,marginTop:14}}>阿贵</Text>
                            <Text style={{fontSize:12,marginTop:6}}>微信号：guimingsu-weixin</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width:25,height:25,alignSelf:'center'}}
                                   source={require('../../images/ewm.png')}/>
                            <ArrowImage/>
                        </View>
                    </View>
                </TouchableHighlight>
                <LineView/>
            </View>

        );
    }

    headItemPressed() {


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeef4',
    },

    headItem: {
        marginTop: 15,
        height: 65,
        backgroundColor: 'white',
    },

    headImage: {
        width: 45,
        height: 45,
        margin: 10,
        borderRadius: 5,
    }
});