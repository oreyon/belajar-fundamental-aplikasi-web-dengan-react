import { Component} from "react";
import { getData, type Contact } from "../../utils/dataContact";
import ContactInput from "../../components/organism/ContactInput";
import ContactList from "../../components/organism/ContactList";

type PropTypes = object;

interface StateTypes {
  contacts: Contact[];
}

class ContactAppPage extends Component<PropTypes,StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler (id: number) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler(name:string, tag:string) {
    this.setState((prevState: StateTypes) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          }
        ]
      }
    })
  }

  render(){
      return (
        <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
      )
  }
}

export default ContactAppPage;