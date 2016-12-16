/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from "react";
import {TabBarIOS} from "react-native";

import WxView from './WxView';
import TxlView from './TxlView';
import FxView from './FxView';
import WoView from './WoView';

export default class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'txlTab',
            wxBadge: 0,
        };
    }

    render() {
        return (
            <TabBarIOS
                barTintColor = 'white'
                tintColor='#16b600'
                unselectedTintColor = 'gray'>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="微信"
                    selected={this.state.selectedTab === 'wxTab'}
                    badge={this.state.wxBadge>0 ? this.state.wxBadge : undefined}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'wxTab',
                            wxBadge: this.state.wxBadge+1,
                        });
                    }}>
                    <WxView  nav = {this.props.nav}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="通讯录"
                    selected={this.state.selectedTab === 'txlTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'txlTab',
                        });
                    }}>
                    <TxlView  nav = {this.props.nav}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="发现"
                    selected={this.state.selectedTab === 'fxTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'fxTab',
                        });
                    }}>
                    <FxView  nav = {this.props.nav}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="我"
                    selected={this.state.selectedTab === 'wTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'wTab',
                        });
                    }}>
                    <WoView nav = {this.props.nav}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
