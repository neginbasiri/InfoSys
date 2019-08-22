import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_card.scss';

const Card = ({ item }) => {
	const { avatar, firstName, lastName, bio } = item;
	console.log(item);
	return (
		<div className="card">
			<img src={avatar} alt="avatar" className="card-avatar" />
			<div className="card-details">
				<div>{firstName}</div>
				<div>{lastName}</div>
				<p>{bio}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object,
};

export default Card;
