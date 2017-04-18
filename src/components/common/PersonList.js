import React, { Component } from 'react';
import { ScrollView, AppRegistry } from 'react-native';
import PersonCard from './PersonCard';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class PersonList extends Component {

	state = {
		persons: []
	};

	_responseInfoCallback = (error, result) => {
		if (error) {
			alert('Error fetching data: ' +
				error.toString());
		} else {
			this.setState({ persons: result.data })
			console.log(this.state);
		}
	}

	componentWillMount() {
		const infoRequest = new GraphRequest(
			'me/friends?fields=name,id,picture.width(400)',
			null,
			this._responseInfoCallback
		);
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	renderPersons() {
		return this.state.persons.map(person =>
			<PersonCard key={person.name} person={person} />
		);
	}
	render() {
		return (
			<ScrollView>
				{this.renderPersons()}
			</ScrollView>
		)
	}

}

AppRegistry.registerComponent('PersonList', () => PersonList);