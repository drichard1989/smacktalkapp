import React, { Component } from 'react';
import { Text, Image, AppRegistry } from 'react-native'
import { CardSection, Card } from './../common';
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

			<CardSection>
				<Image
					source={require('./../../images/Home.png')}
					onPress={this.HomeGo}
				/>
				<Image
					source={require('./../../images/Profile.png')}
					onPress={this.ProfileGo}
				/>
				<Image
					source={require('./../../images/NewGame.png')}
					onPress={this.NewGameGo}
				/>
				<Image
					source={require('./../../images/Settings.png')}
					onPress={this.SettingsGo}
				/>
			</CardSection>
		)
	}
}

AppRegistry.registerComponent('NavBar', () => NavBar);