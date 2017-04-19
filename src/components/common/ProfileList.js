import React, { Component } from 'react';
import { ScrollView, AppRegistry, Text, Image, View } from 'react-native';
import ProfileCard from './ProfileCard';
import CardSection from './CardSection';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class ProfileList extends Component {
	state = {
		persons: []
	};


	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			this.setState({ persons: [result] });
			console.log(this.state);
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

	renderPersons() {
		return this.state.persons.map(person =>
			<ProfileCard key={person.name} person={person} />
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderPersons()}
			</ScrollView>

		)
	}

};

const styles = {
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

AppRegistry.registerComponent('ProfileList', () => ProfileList);