import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({ event }) {
	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image size='tiny' circular src={event.hostPhotoURL} />
						<Item.Content>
							<Item.Header content={event.title} />
							<Item.Description>Hosted by {event.hostedBy}</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name='clock' /> Date: {event.date}
					<Icon name='marker' /> Venue: {event.venue}
				</span>
			</Segment>
			<Segment secondary>
				<List horizontal>
					{event.attendees.map((attendee) => <EventListAttendee attendee={attendee} key={attendee.id} />)}
				</List>
			</Segment>
			<Segment clearing>
				<div>{event.description}</div>
				<Button color='teal' floated='right' content='View' />
			</Segment>
		</Segment.Group>
	);
}
