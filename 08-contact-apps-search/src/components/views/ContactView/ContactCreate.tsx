import { Fragment } from 'react/jsx-runtime';
import { addContact } from '../../../utils/Contact';
import ContactInput from './ContactInput';
import { useNavigate } from 'react-router-dom';

function ContactCreate() {
	const navigate = useNavigate();

	function handleAddContact(contact: { name: string; tag: string }) {
		addContact(contact);
		navigate('/');
	}

	return (
		<Fragment>
			<h2>Add Contact</h2>
			<ContactInput addContact={handleAddContact} />
		</Fragment>
	);
}

export default ContactCreate;
