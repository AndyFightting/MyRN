/**
 * Created by suguiming on 16/12/14.
 */

import React, {Component} from "react";
import {TabBarIOS,} from "react-native";

import WxView from './WxView';
import TxlView from './TxlView';
import FxView from './FxView';
import WoView from './WoView';

export default class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'wTab',
            wxBadge: 0,
            txlBadge: 0,
            fxBadge: 0,
            woBadge: 0,
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
                    <WxView/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="通讯录"
                    selected={this.state.selectedTab === 'txlTab'}
                    badge={this.state.txlBadge>0 ? this.state.txlBadge : undefined}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'txlTab',
                            txlBadge: this.state.txlBadge+1,
                        });
                    }}>
                    <TxlView/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="发现"
                    selected={this.state.selectedTab === 'fxTab'}
                    badge={this.state.fxBadge>0 ? this.state.fxBadge : undefined}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'fxTab',
                            fxBadge: this.state.fxBadge+1,
                        });
                    }}>
                    <FxView/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('../../images/me@3x.png')}
                    title="我"
                    selected={this.state.selectedTab === 'wTab'}
                    badge={this.state.woBadge>0 ? this.state.woBadge : undefined}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'wTab',
                            woBadge: this.state.woBadge+1,
                        });
                    }}>
                    <WoView/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
