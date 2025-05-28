import type { Contact } from '../../../utils/Contact';
import ContactItem from './ContactItem';

type PropTypes = {
	contacts: Contact[];
	onDelete: (id: number) => void;
};

const ContactList = (props: PropTypes) => {
	const { contacts, onDelete } = props;
	return (
		<div className='contact-list'>
			{contacts.map((contact: Contact) => (
				<ContactItem key={contact.id} onDelete={onDelete} {...contact} />
			))}
		</div>
	);
};

export default ContactList;
