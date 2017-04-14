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
import Button from './../../components/common/Button';
import Homepage from './../gamescreens/homepage';
import FBLogin from './../../components/common/FBLogin';



export default class Login extends Component {

	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('./../../images/smacktalkLogo.png')}/>
					</View>	

				</View>	
				<View style={styles.buttonContainer}>
					<FBLogin navigator={this.props.navigator}/>
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