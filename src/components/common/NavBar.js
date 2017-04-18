import React, { Component } from 'react';
import { Text, Image, AppRegistry, TouchableHighlight, View, Navigator } from 'react-native'


const NavBar = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.chidren}
		</View>
	)
}

const styles = {
	containerStyle: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		paddingLeft: 20,
		paddingRight: 20
	},
	navImage: {
		width: 50,
		height: 50
	}
};

export default NavBar;