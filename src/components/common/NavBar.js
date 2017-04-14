import React, { Component } from 'react';
import { Text, Image, AppRegistry, TouchableHighlight, View, Navigator } from 'react-native'
import HomePage from './../../screens/gamescreens/homepage';
import ProfilePage from './../../screens/gamescreens/profilepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';


export default class NavBar extends Component {
	constructor(props) {
		super(props);
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
			<View style={styles.containerStyle}>
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
				<TouchableHighlight onPress={this.SettingsGo}>
					<Image
						style={styles.navImage} source={require('./../../images/Settings.png')}
						
					/>
				</TouchableHighlight>
			</View>
		)
	}
}
const styles = {
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
};

AppRegistry.registerComponent('NavBar', () => NavBar);