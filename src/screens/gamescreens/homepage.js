import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';
import NavBar from './../../components/common/NavBar';
import Header from './../../components/common/Header';
import Button from './../../components/common/Button';
import CardSection from './../../components/common/CardSection';
import Card from './../../components/common/Card';


export default class Homepage extends Component {

	render() {
		return (
			<Image source={require('./../../images/appbackground.jpg')} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.headerContainer} >
						<Header/>
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
	navContainer: {

	}
}

AppRegistry.registerComponent('Homepage', () => Homepage);



