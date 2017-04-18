import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import Card from './../../components/common/Card';
import CardSection from './../../components/common/CardSection';
import HomePage from './../../screens/gamescreens/homepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';

const FBSDK = require('react-native-fbsdk');
const {
	LoginButton,
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class Profilepage extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			pic: ''
		}
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

	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			this.setState({ name: result.name, pic: result.picture.data.url });
			console.log(this.state.pic);
		}
	}

	componentWillMount() {
		const infoRequest = new GraphRequest(
			'/me?fields=name,picture.type(large)',
			null,
			this._responseInfoCallback
		);
		new GraphRequestManager().addRequest(infoRequest).start();
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
						<CardSection>
							<View style={styles.thumbnailContainerStyle}>
								<Image
									style={styles.thumbnailStyle}
									source={{ uri: this.state.pic }}
								/>
							</View>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>{this.state.name}</Text>
							</View>
						</CardSection>
					</View>


					<View style={styles.containerStyle} navigator={this.props.navigator}>
						<TouchableHighlight onPress={this.HomeGo}>
							<Image
								style={styles.navImage} source={require('./../../images/Home.png')}

							/>
						</TouchableHighlight>
						<TouchableHighlight>
							<Image
								style={styles.navImage} source={require('./../../images/ProfileOrange.png')}

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
	logo: {
		width: 130,
		height: 60
	},
	bodyContainer: {
		flexGrow: 1
	},
	image: {
		height: 200,
		width: 200,
		margin: 20
	},
	thumbnailStyle: {
		height: 100,
		width: 100
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 25
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

AppRegistry.registerComponent('Profilepage', () => Profilepage);



