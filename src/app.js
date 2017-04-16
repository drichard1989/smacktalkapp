'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, Navigator } from 'react-native';
import Login from './screens/authentication/login';
const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

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
				configureScene={() => { return Navigator.SceneConfigs.FadeAndroid; }}
				renderScene={(route, navigator) => {
					if (route.component) {
						return React.createElement(route.component, { navigator });
					}
				}}
			/>
		);
	}
}