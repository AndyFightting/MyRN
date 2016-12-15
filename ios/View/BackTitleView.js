/**
 * Created by suguiming on 16/12/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';



export default class BackTitleView extends Component {

    render() {
        let rightPress = this.props.rightPress; //使用：rightPress={()=>{ }}
        let rightTitle = this.props.rightTitle; //使用：rightTitle = '保存'
        let rightImage = this.props.rightImage; //与上面二选一：rightImage={require('../../images/icon0.png')}
        var rightTap = false;

        let rightView;
        if (rightTitle && !rightImage) {
            rightTap = true;
            rightView = <Text style={styles.rightTitle}>{rightTitle}</Text>;
        } else if (!rightTitle && rightImage) {
            rightTap = true;
            rightView = <Image style={styles.rightImage} source={rightImage}/>
        }

        return (
            <View style={styles.backView}>
                <View style={styles.titleBackView}>
                    {/*左边返回部分*/}
                    <TouchableWithoutFeedback onPress={()=>this.backPress()}>
                        <View style={{width:60, justifyContent:'center'}}>
                            <Image style={styles.backImage} source={require('../../images/back.png')}/>
                        </View>
                    </TouchableWithoutFeedback>

                    {/* 中间标题 */}
                    <Text style={styles.title}>{this.props.titleName}</Text>

                    {/*右边按钮部分*/}
                    <TouchableWithoutFeedback onPress={()=>this.rightPress(rightTap,rightPress)}>
                        <View style={{width:60,justifyContent:'center'}}>
                            {rightView}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    backPress() {
        let nav = this.props.nav;
        if (nav) {
            nav.pop();
        }
    }

    rightPress(canTap:bool,rightPress:()=>void) {
        if (canTap && rightPress){
            rightPress();
        }
    }
}

const styles = StyleSheet.create({
    backView: {
        height: 65,
        backgroundColor: '#343339',
    },

    titleBackView: {
        height: 45,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    backImage: {
        width: 10,
        height: 18,
        marginLeft: 10,
    },

    rightTitle: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: 'white',
    },

    rightImage: {
        width: 22,
        height: 22,
        alignSelf:'flex-end',
        marginRight:10,
    },

    title: {
        height: 45,
        lineHeight: 45,
        color: 'white',
        fontSize: 18,
    },
});