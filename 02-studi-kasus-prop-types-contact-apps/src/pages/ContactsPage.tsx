import React from 'react';
import { getData, type IContact } from '../utils/data';
import ContactInput from '../components/ContactInput';
import ContactList from '../components/ContactList';

type ContactsPageState = {
	contacts: IContact[];
};

class ContactsPage extends React.Component {
	constructor(props: ContactsPageState) {
		super(props);

		this.state = {
			contacts: getData(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddContactHandler = this.onAddContactHandler.bind(this);
	}

	state: ContactsPageState;

	onDeleteHandler(id: number) {
		const contacts = this.state.contacts.filter(
			(contact: IContact) => contact.id !== id
		);
		this.setState({
			contacts,
		});
	}

	onAddContactHandler({ name, tag }: { name: string; tag: string }) {
		this.setState((prevState: ContactsPageState) => {
			return {
				contacts: [
					...prevState.contacts,
					{
						id: +new Date(),
						name,
						tag,
						imageUrl: '/images/default.png',
					},
				],
			};
		});
	}

	render() {
		return (
			<div className='contact-app'>
				<h1>Aplikasi Kontak</h1>
				<h2>Tambah Kontak</h2>
				<ContactInput addContact={this.onAddContactHandler} />
				<h2>Daftar Kontak</h2>
				<ContactList
					contacts={this.state.contacts}
					onDelete={this.onDeleteHandler}
				/>
			</div>
		);
	}
}

export default ContactsPage;
