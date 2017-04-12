import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ props, children }) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{children}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: 'yellow',
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
	textStyle: {
		fontSize: 20,
		color: 'black'
	}
};

export { Header };