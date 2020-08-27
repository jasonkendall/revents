import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function NavBar({ setFormOpen }) {
	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item>
					<img src='/assets/logo.png' alt='logo' style={{ marginRight: '1em' }} />
					Revents
				</Menu.Item>
				<Menu.Item name='Events' />
				<Menu.Item>
					<Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
				</Menu.Item>
				<Menu.Item position='right'>
					<Button basic inverted content='Log In' />
					<Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
				</Menu.Item>
			</Container>
		</Menu>
	);
}
