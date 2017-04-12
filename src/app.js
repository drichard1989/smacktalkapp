'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, View, Navigator } from 'react-native';
import { Button, Header } from './components/common';
import Login from './screens/authentication/login';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			component: Login
		};
	}


	render() {
		return (
			<Navigator
				initialRoute={{ component: this.state.component }}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				renderScene={(route, navigator) => {
					if (route.component) {
						return React.createElement(route.component, { navigator });
					}
				}}
			/>
		);
	}
}