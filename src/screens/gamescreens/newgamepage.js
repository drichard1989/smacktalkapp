import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import NewGame from './../../screens/gamescreens/NewGame';
import Button from './../../components/common/Button';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class Newgamepage extends Component {





	goToNewGame = () => {
		this.props.navigator.push({
			component: NewGame
		})
	}


	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.headerContainer} >
						<Header />
					</View>
					<View style={styles.bodyContainer}>
						<Button
							navigator={this.props.navigator}
							title="Create New Game"
							onPress={this.goToNewGame} />
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
	navContainer: {

	}
}

AppRegistry.registerComponent('Newgamepage', () => Newgamepage);



