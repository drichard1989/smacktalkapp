import React from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';

const Header = (props) => {
	const { headerContainer, logoContainer, logo } = styles;

	return (
		<View style={headerContainer}>
			<View style={logoContainer}>
				{props.children}
			</View>
		</View>
	);
};

const styles = {
	headerContainer: {
		backgroundColor: '#146a99',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},

	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10
	},
	logo: {
		width: 100, 
		height: 50,

	}		
};

export default Header;