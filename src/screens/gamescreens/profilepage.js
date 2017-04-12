import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { Button, Card, CardSection, Header } from './../../components/common';
import NavBar from './../../components/common/NavBar';

export default class Profilepage extends Component { 

	render() {
		return (
			<View>
				<Header>Profile!</Header>	
				<NavBar navigator={this.props.navigator}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('Profilepage', () => Profilepage);



