import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import Header from './../../components/common/Header';
import Card from './../../components/common/Card';
import CardSection from './../../components/common/CardSection';
import HomePage from './../../screens/gamescreens/homepage';
import NewGamePage from './../../screens/gamescreens/newgamepage';
import SettingsPage from './../../screens/gamescreens/settingspage';
import axios from 'axios';


export default class Profilepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: 10212631339123286,
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



	async _loadInitialState() {
		try {
			var that = this;
			const value = await AsyncStorage.getItem("id");
			const userInfo = JSON.parse(value);
			console.log("USER INFO");
			// console.log(userInfo);
			if (userInfo !== null) {
				axios.get('https://safe-coast-99118.herokuapp.com/displayStats', {
					params: {
						user_id: userInfo.id
					}
				}).then(function (response) {
					console.log("AXIOS CALL");
					// console.log(response.data);
					that.setState({ userStats: response.data[0] });
					that.setState({ isLoading: false });
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				alert("Error")
			}
		} catch (error) {
			alert("anothererror")
		}
	}

	componentWillMount() {
		this._loadInitialState().done();
	}

	render() {
		console.log(this.state)
		if (this.state.isLoading === true) {
			return (
				<Text>Loading</Text>
			)
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
								<Image style={styles.thumbnailStyle} source={{uri: this.state.userStats.picture}}/>
							</View>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>{this.state.userStats.name}</Text>
							</View>
						</CardSection>
						<CardSection>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>Total Wins:{this.state.userStats.wins}</Text>
							</View>
						</CardSection>
						<CardSection>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>Total Losses:{this.state.userStats.losses}</Text>
							</View>
						</CardSection>
						<CardSection>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>Current Win Streak: {this.state.userStats.currentStreak}</Text>
							</View>
						</CardSection>
						<CardSection>
							<View style={styles.headerContentStyle}>
								<Text style={styles.headerTextStyle}>Longest Win Streak: {this.state.userStats.longestStreak}</Text>
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



