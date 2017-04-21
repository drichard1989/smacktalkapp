import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import Header from './../../components/common/Header';
import Card from './../../components/common/Card';
import CardSection from './../../components/common/CardSection';
import HomePage from './../../screens/gamescreens/homepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';
import ProfileList from './../../components/common/ProfileList';
import axios from 'axios';


export default class Profilepage extends Component {

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
	HomeGo = () => {
		this.props.navigator.push({
			component: HomePage
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
							<Text style={styles.headerText}>Profile</Text>
						</Header>
					</View>
					<View style={styles.bodyContainer}>
						<CardSection>
							<View style={styles.thumbnailContainerStyle}>
								<Image
									style={styles.thumbnailStyle}
									source={{ uri: this.state.user_info.picture.data.url }}
								/>
							</View>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>{this.state.user_info.name}</Text>
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
	},
	headerText: {
		color: '#ffffff',
		fontSize: 20
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
	}
}

AppRegistry.registerComponent('Profilepage', () => Profilepage);



