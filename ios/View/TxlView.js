/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    ListView,
    Dimensions,
    PixelRatio,
} from 'react-native';
import MenuView from './MenuView';
import HeaderView from './HeaderView';
import ViewPager from 'react-native-viewpager';

const BANNER_IMGS = [
    require('../../images/1.jpg'),
    require('../../images/2.jpg'),
    require('../../images/3.jpg'),
    require('../../images/4.jpg'),
];
const len = 160;

export default class TxlView extends Component {

    // 构造
    constructor(props) {
        super(props);


        var listDataBlob = [0,1,2,3];

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            screenWidth: this.screenWidth(),
            screenHeight: this.screenHeight(),
            pxRadio: this.pxRatio(),
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            listData: ds.cloneWithRows(listDataBlob),
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
            <View style={styles.container}>
                <HeaderView/>

                <ListView
                    automaticallyAdjustContentInsets={false}
                    style={styles.listView}
                    renderHeader={this.renderHeader}
                    renderRow={this.listItem.bind(this)}
                    contentContainerStyle={styles.contentStyle}
                    dataSource={this.state.listData}/>
            </View>
        );
    }

        renderHeader = () => {
        return(
            <View>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this.renderPage}
                    isLoop={true}
                    autoPlay={true}/>
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
            </View>
        );
    }

    listItem(rowData: string,
             sectionID: number,
             rowID: number,
             highlightRow: (sectionID: number, rowID: number) => void) {
        let itemWidth = this.state.screenWidth / 3;
        return (
            <View style={{height: 100,flexDirection:'row',marginBottom:10}}>
                {this.listItemView()}
                {this.listItemView()}
                {this.listItemView()}
            </View>
        );
    };

    listItemView(){
        return(
            <View style={{flex:1}}>
                <Image style={{height:80,width:this.state.screenWidth/-10,margin:5}} source={require('../../images/3.jpg')}/>
                <Text style={{alignSelf:'center'}}>iPhone</Text>

            </View>
        );
    };


    renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    menuPress(tag: number) {
        Alert.alert('提示', '点击' + tag);
    }

};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
    },
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
    },
    listView:{
      marginBottom:50,
        paddingBottom:10,
    },


});