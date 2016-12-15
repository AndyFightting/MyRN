import React, {Component} from 'react';
import {Navigator} from 'react-native';
import TabView from './TabView';

export default class MyNav extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{view: TabView, params: { }}}
                renderScene={(route, navigator) => {
                    let ShowedView = route.view;
                    return <ShowedView {...route.params} nav={navigator}/>
                 }}
            />
        );
    }
}
