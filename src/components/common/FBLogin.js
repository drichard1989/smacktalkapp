import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text } from 'react-native';
import Homepage from './../../screens/gamescreens/homepage.js'

import { LoginManager } from 'react-native-fbsdk';

export default class FBLogin extends Component {
	constructor(props) {
		super(props);

		// set initial state

	}


	handleFacebookLogin = () => {
		LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
			.then(
			(result) => {
				if (result.isCancelled) {
					console.log('Login cancelled')
				} else {
					console.log('Login success with permissions: ' + result.grantedPermissions.toString())
					this.props.navigator.push({
						component: Homepage
					});
				}
			},
			function (error) {
				console.log('Login fail with error: ' + error)
			}
			)
	}
	render() {
		return (
			<TouchableOpacity
				style={styles.FBButtonStyle}
				onPress={this.handleFacebookLogin}>
				<Text style={styles.textStyle}>LOGIN WITH FACEBOOK</Text>
			</TouchableOpacity>
		)
	}
};

const styles = {
	FBButtonStyle: {
		padding: 15,
		marginLeft: 30,
		marginRight:30,
		backgroundColor: '#ec7c31',
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#ffffff'

	},
	textStyle: {
		textAlign: 'center',
		fontSize: 17,
		color: '#ffffff',
		fontWeight: '700'

	}
};

AppRegistry.registerComponent('FBLogin', () => FBLogin);

