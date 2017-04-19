import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';

const ProfileCard = ({ person }) => {
	
	return (
		<CardSection>
			<View style={styles.thumbnailContainerStyle}>
				<Image
					style={styles.thumbnailStyle}
					source={{ uri: person.picture.data.url }}
				/>
			</View>
			<View style={styles.headerContentStyle}>
				<Text style={styles.headerTextStyle}>{person.name}</Text>
			</View>
		</CardSection>

	)
};

const styles = {
	thumbnailStyle: {
		height: 100,
		width: 100
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 25
	}
}

export default ProfileCard;