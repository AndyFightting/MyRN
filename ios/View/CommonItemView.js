/**
 * Created by suguiming on 16/12/14.
 */
import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import LineView from './LineView';
import ArrowImage from './ArrowImage';

export default class CommonItemView extends Component {
    render() {
        var sessions = [];
        this.props.data.forEach(function (session) {
            sessions.push(<SessionView key={sessions.length} data={session.array}/>);
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

        this.props.data.forEach(function (rowData) {
                var showLine = true;
                if (rows.length == size - 1) {
                    showLine = false;
                }

                rows.push(<RowView key={rows.length} data={rowData} showLine={showLine}/>)
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

        return (
            <View style={{height:38}}>
                <View style={{flexDirection: 'row',flex:1}}>
                    <Image style={styles.iconImage} source={this.props.data.image}/>
                    <Text style={styles.nameText}> {this.props.data.name} </Text>
                    <ArrowImage/>
                </View>
                {lineView}
            </View>
        );
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

