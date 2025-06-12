import { Component} from "react";
import {  getContacts, type Contact } from "../../utils/dataContact";
// import ContactInput from "../../components/organism/ContactInput";
// import ContactList from "../../components/organism/ContactList";
import Navigation from "../../components/layouts/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePageWrapper from "./HomePage";
import AddPageContact from "./AddPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { getUserLogged, putAccessToken } from "../../libs/api/contact.service";

type PropTypes = object;

type AuthedUser = {
  id: string;
  email: string;
  name: string;
}

interface StateTypes {
  contacts: Contact[];
  authedUser: AuthedUser | null;
  initializing: boolean;
}

class ContactAppPage extends Component<PropTypes,StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      contacts: getContacts(),
      authedUser: null,
      initializing: true,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  async onLoginSuccess({ accessToken }: { accessToken: string }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    console.log('AUTH USER',data);
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  handleLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    })

    putAccessToken('');
  }

  async componentDidMount() {
   const {data} = await getUserLogged();
   this.setState(() => {
    return {
      authedUser: data,
      initializing: false,
      contacts: getContacts(),
    }
   })
  }

  render(){
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
       <div className='contact-app'>
          <header className='contact-app__header'>
            <h1>Aplikasi Kontak</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
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
            <Navigation name={this.state.authedUser.name} onLogout={this.handleLogout}/>
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