import type { Contact } from '../../utils/dataContact';
import ContactItem from './ContactItem';

interface PropTypes {
  contacts: Contact[];
  onDelete: (id: string | number) => void;
}

function ContactList(props: PropTypes){
  const { contacts, onDelete } = props;

  return (
    <div className="contact-list">
      {
        contacts.map((contact:Contact) => (
          <ContactItem 
          key={contact.id}
          onDelete={onDelete}
          {...contact} />
        ))
      }
    </div>
  );
}

export default ContactList;