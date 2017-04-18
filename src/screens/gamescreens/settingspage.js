import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight } from 'react-native';
import Header from './../../components/common/Header';
import CardSection from './../../components/common/CardSection';
import Button from './../../components/common/Button';
import Login from './../../screens/authentication/login';
import { LoginManager } from 'react-native-fbsdk';
import HomePage from './../../screens/gamescreens/homepage';
import ProfilePage from './../../screens/gamescreens/profilepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';


export default class Settingspage extends Component {

	handleFacebookLogout = () => {
		LoginManager.logOut()
		this.props.navigator.push({
			component: Login
		});
	}

	handlePress = () => {
		this.props.onPress();
	}



	HomeGo = () => {
		this.props.navigator.push({
			component: HomePage
		});
	}

	ProfileGo = () => {
		this.props.navigator.push({
			component: ProfilePage
		});
	}

	NewGameGo = () => {
		this.props.navigator.push({
			component: NewGamePage
		});
	}

	SettingsGo = () => {
		this.props.navigator.push({
			component: SettingsPage
		});
	}


	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.headerContainer} >
						<Header>
							<Image style={styles.logo} source={require('./../../images/smacktalkLogo.png')} />

						</Header>
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
<View style={styles.containerStyle} navigator={this.props.navigator}>
						<TouchableHighlight onPress={this.HomeGo}>
							<Image
								style={styles.navImage} source={require('./../../images/Home.png')}

							/>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.ProfileGo}>
							<Image
								style={styles.navImage} source={require('./../../images/Profile.png')}

							/>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.NewGameGo}>
							<Image
								style={styles.navImage} source={require('./../../images/NewGame.png')}

							/>
						</TouchableHighlight>
						<TouchableHighlight>
							<Image
								style={styles.navImage} source={require('./../../images/SettingsOrange.png')}

							/>
						</TouchableHighlight>
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
	},
	logo: {
		width: 130,
		height: 60
	},
		containerStyle: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		paddingLeft: 20,
		paddingRight: 20
	},
	navImage: {
		width: 50,
		height: 50
	}
}

AppRegistry.registerComponent('Settingspage', () => Settingspage);



