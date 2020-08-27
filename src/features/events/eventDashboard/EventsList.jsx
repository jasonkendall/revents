import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

export default function EventsList({ events }) {
	return <Fragment>{events.map((event) => <EventListItem event={event} key={event.id} />)}</Fragment>;
}
