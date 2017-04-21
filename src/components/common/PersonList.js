import React, { Component } from 'react';
import { ScrollView, AppRegistry, Text } from 'react-native';
import PersonCard from './PersonCard';
import axios from 'axios';
const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export default class PersonList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			persons: [],
			id: 10212631339123286,
			isLoading: true
		};
		// set initial state

	}




	componentWillMount() {
		axios.get('https://safe-coast-99118.herokuapp.com/displayFriends', {
			params: {
				user_id: this.state.id
			}
		}).then(response =>
				this.setState({ persons: response.data }));
		

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