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
import axios from 'axios';
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
			user_info: {},
			friends_list: []
		}
		// set initial state

	}

	_updateUserDB = () => {
		// console.log("update user");
		// console.log(this.state.friends_list);
		// console.log(this.state.user_info);
		axios({
			method: 'put',
			url: 'https://safe-coast-99118.herokuapp.com/updateUserInfo',
			data: {
				user_info: this.state.user_info,
				friends_list: this.state.friends_list
			}
		}).then(function (response) {
			// This is responsible for returning friends_list in the console. why?
			console.log(response);
		})
			.catch(function (error) {
				console.log(error);
			});
	}

	goToHomePage(accessToken) {

		// let resultsObject = {
		// 	attachments: undefined,
		// 	comments: undefined,
		// 	likes: undefined
		// }
		const infoRequest = new GraphRequest(
			'/me?fields=name,picture.type(large)',
			null,
			// this._responseInfoCallback
			(error, response) => {
				if (error) {
					console.log(error);
				}
				// console.log(response);
				this.state.user_info = response;
				// console.log(this.state.user_info);
			}
		);
		const infoRequest2 = new GraphRequest(
			'me/friends?fields=name,id,picture.width(400)',
			null,
			// this._responseInfoCallback
			(error, response) => {
				if (error) {
					console.log(error);
				}
				this.state.friends_list = response.data;
			}
		);
		// const batchRequest = new GraphR
		new GraphRequestManager().addRequest(infoRequest).addRequest(infoRequest2).addBatchCallback(() => this._updateUserDB()).start();
		// new GraphRequestManager().addRequest(infoRequest2).start();
		// console.log(1);

		
		this.props.navigator.push({
			component: Homepage
		});
	}

	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			this.setState({ user_info: result });
			console.log(result);
		}
	}

	_responseInfoCallback2 = (error, result) => {
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			// console.log(2);
			this.setState({ friends_list: result.data })
			// console.log(this.state.friends_list)
		}
	}



	componentWillMount() {
		// console.log(AccessToken)
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
					// console.log('Login success with permissions: ' + result.grantedPermissions.toString())
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
						title="Login With Facebook" />
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