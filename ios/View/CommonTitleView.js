/**
 * Created by suguiming on 16/12/14.
 */
import React,{Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';

export default class CommonTitleView extends Component{

   render(){
       return(
           <View style={styles.backView}>
               <Text style={styles.title}>{this.props.titleName}</Text>
           </View>
       );
   }
}

const styles = StyleSheet.create({
    backView:{
        height:65,
        backgroundColor:'#343339',
    },

    title:{
        height:45,
        lineHeight:45,
        marginTop:20,
        alignSelf:'center',
        color: 'white',
        fontSize: 18,
    },
});