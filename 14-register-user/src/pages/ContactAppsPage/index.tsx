import { Component} from "react";
import {  getContacts, type Contact } from "../../utils/dataContact";
// import ContactInput from "../../components/organism/ContactInput";
// import ContactList from "../../components/organism/ContactList";
import Navigation from "../../components/layouts/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePageWrapper from "./HomePage";
import AddPageContact from "./AddPage";
import RegisterPage from "./RegisterPage";

type PropTypes = object;

interface StateTypes {
  contacts: Contact[];
  authedUser: string | null;
}

class ContactAppPage extends Component<PropTypes,StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      contacts: getContacts(),
      authedUser: null,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler (id: number) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({name, tag}: Omit<Contact, 'id' | 'imageUrl'>) {
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

    if (this.state.authedUser === null) {
      return (
       <div className='contact-app'>
          <header className='contact-app__header'>
            <h1>Aplikasi Kontak</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>} />
              <Route path="/register" element={<RegisterPage/>} />
            </Routes>
          </main>
        </div>
      );
    }


      return (
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>Aplikasi Kontak</h1>
            <Navigation/>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<HomePageWrapper/>}/>
              <Route path="/add" element={<AddPageContact/>} />
            </Routes>
        </main>
      </div>
      )
  }
}

export default ContactAppPage;