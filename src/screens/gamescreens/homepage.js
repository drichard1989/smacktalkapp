import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import axios from 'axios';
import Header from './../../components/common/Header';
import Button from './../../components/common/Button';
import CardSection from './../../components/common/CardSection';
import Card from './../../components/common/Card';
import ProfilePage from './../../screens/gamescreens/profilepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';

const FBSDK = require('react-native-fbsdk');
const {
	LoginButton,
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class Homepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			ID: '',
			isLoading: true
		}
	}
	handlePress = () => {
		this.props.onPress();
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



	componentWillMount() {
		AsyncStorage.getItem('id', (err, result) => {
			// console.log(result);
			this.setState({ user_info: JSON.parse(result), isLoading: false });
			console.log(this.state.user_info.id);
		})
	}



	render() {
		if (this.state.isLoading) {
			return <View><Text>Loading...</Text></View>;
		}
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.headerContainer} >
						<Header>
							<Image style={styles.logo} source={require('./../../images/smacktalkLogo.png')} />
						</Header>
						<Header>
							<Text style={styles.headerText}>Hello {this.state.user_info.name}!</Text>
						</Header>
					</View>
					<View style={styles.bodyContainer}>

					</View>
					<View style={styles.containerStyle} navigator={this.props.navigator}>
						<TouchableHighlight>
							<Image
								style={styles.navImage} source={require('./../../images/HomeOrange.png')}

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

AppRegistry.registerComponent('Homepage', () => Homepage);



