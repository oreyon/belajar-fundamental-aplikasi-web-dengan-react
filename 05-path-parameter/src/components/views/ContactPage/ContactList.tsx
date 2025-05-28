import type { IContact } from '../utils/data';
import ContactItem from './ContactItem';

type PropTypes = {
	contacts: IContact[];
	onDelete: (id: number) => void;
};

const ContactList = (props: PropTypes) => {
	const { contacts, onDelete } = props;
	return (
		<div className='contact-list'>
			{contacts.map((contact: IContact) => (
				<ContactItem key={contact.id} onDelete={onDelete} {...contact} />
			))}
		</div>
	);
};

export default ContactList;
