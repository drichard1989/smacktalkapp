import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import Button from './../../components/common/Button';
import HomePage from './../../screens/gamescreens/homepage';
import ProfilePage from './../../screens/gamescreens/profilepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';



export default class NewGameSelector extends Component {

	constructor(props) {
		super(props);

	}

	HomeGo = () => {
		this.props.navigator.push({
			component: HomePage
		})
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
						<Header>
							<Text style={styles.headerText}>Select New Game Type:</Text>
						</Header>
					</View>
					<View style={styles.bodyContainer}>
						<Button
							title="Play using Mutual Friends"/>
					</View>
					<View style={styles.containerStyle} navigator={this.props.navigator}>
						<TouchableHighlight>
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
								style={styles.navImage} source={require('./../../images/NewGameOrange.png')}

							/>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.SettingsGo}>
							<Image
								style={styles.navImage} source={require('./../../images/Settings.png')}

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
	image: {
		height: 200,
		width: 200,
		margin: 20
	},
	logo: {
		width: 130,
		height: 60
	},
	headerText: {
		color: '#ffffff',
		fontSize: 20
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

AppRegistry.registerComponent('NewGame', () => NewGame);