import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
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
						<Header />
					</View>
					<View style={styles.bodyContainer}>
						<Text>{this.state.name}</Text>
						<Image source={{ uri: this.state.pic }} style={styles.image}></Image>
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
	}
}

AppRegistry.registerComponent('Profilepage', () => Profilepage);



