import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';

const PersonCard = ({ person }) => {
	return (
		<View style={styles.cardContainer}>
			<View>
				<Image
					source={{ uri: person.picture.data.url }}
					style={styles.imageStyle}

				/>
			</View>
			
			<View>
				<Text style={styles.names}>{person.first_name}</Text>
			</View>
		</View>
	)
};

const styles = {
	imageStyle: {
		height: 100,
		width: 100
	},
	cardContainer: {
		padding: 5,
		backgroundColor: '#fff',
		alignItems: 'center',
		width: 110,
		margin: 10,
		borderRadius: 5,
		borderColor: '#ec7c31',
		borderWidth: 3
	},
	names: {
		alignItems: 'center'
	}
}

export default PersonCard;