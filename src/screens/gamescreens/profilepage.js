import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import Card from './../../components/common/Card';
import CardSection from './../../components/common/CardSection';
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
}

AppRegistry.registerComponent('Profilepage', () => Profilepage);



