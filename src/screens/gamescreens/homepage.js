import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import NavBar from './../../components/common/NavBar';
import Header from './../../components/common/Header';
import Button from './../../components/common/Button';
import CardSection from './../../components/common/CardSection';
import Card from './../../components/common/Card';
const FBSDK = require('react-native-fbsdk');
const {
	LoginButton,
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class Homepage extends Component {

	constructor() {
		super();
		this.state = {
			name: ''
		}
	}

	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			this.setState({ name: result.first_name });
		}
	}

	componentWillMount() {
		const infoRequest = new GraphRequest(
			'/me?fields=first_name,picture.type(large)',
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
						<Header>
							<Text style={styles.headerText}>Hello {this.state.name}!</Text>
						</Header>
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
	image: {
		height: 200,
		width: 200,
		margin: 20
	},
	logo: {
		width: 100,
		height: 50
	},
	headerText: {
		color: '#ffffff',
		fontSize: 20
	}
}

AppRegistry.registerComponent('Homepage', () => Homepage);



