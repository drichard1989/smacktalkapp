import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text } from 'react-native';
import Homepage from './../../screens/gamescreens/homepage.js'


export default class FBLogin extends Component {
	constructor(props) {
		super(props);

	}
	handlePress = () => {
		this.props.onPress();
	}



	render() {
		return (
			<TouchableOpacity
				style={styles.FBButtonStyle}
				onPress={this.handlePress}>
				<Text style={styles.textStyle}>LOGIN WITH FACEBOOK</Text>
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

AppRegistry.registerComponent('FBLogin', () => FBLogin);

