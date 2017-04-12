import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { Button, Card, CardSection, Header, NavSection } from './../../components/common';
import NavBar from './../../components/common/NavBar';

export default class Homepage extends Component { 

	render() {
		return (
			<View>
				<Header>Home!</Header>	
				<NavBar navigator={this.props.navigator}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('Homepage', () => Homepage);



