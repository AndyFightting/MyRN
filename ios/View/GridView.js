/**
 * Created by suguiming on 16/12/15.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import BackTitleView from './BackTitleView';

export default class GridView extends Component{

      constructor(props) {
        super(props);
        this.state = {};
      }

      render(){
          return(
              <View style={styles.containerView}>
                  <BackTitleView titleName = 'Grid View'/>



              </View>

          );
      }
}

const styles = StyleSheet.create({
    containerView:{
        flex: 1,
        backgroundColor:'white',
    },

});