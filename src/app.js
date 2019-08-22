import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import './styles/_app.scss';
import Header from './components/header';
import List from './components/list';

function App() {
	const [data, setData] = useState({});
	const { companyInfo, employees } = data;

	useEffect(() => {
		axios
			.get('sample-data.json')
			.then(({ data }) => setData(data))
			.catch(e => console.log(e));
	}, []);
console.log(data);
	return (
		<div className="app">
			{isEmpty(data) ? (
				<h1>Loading...</h1>
			) : (
				<Fragment>
					<Header {...companyInfo} />
					<List data={employees}/>
				</Fragment>
			)}
		</div>
	);
}

export default App;
