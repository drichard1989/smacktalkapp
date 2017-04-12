import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Button, Card, CardSection, Header } from './../../components/common';
import Homepage from './../gamescreens/homepage';
import FBLogin from './../../components/common/FBLogin';



export default class Login extends Component {

	render() {
		return (
			<View>
				<Header>Smacktalk!</Header>
				<FBLogin navigator={this.props.navigator} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('Login', () => Login);