import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import Header from './../../components/common/Header';
import NavBar from './../../components/common/NavBar';
import PersonList from './../../components/common/PersonList';


export default class NewGame extends Component {

	constructor(props) {
		super(props);

	}




	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<PersonList />
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
	navContainer: {

	}
}

AppRegistry.registerComponent('NewGame', () => NewGame);