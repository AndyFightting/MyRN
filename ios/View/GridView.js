/**
 * Created by suguiming on 16/12/15.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Alert,
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
                  <BackTitleView titleName = 'Grid View'
                                 nav = {this.props.nav}
                                 rightImage={require('../../images/icon0.png')}
                                 rightPress={this.rightPress}
                  />
              </View>
          );
      }

    rightPress(){
        Alert.alert('提示','hello');
    }

}

const styles = StyleSheet.create({
    containerView:{
        flex: 1,
        backgroundColor:'white',
    },

});