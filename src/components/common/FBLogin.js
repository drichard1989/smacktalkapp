import React, { Component } from 'react';
import { Button, AppRegistry } from 'react-native';
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
			  (result) =>  {
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
			<Button
				style={styles.FBButtonStyle}	
				onPress={this.handleFacebookLogin}
				title="Login with Facebook"
			/>
		)
	}
};

const styles = {
	FBButtonStyle: {
		marginLeft: 5,
		marginRight: 5,
		borderColor: '#ffffff'
	}
};

AppRegistry.registerComponent('FBLogin', () => FBLogin);

