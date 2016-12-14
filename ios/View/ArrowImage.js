/**
 * Created by suguiming on 16/12/14.
 */
import React,{Component} from 'react';
import {Image} from 'react-native';

export default class ArrowImage extends Component{
    render(){
        return(
            <Image style={{width:15,height:15,marginRight:10,alignSelf:'center'}} source={require('../../images/rightArrow.png')}/>
    );
    }
}