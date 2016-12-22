/**
 * Created by suguiming on 16/12/15.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Alert,
    ListView,
    Image,
    Text,
    Dimensions,
    PixelRatio,
} from 'react-native';
import BackTitleView from './BackTitleView';

export default class GridView extends Component {

    constructor(props) {
        super(props);

        var dataBlob = [0,1,2,3,4,5,6];

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(dataBlob),
            screenWidth: this.screenWidth(),
            screenHeight: this.screenHeight(),
            pxRadio: this.pxRatio(),
        };
    }

    screenWidth() {
        return Dimensions.get('window').width;
    }

    screenHeight() {
        return Dimensions.get('window').height;
    }

    pxRatio() {
        return PixelRatio.get();//一个点有几个像素，像android的一个px和dp比例似的
    }

    render() {
        return (
            <View style={styles.containerView}>
                <BackTitleView titleName='Grid View'
                               nav={this.props.nav}
                               rightImage={require('../../images/icon0.png')}
                               rightPress={this.rightPress}/>
                <ListView
                    style={styles.listView}
                    contentContainerStyle={styles.contentStyle}
                    dataSource={this.state.dataSource}
                    renderRow={this.listItem.bind(this)}
                    onScroll={(event)=>{
                          console.log('滚动中------offSetY:    '+event.nativeEvent.contentOffset.y);
                    }}
                    onMomentumScrollEnd={(event)=>{
                          console.log('onMomentumScrollEnd 滚动结束------offSetY:    '+event.nativeEvent.contentOffset.y);
                    }}
                />
            </View>
        );
    }

    listItem(rowData: string,
             sectionID: number,
             rowID: number,
             highlightRow: (sectionID: number, rowID: number) => void) {
        let itemWidth = this.state.screenWidth / 3;
        return (
            <View style={{width:itemWidth,height: 150}}>
                <Image style={[styles.itemImage,{width:itemWidth-10,height: 120}]}
                       source={require('../../images/tmp.jpeg')}/>
                <Text style={styles.itemText}>{rowData.name}</Text>
            </View>
        );
    };

    rightPress() {
        Alert.alert('提示', 'hello');
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: 'white',
    },
    listView: {
        flex: 1,
        paddingTop: 6,
    },
    contentStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemImage: {
        alignSelf: 'center',
    },
    itemText: {
        alignSelf: 'center',
    },
});