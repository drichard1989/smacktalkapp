import React from 'react';
import { View, AppRegistry } from 'react-native';

const Card = (props) => {
	return (
		<View style=
			{styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export default Card;