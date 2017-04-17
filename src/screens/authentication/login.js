import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image
} from 'react-native';
import Header from './../../components/common/Header';
import CardSection from './../../components/common/CardSection';
import Card from './../../components/common/Card';
import Homepage from './../gamescreens/homepage';
import Button from './../../components/common/Button';
import { LoginManager } from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
	GraphRequestManager,
	AccessToken
} = FBSDK;


export default class Login extends Component {


	constructor(props) {
		super(props);

		this.state = {
			first: '',
			last: '',
			loaded: false
		}
		// set initial state

	}

	goToHomePage(accessToken) {
		this.props.navigator.push({
			component: Homepage
		});
	}

	componentWillMount() {
		console.log(AccessToken)
		AccessToken.getCurrentAccessToken().then(
			(data) => {
				if (data)
					this.goToHomePage();
			}
		)
	}
	handleFacebookLogin = () => {
		LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends', 'user_photos'])
			.then(

			(result) => {
				if (result.isCancelled) {
					console.log('Login cancelled')
				} else {
					console.log('Login success with permissions: ' + result.grantedPermissions.toString())
					AccessToken.getCurrentAccessToken().then(
						(data) => {
							this.goToHomePage();
						}
					)
				}
			},
			function (error) {
				console.log('Login fail with error: ' + error)
			}
			)
	}
	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('./../../images/smacktalkLogo.png')} />
					</View>

				</View>
				<View style={styles.buttonContainer}>
					<Button
						navigator={this.props.navigator}
						onPress={this.handleFacebookLogin}
						title="Login With Facebook"/>
				</View>
			</Image>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	bgImage: {
		flex: 1,
		width: null,
		height: null
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 350,
		height: 200
	},
	buttonContainer: {
		marginBottom: 100
	}
};



AppRegistry.registerComponent('Login', () => Login);