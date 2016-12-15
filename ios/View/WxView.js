/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    RecyclerViewBackedScrollView,
    Text,
    Image,
    StatusBar,
    TouchableHighlight,
    Alert,
} from 'react-native';
import TitleView from './TabTitleView';
import LineView from './LineView';
import ArrowImage from './ArrowImage';

export default class WxView extends Component {
    constructor(props) {
        super(props);

        var dataBlob = [
            {
                "sectionName": "A",
                "rows": [
                    {'id': 3, 'name': '阿贵0', 'detail': 'hello-world0'},
                    {'id': 3, 'name': '阿贵1', 'detail': 'hello-world1'},
                ]
            },
            {
                "sectionName": "B",
                "rows": [
                    {'id': 3, 'name': '阿贵2', 'detail': 'hello-world2'},
                ]
            },
            {
                "sectionName": "C",
                "rows": [
                    {'id': 3, 'name': '阿贵3', 'detail': 'hello-world3'},
                    {'id': 3, 'name': '阿贵4', 'detail': 'hello-world4'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                    {'id': 3, 'name': '阿贵', 'detail': 'hello-world'},
                ]
            }
        ];

        var getSectionData = (dataBlob, sectionID) => {
            let sectionData = dataBlob[sectionID];
            return sectionData.sectionName;

        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            let sectionData = dataBlob[sectionID];
            let row = sectionData.rows[rowID];
            return row;
        };

        var dataSource = new ListView.DataSource({
            getSectionHeaderData: getSectionData,
            getRowData: getRowData,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(dataBlob, this.sections(dataBlob), this.rows(dataBlob)),
        };
    };

    sections = (dataBlob) => {
        let sectionIdentities = [];
        for (let sectionIndex in dataBlob) {
            sectionIdentities.push(sectionIndex);
        }
        return sectionIdentities;
    };

    rows = (dataBlob) => {
        let rowIdentities = [];  //结构：[[1,2],[3,4],[5,6]];
        for (let sectionIndex in dataBlob) {
            let section = dataBlob[sectionIndex];
            let rowArray = [];   //每个section下面的rows

            for (let row in section.rows) {
                rowArray.push(row);
            }
            rowIdentities.push(rowArray);
        }
        return rowIdentities;
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <TitleView titleName='微信'/>
                <ListView
                    style={styles.listView}
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.listItem}
                    renderSeparator={this.separator}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
                    renderSectionHeader={this.renderSectionHeader}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
            </View>
        );
    };

    renderHeader = () => {
        return (
            <View>
                {this.headerItem(require('../../images/icon0.png'), '新朋友')}
                {this.headerItem(require('../../images/icon1.png'), '群聊')}
                {this.headerItem(require('../../images/icon2.png'), '标签')}
                {this.headerItem(require('../../images/icon3.png'), '公众号')}
            </View>
        );
    };

    headerItem(image: string, name: string) {
        return (
            <TouchableHighlight onPress={()=>{Alert.alert('提示',name);}}>
            <View>
                <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
                    <Image style={{width:30,height:30,margin: 8}} source={image}/>
                    <Text >{name}</Text>
                </View>
                <LineView/>
            </View>
            </TouchableHighlight>
        );
    };


    renderFooter = () => {
        return (
            <View style={{height:40,backgroundColor:'gray'}}/>

        );
    };

    renderSectionHeader = (sectionData: string, sectionID: string) => {
        return (
            <View style={{height:20,backgroundColor:'#f1f0f6',flexDirection:'row'}}>
                <Text style={{marginLeft:10,alignSelf:'center'}}>
                    {sectionData}
                </Text>
            </View>
        );
    };

    listItem(rowData: string,
             sectionID: number,
             rowID: number,
             highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <TouchableHighlight style={{flex:1}} onPress={()=>{
                    Alert.alert('提示','section --'+sectionID+'----rowId:'+rowID);
                }}>

                <View style={styles.itemView}>
                    <Image style={styles.itemImage} source={require('../../images/tmp.jpeg')}/>
                    <View style={{flex:1}}>
                        <Text style={{marginTop:15,fontSize:15}}> {rowData.name} </Text>
                        <Text style={{marginTop:5,color:'gray'}}> {rowData.detail} </Text>
                    </View>
                    <ArrowImage/>
                </View>
            </TouchableHighlight>
        );
    };

    separator(sectionID: number,
              rowID: number,
              adjacentRowHighlighted: bool) {
        return (
            <LineView key={`${sectionID}-${rowID}`}/>
        );
    };
};

const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    itemView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 65,
    },

    itemImage: {
        resizeMode: 'cover',
        width: 45,
        height: 45,
        margin: 10,
    },
});