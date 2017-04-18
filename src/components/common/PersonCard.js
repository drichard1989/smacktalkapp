import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';

const PersonCard = ({ person }) => {
	return (
		<Card>
			<CardSection>
				<View>
					<Image
						source={{ uri: person.picture.data.url }}
						style={styles.imageStyle}

					/>
				</View>
				<Text>{person.name}</Text>
				<View>

				</View>
			</CardSection>
		</Card>
	)
};

const styles = {
	imageStyle: {
		height: 100,
		flex: 1,
		width: 100
	}
}

export default PersonCard;