/**
 * Created by suguiming on 16/12/14.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';
import TitleView from './CommonTitleView';
import LineView from './LineView';
import ArrowImage from './ArrowImage';
import CommonItemView from './CommonItemView';

export default class WoView extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        data = [
            {'array':[
                {'image':require('../../images/ewm.png'),'name':'相册'},
                {'image':require('../../images/me@3x.png'),'name':'收藏'},
                {'image':require('../../images/ewm.png'),'name':'钱包'},
                {'image':require('../../images/me@3x.png'),'name':'卡包'},
            ]},
            {'array':[
                {'image':require('../../images/ewm.png'),'name':'表情'},
            ]},
            {'array':[
                {'image':require('../../images/me@3x.png'),'name':'设置'},
            ]},
        ];

        return(
            <View style={styles.container}>
                <TitleView titleName = '我'/>
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <HeadItem/>
                    <CommonItemView data = {data}/>
                </ScrollView>

            </View>
        );
    }
};


class HeadItem extends Component{
    render(){
        return(
            <View style={styles.headItem}>
                <LineView/>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Image style={styles.headImage} source={require('../../images/tmp.jpeg')}/>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:15,marginTop:14}}>阿贵</Text>
                        <Text style={{fontSize:12,marginTop:6}}>微信号：guimingsu-weixin</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width:25,height:25,alignSelf:'center'}} source={require('../../images/ewm.png')}/>
                        <ArrowImage/>
                    </View>
                </View>
                <LineView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#efeef4',
    },

    headItem:{
        marginTop:15,
        height:65,
        backgroundColor:'white',
    },

    headImage:{
        width:45,
        height:45,
        margin:10,
        borderRadius:5,
    }
});