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
} from 'react-native';

import TitleView from './CommonTitleView';
import LineView from './LineView';
import ArrowImage from './ArrowImage';

export default class WxView extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {'id':1,'name':'andy1','detail':'hello-world1'},
                {'id':2,'name':'andy2','detail':'hello-world2'},
                {'id':3,'name':'andy3','detail':'hello-world3'},
                {'id':4,'name':'andy4','detail':'hello-world4'},
                {'id':5,'name':'andy5','detail':'hello-world5'},
                {'id':6,'name':'andy6','detail':'hello-world6'},
                {'id':7,'name':'andy7','detail':'hello-world7'},
            ])
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleView titleName = '微信'/>
                <ListView
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.listItem}
                    renderSeparator={this.separator}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
            </View>
        );
    }

    listItem(rowData: string,
             sectionID: number,
             rowID: number,
             highlightRow: (sectionID: number, rowID: number) => void){
        return(
                <View style={styles.itemView}>
                    <Image style={styles.itemImage} source={require('../../images/tmp.jpeg')}/>
                    <View style={{flex:1}}>
                        <Text style={{marginTop:10,fontSize:17}}> {rowData.name} </Text>
                        <Text style={{marginTop:5,color:'gray'}}> {rowData.detail} </Text>
                    </View>
                    <ArrowImage/>
                </View>
        );
    }

    separator(sectionID: number,
              rowID: number,
              adjacentRowHighlighted: bool){
        return(
            <LineView key={`${sectionID}-${rowID}`} />
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    itemView: {
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'white',
        height: 65,
    },

    itemImage:{
        resizeMode: 'cover',
        width: 45,
        height:45,
        margin:10,
    },
});