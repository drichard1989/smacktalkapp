import React from 'react';
import { View } from 'react-native';

const NavSection = (props) => {
	return (
		<View style=
			{style.containerStyle}>
			{props.children}
		</View>
	);
};

const style = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	}
};

export { NavSection };