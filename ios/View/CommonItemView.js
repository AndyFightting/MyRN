/**
 * Created by suguiming on 16/12/14.
 */
import React, {Component} from 'react';
import {StyleSheet, Image, View, Text,TouchableHighlight,} from 'react-native';
import LineView from './LineView';
import ArrowImage from './ArrowImage';


/**
 * 数据源结构
1. data = [
    {'array':[
        {'image':require('../../images/ewm.png'),'name':'表情'},
        {'image':require('../../images/ewm.png'),'name':'表情'},
    ]},
    {'array':[
        {'image':require('../../images/me@3x.png'),'name':'设置'},
    ]},
];

2. 必须传入itemPress(sessionId:number,rowId:number){} 方法参数
 */

export default class CommonItemView extends Component {
    render() {
        var sessions = [];
        let itemPress = this.props.itemPress;

        this.props.data.forEach(function (session) {
            sessions.push(<SessionView key={sessions.length}
                                       sessionId={sessions.length}
                                       data={session.array}
                                       itemPress ={itemPress}
            />);
        });

        return (
            <View>
                {sessions}
            </View>
        );
    }
}

class SessionView extends Component {
    render() {
        var rows = [];
        var size = this.props.data.length;
        let sessionId = this.props.sessionId;
        let itemPress = this.props.itemPress;

        this.props.data.forEach(function (rowData) {
                var showLine = true;
                if (rows.length == size - 1) {
                    showLine = false;
                }

                rows.push(<RowView key={rows.length}
                                   sessionId={sessionId}
                                   rowId={rows.length}
                                   data={rowData}
                                   showLine={showLine}
                                   itemPress ={itemPress}
                />)
            }
        );

        return (
            <View style={styles.sessionView}>
                <LineView/>
                {rows}
                <LineView/>
            </View>
        );
    }
}

class RowView extends Component {
    render() {
        var lineView = undefined;
        if (this.props.showLine) {
            lineView = <View style={{height:0.5,backgroundColor:"#e2e2e2",marginLeft:15}}/>;
        }

        let rowId = this.props.rowId;
        let sessionId = this.props.sessionId;
        let itemPress = this.props.itemPress;

        return (
            <TouchableHighlight style={{flex:1}} onPress={()=>this.itemPressed(sessionId,rowId,itemPress)}>
            <View style={{height:38,backgroundColor:'white'}}>
                <View style={{flexDirection: 'row',flex:1}}>
                    <Image style={styles.iconImage} source={this.props.data.image}/>
                    <Text style={styles.nameText}> {this.props.data.name} </Text>
                    <ArrowImage/>
                </View>
                {lineView}
            </View>
            </TouchableHighlight>
        );
    }

    //回调到控件初始化的地方
    itemPressed(sessionId:number,rowId:number,itemPress:(sessionId:number,rowId:number)=>void){
        itemPress(sessionId,rowId);
    }
}

const styles = StyleSheet.create({
    sessionView: {
        backgroundColor: 'white',
        marginTop: 15,
    },

    iconImage: {
        width: 28,
        height: 28,
        marginLeft: 8,
        alignSelf: 'center',
    },
    nameText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 14,
    }
});

