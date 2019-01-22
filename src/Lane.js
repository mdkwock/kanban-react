import React from 'react';

import './Lane.css';

const Lane = ({
	title,
	children
}) => (
	<div className="lane">
		<h3>{title}</h3>
		{children}
	</div>	
);

export default Lane;