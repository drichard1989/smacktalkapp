import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text } from 'react-native';
import Login from './../../screens/authentication/login';

import { LoginManager } from 'react-native-fbsdk';

export default class FBLogout extends Component {
	constructor(props) {
		super(props);

		// set initial state

	}


	handleFacebookLogout = () => {
		LoginManager.logOut()
		this.props.navigator.push({
			component: Login
		});
	}

	render() {
		return (
			<TouchableOpacity
				style={styles.FBButtonStyle}
				onPress={this.handleFacebookLogout}
				>
				<Text style={styles.textStyle}>Logout of Facebook</Text>
			</TouchableOpacity>
		)
	}
};

const styles = {
	FBButtonStyle: {
		padding: 15,
		marginLeft: 30,
		marginRight: 30,
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

AppRegistry.registerComponent('FBLogout', () => FBLogout);

