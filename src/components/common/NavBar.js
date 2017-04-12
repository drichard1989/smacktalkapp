import React, { Component } from 'react';
import { Text, Image, AppRegistry, TouchableHighlight } from 'react-native'
import { CardSection, Card, NavSection } from './../common';
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

			<NavSection>
				<TouchableHighlight onPress={this.HomeGo}>
					<Image
						source={require('./../../images/Home.png')}
						
					/>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.ProfileGo}>
					<Image
						source={require('./../../images/Profile.png')}
						
					/>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.NewGameGo}>
					<Image
						source={require('./../../images/NewGame.png')}
						
					/>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.SettingsGo}>
					<Image
						source={require('./../../images/Settings.png')}
						
					/>
				</TouchableHighlight>
			</NavSection>
		)
	}
}

AppRegistry.registerComponent('NavBar', () => NavBar);