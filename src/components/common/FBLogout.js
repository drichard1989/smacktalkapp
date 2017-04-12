import React, { Component } from 'react';
import { Button, AppRegistry } from 'react-native';
import Login from './../../screens/authentication/login';

import { LoginManager } from 'react-native-fbsdk';

export default class FBLogout extends Component {
	constructor(props) {
		super(props);

		// set initial state

	}


	handleFacebookLogout = () => {
		LoginManager.logOut()
	}

	render() {
		return (
			<Button
				style={styles.FBButtonStyle}
				onPress={this.handleFacebookLogout}
				title="Logout of Facebook"
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

AppRegistry.registerComponent('FBLogout', () => FBLogout);

