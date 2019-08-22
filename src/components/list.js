import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import '../styles/_list.scss';

const List = ({ data }) => (
	<div className="list">
		<div className="list-header">
			<h2 className="list-header-name">Our Employees</h2>
			<div className="list-header-sort">Sort</div>
			<div className="list-header-filter">Filter</div>
		</div>
		<div className="list-content">
			{data.map(listItem => (
				<Card key={listItem.id} item={listItem}/>
			))}
		</div>
	</div>
);

List.propTypes = {
	data: PropTypes.array,
};

export default List;
