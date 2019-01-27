import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCheck } from '@fortawesome/free-solid-svg-icons'
import {DateTime} from 'luxon';
import classNames from 'classnames';

import './Date.css';

const Date = ({date, completed}) => (
	<div className={classNames("date", {'date--completed': completed})}>
		{completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCalendar} />}
		{completed ? 'Completed ' : 'Due '}
		{DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}
	</div>
);

export default Date;