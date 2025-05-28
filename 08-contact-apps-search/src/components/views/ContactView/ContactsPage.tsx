import React, { Fragment } from 'react';
import ContactList from './ContactList';
import {
	deleteContact,
	getContacts,
	type Contact,
} from '../../../utils/Contact';
import ContactSearch from './ContactSearch';
import { useSearchParams } from 'react-router-dom';

function ContactsPageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get('keyword') || '';

	function handleChangeSearchParams(keyword: string) {
		setSearchParams({ keyword });
	}

	return (
		<ContactsPage
			onKeywordChange={handleChangeSearchParams}
			keyword={keyword}
			defaultKeyword={keyword}
		/>
	);
}

export default ContactsPageWrapper;

interface PropTypes {
	onKeywordChange: (keyword: string) => void;
	defaultKeyword?: string;
	keyword?: string;
}

interface StateTypes {
	contacts: Contact[];
	keyword: string;
}

class ContactsPage extends React.Component<PropTypes, StateTypes> {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			contacts: getContacts(),
			keyword: props.defaultKeyword || '',
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
	}

	onDeleteHandler(id: number) {
		deleteContact(id);

		this.setState(() => {
			return {
				contacts: getContacts(),
			};
		});
	}

	onKeywordChangeHandler(keyword: string) {
		this.setState(() => {
			return {
				keyword,
			};
		});

		this.props.onKeywordChange(keyword);
	}

	render() {
		const contacts = this.state.contacts.filter((contact) => {
			return contact.name
				.toLowerCase()
				.includes(this.state.keyword.toLowerCase());
		});

		return (
			<Fragment>
				<h2>Contact List</h2>
				<ContactSearch
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChangeHandler}
				/>
				<ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
			</Fragment>
		);
	}
}
