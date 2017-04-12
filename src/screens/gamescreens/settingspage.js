import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { Button, Card, CardSection, Header } from './../../components/common';
import NavBar from './../../components/common/NavBar';
import FBLogout from './../../components/common/FBLogout';

export default class Settingspage extends Component { 

	render() {
		return (
			<View>
				<Header>Settings!</Header>	
				<FBLogout/>
				<NavBar navigator={this.props.navigator}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('Settingspage', () => Settingspage);



