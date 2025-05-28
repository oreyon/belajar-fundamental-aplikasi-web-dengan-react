import React, { Fragment } from 'react';
import ContactList from './ContactList';
import { getContacts, type Contact } from '../../../utils/Contact';

interface PropTypes {
	contacts: Contact[];
}

class ContactsPage extends React.Component {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			contacts: getContacts(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
	}

	state: PropTypes;

	onDeleteHandler(id: number) {
		const contacts = this.state.contacts.filter(
			(contact: Contact) => contact.id !== id
		);
		this.setState({
			contacts,
		});
	}

	render() {
		return (
			<Fragment>
				<h2>Contact List</h2>
				<ContactList
					contacts={this.state.contacts}
					onDelete={this.onDeleteHandler}
				/>
			</Fragment>
		);
	}
}

export default ContactsPage;
