import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class Newgamepage extends Component { 

	constructor() {
		super();
		this.state = {
			people: []
		}
	}	

	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' +
				error.toString());
		} else {
			this.setState({ people: result.data })
			console.log(this.state.people);
		}
	}

	componentWillMount() {
		const infoRequest = new GraphRequest(
			'me/friends?fields=first_name,id,picture.width(400)',
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
						<Header/>
					</View>
					<View style={styles.bodyContainer}>
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



