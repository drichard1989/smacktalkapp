import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import CardSection from './../../components/common/CardSection';
import Button from './../../components/common/Button';
import Login from './../../screens/authentication/login';
import { LoginManager } from 'react-native-fbsdk';


export default class Settingspage extends Component {

	handleFacebookLogout = () => {
		LoginManager.logOut()
		this.props.navigator.push({
			component: Login
		});
	}
	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.headerContainer} >
						<Header />
					</View>
					<View style={styles.bodyContainer}>
						<View style={styles.buttonContainer}>
							<Button
								navigator={this.props.navigator}

								title="Logout of Facebook"
								onPress={this.handleFacebookLogout} />
						</View>
						<View style={styles.buttonContainer}>
							<Button
								title="Delete Account"

							/>
						</View>

					</View>
					<View style={styles.navContainer}>
						<NavBar navigator={this.props.navigator} />
					</View>
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
	bodyContainer: {
		flexGrow: 1
	},
	buttonContainer: {
		margin: 10
	}
}

AppRegistry.registerComponent('Settingspage', () => Settingspage);



