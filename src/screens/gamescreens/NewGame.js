import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, ScrollView } from 'react-native';
import Header from './../../components/common/Header';
import PersonList from './../../components/common/PersonList';


export default class NewGame extends Component {

	constructor(props) {
		super(props);

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
							<Text style={styles.headerText}>Select Friend to Play:</Text>
						</Header>
					</View>
					<ScrollView>
						<PersonList />
					</ScrollView>	
				</View>
			</Image>
		)
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
	logo: {
		width: 130,
		height: 60
	},
	headerText: {
		color: '#ffffff',
		fontSize: 20
	}
}

AppRegistry.registerComponent('NewGame', () => NewGame);