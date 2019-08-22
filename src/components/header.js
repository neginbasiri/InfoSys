import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_header.scss';

const Header = ({ companyName, companyMotto, companyEst }) => (
	<header className="header">
		<h1 className="header-name">{companyName}</h1>
		<p className="header-subtext-left">{companyMotto}</p>
		<p className="header-subtext-right">Since {companyEst}</p>
	</header>
);

Header.propTypes = {
	companyName: PropTypes.string.isRequired,
	companyMotto: PropTypes.string.isRequired,
	companyEst: PropTypes.string.isRequired,
};

export default Header;
